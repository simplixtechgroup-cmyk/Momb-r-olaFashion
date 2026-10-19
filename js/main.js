const b=document.querySelector('.bg'),n=document.querySelector('nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('o');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',e=>{if(e.target.tagName==='A'){n.classList.remove('o');b.setAttribute('aria-expanded',false)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){n.classList.remove('o');b.setAttribute('aria-expanded',false)}});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.getElementById('y').textContent=new Date().getFullYear();
const f=document.getElementById('rdv');if(f){const d=f.querySelector('[name=date]');d.min=new Date().toISOString().split('T')[0];
f.addEventListener('submit',e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));
let m=`Bonjour Latifath,\n\nJe souhaite prendre rendez-vous :\n• Nom : ${v.nom}\n• Prestation : ${v.service}\n• Date : ${v.date||'à convenir'}\n• Heure : ${v.heure||'à convenir'}`;
if(v.note.trim())m+=`\n• Précisions : ${v.note}`;m+='\n\nMerci de me confirmer la disponibilité.';
const u='https://wa.me/2290196149051?text='+encodeURIComponent(m);if(!window.open(u,'_blank'))location.href=u})}