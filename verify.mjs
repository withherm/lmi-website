import { chromium } from 'playwright-core';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
const c=await b.newContext({viewport:{width:1440,height:1000}});
const SEL='.card,.panel,.ic-plate,.capsule,.rung-inner,.grad-tile,.logo-mark,.eq-mark,.enrol,.sector-panel,.sep-diagram';
const routes=['/','/certifications/','/methods/','/courses/','/courses/green-belt/','/in-house/','/about/','/resources/','/contact/'];
const bad={}; let total=0, ok=0;
for(const u of routes){
  const p=await c.newPage(); await p.goto('http://127.0.0.1:4477'+u,{waitUntil:'load'});
  const r=await p.evaluate((S)=>{
    const out={}; let n=0, good=0;
    document.querySelectorAll(S).forEach(e=>{
      n++; const cs=getComputedStyle(e);
      if(cs.backgroundClip==='padding-box') good++;
      else { const k=(e.className.toString().split(' ')[0])||e.tagName; out[k]=(out[k]||0)+1; }
    });
    const forms=[...document.querySelectorAll('input[type=text],input[type=email],select,textarea')]
      .map(e=>{const cs=getComputedStyle(e);return (e.id||e.name)+': '+cs.borderTopWidth+' '+cs.borderTopColor;});
    return {out,n,good,forms};
  }, SEL);
  total+=r.n; ok+=r.good;
  for(const [k,v] of Object.entries(r.out)) bad[k]=(bad[k]||0)+v;
  if(r.forms.length) console.log(u.padEnd(22), r.forms.join(' | '));
  await p.close();
}
console.log('\ndrawn containers seen:',total,' padding-box:',ok,' border-box:',total-ok);
console.log('border-box by class:', JSON.stringify(bad));
await b.close();
