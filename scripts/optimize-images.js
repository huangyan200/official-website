/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');

const imageTargets = [
  'client/public/images/projects/project-1.jpg',
  'client/public/images/projects/project-2.jpg',
  'client/public/images/projects/project-3.jpg',
  'client/public/images/projects/project-4.jpg',
  'client/public/images/contact/contact-office.jpg',
];

const targetDesktopBytes = 230 * 1024;
const desktopWidths = [1600, 1400, 1200, 1024];
const jpegQualities = [72, 68, 64, 60, 56, 52];
const webpQualities = [70, 66, 62, 58, 54, 50];

const mobileWidth = 960;
const mobileJpegQuality = 66;
const mobileWebpQuality = 62;

async function encodeDesktop(sourceBuffer, format) {
  const qualities = format === 'jpeg' ? jpegQualities : webpQualities;
  let best = null;

  for (const width of desktopWidths) {
    const resized = await sharp(sourceBuffer)
      .resize({ width, withoutEnlargement: true })
      .toBuffer();

    for (const quality of qualities) {
      const encoded =
        format === 'jpeg'
          ? await sharp(resized)
              .jpeg({ quality, mozjpeg: true, progressive: true })
              .toBuffer()
          : await sharp(resized).webp({ quality }).toBuffer();

      const candidate = { buffer: encoded, size: encoded.length, width, quality };
      if (!best || candidate.size < best.size) {
        best = candidate;
      }
      if (candidate.size <= targetDesktopBytes) {
        return candidate;
      }
    }
  }

  return best;
}

async function optimizeImage(relativePath) {
  const absolutePath = path.resolve(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`[skip] missing file: ${relativePath}`);
    return null;
  }

  const sourceBuffer = fs.readFileSync(absolutePath);
  const sourceSize = sourceBuffer.length;

  const webpPath = absolutePath.replace(/\.jpg$/i, '.webp');
  const mobileJpegPath = absolutePath.replace(/\.jpg$/i, '-sm.jpg');
  const mobileWebpPath = absolutePath.replace(/\.jpg$/i, '-sm.webp');

  const desktopJpeg = await encodeDesktop(sourceBuffer, 'jpeg');
  const desktopWebp = await encodeDesktop(sourceBuffer, 'webp');

  fs.writeFileSync(absolutePath, desktopJpeg.buffer);
  fs.writeFileSync(webpPath, desktopWebp.buffer);

  const mobileJpeg = await sharp(sourceBuffer)
    .resize({ width: mobileWidth, withoutEnlargement: true })
    .jpeg({ quality: mobileJpegQuality, mozjpeg: true, progressive: true })
    .toBuffer();
  fs.writeFileSync(mobileJpegPath, mobileJpeg);

  const mobileWebp = await sharp(sourceBuffer)
    .resize({ width: mobileWidth, withoutEnlargement: true })
    .webp({ quality: mobileWebpQuality })
    .toBuffer();
  fs.writeFileSync(mobileWebpPath, mobileWebp);

  return {
    relativePath,
    sourceSize,
    newJpegSize: desktopJpeg.size,
    jpegWidth: desktopJpeg.width,
    jpegQuality: desktopJpeg.quality,
    webpSize: desktopWebp.size,
    webpWidth: desktopWebp.width,
    webpQuality: desktopWebp.quality,
    mobileJpegSize: mobileJpeg.length,
    mobileWebpSize: mobileWebp.length,
  };
}

async function main() {
  console.log(`Optimizing ${imageTargets.length} images...`);
  const results = [];

  for (const file of imageTargets) {
    const result = await optimizeImage(file);
    if (!result) continue;

    results.push(result);
    console.log(
      `[ok] ${result.relativePath} | jpg: ${result.sourceSize} -> ${result.newJpegSize} bytes (w=${result.jpegWidth},q=${result.jpegQuality}) | webp: ${result.webpSize} bytes (w=${result.webpWidth},q=${result.webpQuality}) | sm.jpg: ${result.mobileJpegSize} bytes | sm.webp: ${result.mobileWebpSize} bytes`
    );
  }

  const totalBefore = results.reduce((sum, item) => sum + item.sourceSize, 0);
  const totalAfterJpg = results.reduce((sum, item) => sum + item.newJpegSize, 0);
  const totalAfterWebp = results.reduce((sum, item) => sum + item.webpSize, 0);
  const totalAfterMobileJpg = results.reduce((sum, item) => sum + item.mobileJpegSize, 0);
  const totalAfterMobileWebp = results.reduce((sum, item) => sum + item.mobileWebpSize, 0);

  console.log('---');
  console.log(`Total JPG before: ${totalBefore} bytes`);
  console.log(`Total JPG after : ${totalAfterJpg} bytes`);
  console.log(`Total WEBP size : ${totalAfterWebp} bytes`);
  console.log(`Total SM JPG size : ${totalAfterMobileJpg} bytes`);
  console.log(`Total SM WEBP size: ${totalAfterMobileWebp} bytes`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
