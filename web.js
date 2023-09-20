ScrollReveal({ 
     reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
 });

 ScrollReveal({ 
   reset: true,
 distance: '80px',
 duration: 2000,
 delay:200
});

ScrollReveal().reveal(' .logo, .form', { origin: 'top' });
ScrollReveal().reveal('.navbar, .menu,' ,{ origin: 'bottom' });
ScrollReveal().reveal(' .icon, .search , .cn', { origin: 'left' });

ScrollReveal().reveal(' .home-comten p, .about-content', { origin: 'right' });
/* typed js */
const typed =new Typed('.multilpe-text',{
 strings: [' DEVELOPER','DEVELOPER', 'DEVELOPER'],
 typeSpeed: 100,
 backSpeed: 100,
 backDelay: 1000,
 loop: true
});
