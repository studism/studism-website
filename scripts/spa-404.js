import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html が見つかりません。先に pnpm build を実行してください。');
  process.exit(1);
}

fs.copyFileSync(indexPath, fallbackPath);
console.log('SPA fallback: dist/index.html を dist/404.html にコピーしました。');

