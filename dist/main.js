//Toggle class mobile & dextop from menu toggler button to controll which menu to view
window.onload = function () {
  if(this.innerWidth > 1024) {
    document.querySelector('#menu-toggler').classList.remove('mobile');
  } else {
    document.querySelector('#menu-toggler').classList.add('mobile')
    document.querySelector('#menu-toggler').classList.remove('desktop')
  }
}
//Toggle class mobile & dextop from menu toggler button to controll which menu to view
window.onresize = function () {
  if(this.innerWidth > 1024) {
    document.querySelector('#menu-toggler').classList.remove('mobile');
    document.querySelector('#menu').classList.add('collapsed')
  } else {
    document.querySelector('#menu-toggler').classList.add('mobile')
    document.querySelector('#menu-toggler').classList.remove('desktop')
  }
}
//Choosing betwwen showing the whole mobile menu or collapsing the Desktop Navigation links  
document.querySelector('#menu-toggler').addEventListener('click', function () {
  document.querySelector('#menu-toggler').classList.toggle('active');
  if(this.classList.contains('mobile')) {
    document.querySelector('#menu').classList.remove('collapsed');
    document.querySelector('body').classList.add('overflow-y-hidden')
  } else {
    document.querySelector('ul#navbar').classList.toggle('collapsed');
  }
});

// Close mobile menu on clciking close icon
document.querySelector('#menu-close').addEventListener('click', function () {
    document.querySelector('#menu').classList.add('collapsed');
    document.querySelector('#menu-toggler').classList.remove('active');
    document.querySelector('body').classList.remove('overflow-y-hidden')
});






