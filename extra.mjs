import { chromium } from 'playwright-core';
import fs from 'fs';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});

// 1. 3x visual: credential card (washed band + drawn edge + white fill)
const c3=await b.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:3});
const p=await c3.newPage();
await p.goto('http://127.0.0.1:4477/certifications/',{waitUntil:'networkidle'});
await p.evaluate(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')));
await p.waitForTimeout(400);
const card=await p.$('#verify .card'); await card.scrollIntoViewIfNeeded();
let bx=await card.boundingBox();
await p.screenshot({path:'/tmp/k/rim.png',clip:{x:bx.x-14,y:bx.y-14,width:200,height:120}});
// capsule head at 3x for wash spill
await p.goto('http://127.0.0.1:4477/certifications/',{waitUntil:'networkidle'});
await p.evaluate(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')));
await p.waitForTimeout(300);
const cap=await p.$('.capsule'); await cap.scrollIntoViewIfNeeded();
bx=await cap.boundingBox();
await p.screenshot({path:'/tmp/k/wash.png',clip:{x:bx.x-14,y:bx.y-14,width:230,height:110}});
await p.close();

// 2. WCAG 1.4.4 resize text to 200% (text-only zoom), check overflow
const routes=fs.readFileSync('/tmp/routes.txt','utf8').trim().split('\n');
const c2=await b.newContext({viewport:{width:1280,height:900}});
let txt=[];
for(const u of routes){
  const p2=await c2.newPage(); await p2.goto('http://127.0.0.1:4477'+u,{waitUntil:'load'});
  await p2.addStyleTag({content:'html{font-size:200% !important}'});
  await p2.waitForTimeout(60);
  const r=await p2.evaluate(()=>({s:document.documentElement.scrollWidth,c:document.documentElement.clientWidth}));
  if(r.s>r.c+1) txt.push(`${u} ${r.s}>${r.c}`);
  await p2.close();
}
console.log('1.4.4 text at 200% on 1280, horizontal overflow:', txt.length?txt.join(', '):'none across '+routes.length+' routes');

// 3. scroll cost, 10 samples each
const cp=await b.newContext({viewport:{width:1440,height:1000}});
async function run(off){const t=[];for(let k=0;k<10;k++){const q=await cp.newPage();
  await q.goto('http://127.0.0.1:4477/',{waitUntil:'load'});
  if(off) await q.addStyleTag({content:'*,*::after,*::before{filter:none !important;border-image:none !important}'});
  await q.evaluate(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')));
  await q.waitForTimeout(250);
  t.push(await q.evaluate(async()=>{const s=performance.now();for(let i=0;i<20;i++){window.scrollBy(0,400);await new Promise(r=>requestAnimationFrame(r));}return performance.now()-s;}));
  await q.close();} return t;}
const med=a=>{const s=[...a].sort((x,y)=>x-y);return s[Math.floor(s.length/2)].toFixed(0);};
const on=await run(false), off=await run(true);
console.log(`scroll 20 frames, 10 samples each: drawn median ${med(on)}ms  plain median ${med(off)}ms`);
console.log(`  drawn range ${Math.min(...on).toFixed(0)}-${Math.max(...on).toFixed(0)}  plain range ${Math.min(...off).toFixed(0)}-${Math.max(...off).toFixed(0)}`);
await b.close();
