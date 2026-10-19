const b=document.querySelector('.bg'),n=document.querySelector('nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('o');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',e=>{if(e.target.tagName==='A'){n.classList.remove('o');b.setAttribute('aria-expanded',false)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){n.classList.remove('o');b.setAttribute('aria-expanded',false)}});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.getElementById('y').textContent=new Date().getFullYear();
const tr=document.querySelector('.tr');if(tr)document.querySelectorAll('.tm .ar button').forEach((b,i)=>b.addEventListener('click',()=>tr.scrollBy({left:(i?1:-1)*(tr.firstElementChild.offsetWidth+22),behavior:'smooth'})));
const rs=[...document.querySelectorAll('.rot span')],rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(rs.length>1&&!rm){let k=0;setInterval(()=>{rs[k].classList.remove('on');k=(k+1)%rs.length;rs[k].classList.add('on')},3800)}
const pt=document.querySelector('.pet');if(pt&&!rm){for(let j=0;j<16;j++){const e=document.createElement('i');
e.style.cssText=`--l:${Math.random()*100}%;--s:${10+Math.random()*14}px;--d:${11+Math.random()*9}s;--w:-${Math.random()*14}s;--x:${(Math.random()-.5)*160}px`;pt.appendChild(e)}}
const tl=document.querySelector('[data-tilt]');if(tl&&!rm&&matchMedia('(hover:hover)').matches){const h=tl.closest('.hero');
h.addEventListener('pointermove',e=>{const r=tl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
tl.style.transform=`perspective(900px) rotateY(${x*16}deg) rotateX(${-y*12}deg)`});h.addEventListener('pointerleave',()=>tl.style.transform='')}
const fb=document.getElementById('fab');if(fb){const bt=fb.querySelector('button'),sf=o=>{fb.classList.toggle('o',o);bt.setAttribute('aria-expanded',o)};
bt.addEventListener('click',e=>{e.stopPropagation();sf(!fb.classList.contains('o'))});document.addEventListener('click',e=>{if(!fb.contains(e.target))sf(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')sf(false)})}
const f=document.getElementById('rdv');if(f){const d=f.querySelector('[name=date]');d.min=new Date().toISOString().split('T')[0];
f.addEventListener('submit',e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));
let m=`Bonjour Latifath,\n\nJe souhaite prendre rendez-vous :\n• Nom : ${v.nom}\n• Prestation : ${v.service}\n• Date : ${v.date||'à convenir'}\n• Heure : ${v.heure||'à convenir'}`;
if(v.note.trim())m+=`\n• Précisions : ${v.note}`;m+='\n\nMerci de me confirmer la disponibilité.';
const u='https://wa.me/2290196149051?text='+encodeURIComponent(m);if(!window.open(u,'_blank'))location.href=u})}