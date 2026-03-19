#!/usr/bin/env node

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const OUT_DIR = path.join(ROOT_DIR, 'dist', 'server');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const hasNft = fs.existsSync(path.join(ROOT_DIR, 'node_modules', '@vercel', 'nft'));

function formatDuration(start) {
  const elapsed = Date.now() - start;
  const seconds = Math.floor(elapsed / 1000);
  const milliseconds = elapsed % 1000;
  return `${seconds}.${String(milliseconds).padStart(3, '0')}s`;
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const units = ['KB', 'MB', 'GB'];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(1)} ${units[unitIndex]}`;
}

function directorySize(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return 0;
  }

  const stats = fs.statSync(targetPath);
  if (stats.isFile()) {
    return stats.size;
  }

  return fs.readdirSync(targetPath).reduce((total, entry) => {
    return total + directorySize(path.join(targetPath, entry));
  }, 0);
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: ROOT_DIR,
      env: process.env,
      stdio: 'inherit',
      shell: process.platform === 'win32',
      ...options,
    });

    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
    });
  });
}

function copyRootHtmlFiles(sourceDir, destinationDir) {
  if (!fs.existsSync(sourceDir)) {
    return;
  }

  const htmlFiles = fs.readdirSync(sourceDir).filter((file) => file.endsWith('.html'));
  htmlFiles.forEach((file) => {
    fs.copyFileSync(path.join(sourceDir, file), path.join(destinationDir, file));
  });
}

async function main() {
  const totalStart = Date.now();
  const packageJsonPath = path.join(ROOT_DIR, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const actionPlugins = Object.keys(packageJson.actionPlugins || {});

  console.log('🗑️  [0/5] 安装插件');
  let stepStart = Date.now();
  if (actionPlugins.length > 0) {
    await run(npxCmd, ['fullstack-cli', 'action-plugin', 'init']);
  } else {
    console.log('   ℹ️  未检测到 actionPlugins，跳过。');
  }
  console.log(`   ⏱️  耗时: ${formatDuration(stepStart)}\n`);

  console.log('📝 [1/5] 更新 openapi 代码');
  stepStart = Date.now();
  await run(npmCmd, ['run', 'gen:openapi']);
  console.log(`   ⏱️  耗时: ${formatDuration(stepStart)}\n`);

  console.log('🗑️  [2/5] 清理 dist 目录');
  stepStart = Date.now();
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  console.log(`   ⏱️  耗时: ${formatDuration(stepStart)}\n`);

  console.log('🔨 [3/5] 并行构建 server 和 client');
  stepStart = Date.now();
  const serverScript = process.platform === 'win32' ? 'build:server:win' : 'build:server';
  const clientScript = process.platform === 'win32' ? 'build:client:win' : 'build:client';
  await Promise.all([run(npmCmd, ['run', serverScript]), run(npmCmd, ['run', clientScript])]);
  console.log(`   ⏱️  耗时: ${formatDuration(stepStart)}\n`);

  console.log('📦 [4/5] 准备 server 依赖产物');
  stepStart = Date.now();
  fs.mkdirSync(path.join(OUT_DIR, 'dist', 'client'), { recursive: true });
  copyRootHtmlFiles(path.join(DIST_DIR, 'client'), path.join(OUT_DIR, 'dist', 'client'));

  const runScript = path.join(ROOT_DIR, 'scripts', 'run.sh');
  if (fs.existsSync(runScript)) {
    fs.copyFileSync(runScript, path.join(OUT_DIR, 'run.sh'));
  }

  fs.rmSync(path.join(DIST_DIR, 'scripts'), { recursive: true, force: true });
  fs.rmSync(path.join(DIST_DIR, 'tsconfig.node.tsbuildinfo'), { recursive: true, force: true });
  console.log(`   ⏱️  耗时: ${formatDuration(stepStart)}\n`);

  console.log('✂️  [5/5] 智能依赖裁剪');
  stepStart = Date.now();
  if (hasNft) {
    await run(process.execPath, [path.join(ROOT_DIR, 'scripts', 'prune-smart.js')], { shell: false });
  } else {
    console.log('   ℹ️  未检测到 @vercel/nft，跳过依赖裁剪。');
  }
  console.log(`   ⏱️  耗时: ${formatDuration(stepStart)}\n`);

  console.log('构建完成');
  console.log(`   ⏱️  耗时: ${formatDuration(totalStart)}\n`);
  console.log('📊 构建产物统计:');
  console.log(`   产物大小:     ${formatBytes(directorySize(OUT_DIR))}`);
  console.log(`   node_modules: ${formatBytes(directorySize(path.join(DIST_DIR, 'node_modules')))}`);
  console.log(`   临时目录:     ${os.tmpdir()}`);
}

main().catch((error) => {
  console.error('\n构建失败');
  console.error(error.message);
  process.exit(1);
});
