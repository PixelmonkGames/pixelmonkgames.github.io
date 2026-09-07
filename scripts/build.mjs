import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'dist');
await fs.mkdir(output, { recursive: true });
const homepage = (await fs.readFile(path.join(root, 'index.md'), 'utf8')).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
if (!homepage.toLowerCase().startsWith('<!doctype html>')) throw new Error('Homepage must contain a complete HTML document');
await fs.writeFile(path.join(output, 'index.html'), homepage);
for (const item of ['kitty-match', 'assets', 'privacy-policy.html', 'app-ads.txt', 'google62ec7e491d21f2e9.html', 'robots.txt', 'sitemap.xml']) {
  await fs.cp(path.join(root, item), path.join(output, item), { recursive: true });
}
console.log('Static website built. Existing verification and privacy files preserved.');
