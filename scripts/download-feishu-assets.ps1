$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot

$assets = @(
  @{
    Url = "https://miaoda.feishu.cn/aily/api/v1/files/static/220dca602dbc4ec78c51b5523a784d60_ve_miaoda"
    OutFile = "client/public/images/projects/project-1.jpg"
  },
  @{
    Url = "https://miaoda.feishu.cn/aily/api/v1/files/static/b8e3db34733b4f928a9450ceb4f60d97_ve_miaoda"
    OutFile = "client/public/images/projects/project-2.jpg"
  },
  @{
    Url = "https://miaoda.feishu.cn/aily/api/v1/files/static/de1de80b48624bf0814600d2dd58936c_ve_miaoda"
    OutFile = "client/public/images/projects/project-3.jpg"
  },
  @{
    Url = "https://miaoda.feishu.cn/aily/api/v1/files/static/18d31586b565432081fc2b5d8c300b35_ve_miaoda"
    OutFile = "client/public/images/projects/project-4.jpg"
  },
  @{
    Url = "https://miaoda.feishu.cn/aily/api/v1/files/static/a102584bd372437cb1975ab3a9e2d920_ve_miaoda"
    OutFile = "client/public/images/contact/contact-office.jpg"
  }
)

foreach ($asset in $assets) {
  $target = Join-Path $root $asset.OutFile
  $targetDir = Split-Path -Parent $target
  if (!(Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
  }

  Write-Host "Downloading: $($asset.Url)"
  Invoke-WebRequest -Uri $asset.Url -OutFile $target
  Write-Host "Saved: $target"
}

Write-Host "Done. Update image paths to *.jpg when you are ready."
