import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'../dist');
let links=0;
for(const page of ['index.html','kitty-match/index.html']){
  const html=await fs.readFile(path.join(root,page),'utf8');
  assert.match(html,/<html lang="en">/);
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${page}: one H1 required`);
  assert.match(html,/<meta name="description" content="[^"]+">/);
  assert.match(html,/<link rel="canonical" href="https:\/\/pixelmonkgames.github.io\//);
  assert(!/noindex/.test(html),`${page}: unintended noindex`);
  for(const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(block[1]);
  for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    if(url.startsWith('#'))assert(html.includes(`id="${url.slice(1)}"`),`${page}: missing anchor ${url}`);
    if(!url.startsWith('/'))continue;
    const [pathname,anchor]=url.split('#');
    const dest=path.join(root,pathname,pathname.endsWith('/')?'index.html':'');
    await fs.access(dest);links++;
    if(anchor)assert((await fs.readFile(dest,'utf8')).includes(`id="${anchor}"`),`Missing anchor ${url}`);
  }
}
for(const file of ['privacy-policy.html','app-ads.txt','google62ec7e491d21f2e9.html']){
  assert.deepEqual(await fs.readFile(path.join(root,file)),await fs.readFile(path.resolve(root,'..',file)),`${file}: changed during build`);
}
const sitemap=await fs.readFile(path.join(root,'sitemap.xml'),'utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,3);
console.log(`Passed: both pages, ${links} local links/assets, anchors, metadata, structured data, sitemap and preserved legal/verification files.`);
