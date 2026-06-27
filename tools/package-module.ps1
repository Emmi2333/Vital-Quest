param(
  [string]$ModuleId = "vital-quest"
)

$ErrorActionPreference = "Stop"

$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
$Dist = Join-Path $Root "dist"
$Stage = Join-Path $Dist $ModuleId
$Zip = Join-Path $Root "$ModuleId.zip"

if (Test-Path -LiteralPath $Dist) {
  Remove-Item -LiteralPath $Dist -Recurse -Force
}

if (Test-Path -LiteralPath $Zip) {
  Remove-Item -LiteralPath $Zip -Force
}

New-Item -ItemType Directory -Force -Path $Stage | Out-Null

$Include = @(
  "module.json",
  "README.md",
  "CHANGELOG.md",
  "lang",
  "scripts",
  "styles",
  "templates",
  "assets"
)

foreach ($Item in $Include) {
  $Source = Join-Path $Root $Item
  if (Test-Path -LiteralPath $Source) {
    Copy-Item -LiteralPath $Source -Destination $Stage -Recurse
  }
}

Compress-Archive -LiteralPath $Stage -DestinationPath $Zip
Write-Host "Built $Zip"
