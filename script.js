// Dark / Light theme toggle with persistence
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const pref = localStorage.getItem('theme') ||
             (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

function applyTheme(t){
  if(t === 'light'){ root.classList.add('light'); toggle.textContent = '🌞'; }
  else { root.classList.remove('light'); toggle.textContent = '🌙'; }
  localStorage.setItem('theme', t);
}
applyTheme(pref);

toggle.addEventListener('click', ()=>{
  const next = root.classList.contains('light') ? 'dark' : 'light';
  applyTheme(next);
});

// Smooth scrolling for in-page links (accessible)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    if(id){
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        history.replaceState(null, '', `#${id}`);
      }
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
