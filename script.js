// Minimal JS: mobile menu toggle and smooth scroll
document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.menu-toggle');
  var nav=document.querySelector('.nav');
  if(btn){btn.addEventListener('click',function(){
    if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex';nav.style.flexDirection='column';nav.style.gap='1rem'}
  })}

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){
    var target=document.querySelector(this.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});
      // close mobile menu
      if(window.innerWidth<600 && nav){nav.style.display='none'}
    }
  })});
});