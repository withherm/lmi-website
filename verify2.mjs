import { chromium } from 'playwright-core';
import fs from 'fs';
const routes=fs.readFileSync('/tmp/routes.txt','utf8').trim().split('\n');
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
const SEL='.card,.ic-plate,.capsule,.rung-inner,.grad-tile,.logo-mark,.eq-mark,.enrol,.sector-panel,.sep-diagram';
let seen=0, pb=0, bb={}, forms=0, badForms=[], overflow=[];
for(const w of [320,390,768,1024,1440]){
  const c=await b.newContext({viewport:{width:w,height:900}});
  for(const u of routes){
    const p=await c.newPage(); await p.goto('http://127.0.0.1:4477'+u,{waitUntil:'load'});
    const r=await p.evaluate((S)=>{
      let n=0,good=0; const bad={};
      document.querySelectorAll(S).forEach(e=>{ n++;
        const cs=getComputedStyle(e);
        if(cs.backgroundClip==='padding-box') good++;
        else {const k=e.className.toString().split(' ')[0]||e.tagName; bad[k]=(bad[k]||0)+1;}
      });
      const f=[...document.querySelectorAll('input[type=text],input[type=email],select,textarea')]
        .map(e=>({id:e.id||e.name,w:getComputedStyle(e).borderTopWidth,c:getComputedStyle(e).borderTopColor}));
      return {n,good,bad,f,sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth};
    }, SEL);
    seen+=r.n; pb+=r.good;
    for(const [k,v] of Object.entries(r.bad)) bb[k]=(bb[k]||0)+v;
    for(const f of r.f){ forms++; if(f.w!=='2px'||f.c!=='rgb(91, 135, 192)') badForms.push(`${u}@${w} ${f.id} ${f.w} ${f.c}`); }
    if(r.sw>r.cw+1) overflow.push(`${u}@${w} ${r.sw}>${r.cw}`);
    await p.close();
  }
  await c.close();
}
console.log(`routes ${routes.length} x 5 widths`);
console.log(`drawn containers: ${seen} seen, ${pb} padding-box, ${seen-pb} border-box`, Object.keys(bb).length?JSON.stringify(bb):'');
console.log(`form controls: ${forms} observations, ${badForms.length} off-spec`, badForms.slice(0,5).join(' ; '));
console.log(`horizontal overflow: ${overflow.length?overflow.join(', '):'none'}`);
await b.close();
