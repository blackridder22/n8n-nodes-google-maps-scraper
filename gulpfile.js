const { src, dest, series } = require('gulp');
const fs = require('fs');
const path = require('path');

function buildIcons(cb) {
  // For this minimal scaffold, copy svg files to dist/icons
  const iconsDir = path.join(__dirname, 'nodes');
  const outDir = path.join(__dirname, 'dist', 'nodes');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  // Copy any svg files under nodes to dist
  function copyRecursive(srcDir, destDir) {
    const entries = fs.readdirSync(srcDir, { withFileTypes: true });
    for (const e of entries) {
      const srcPath = path.join(srcDir, e.name);
      const destPath = path.join(destDir, e.name);
      if (e.isDirectory()) {
        if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);
        copyRecursive(srcPath, destPath);
      } else if (e.isFile() && srcPath.endsWith('.svg')) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  copyRecursive(iconsDir, outDir);
  cb();
}

exports['build:icons'] = buildIcons;
exports.default = series(buildIcons);
