const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav');
if(toggle){toggle.addEventListener('click',()=>{nav.classList.toggle('open'); toggle.textContent=nav.classList.contains('open')?'×':'☰';});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');if(toggle)toggle.textContent='☰';}));
function fakeSubmit(e){e.preventDefault();const m=document.getElementById('formMessage');m.textContent='Perfetto! Questa è una demo del modulo. Per renderlo operativo basterà collegarlo alla tua email o a un servizio form.';m.classList.add('show');return false;}
