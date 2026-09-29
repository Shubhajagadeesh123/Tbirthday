const envelope=document.getElementById('openLetter');
envelope.addEventListener('click',()=>envelope.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>window.scrollTo({top:document.querySelector(a.getAttribute('href')).offsetTop,behavior:'smooth'})));
