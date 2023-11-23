

document.getElementById('close-icon').style.display='none';
if(window.innerWidth <= 635){
function showNavbar(){
   document.getElementById('navbar').style.width='100%';
   document.getElementById('navbar').style.visibility='visible';
   document.getElementsByClassName('left-nav-elements')[0].style.visibility='visible';
   document.getElementById('hamburger').style.display='none';
   document.getElementById('close-icon').style.display='block';
}

function hideNavbar(){
   document.getElementById('navbar').style.width='0em';
    document.getElementById('navbar').style.visibility='hidden';
    document.getElementById('close-icon').style.display='none';
    document.getElementById('hamburger').style.display='block';
    document.getElementsByClassName('left-nav-elements')[0].style.visibility='hidden';
 }
}

window.addEventListener('scroll', function(){
   var letsTalkButton = document.querySelector('.lets-talk-btn');
   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
   var triggerOffset = 100; // Adjust the trigger offset as needed
   
 
   if (scrollPosition > triggerOffset) {
     letsTalkButton.classList.add('active');
     letsTalkButton.innerHTML=" <span class=\"material-symbols-outlined\"> chat </span>";

   } else {
     letsTalkButton.classList.remove('active');
     letsTalkButton.innerHTML="LET'S TALK";
   }
 });

 var typed = new Typed('#changing-container', {
  strings: ['Code','Design', 'Develop', 'Solve'],
  typeSpeed: 50,
  loop: true,
});
