//Open Header Navigation on clicking Humburger Menu
document.querySelector('#menu-toggler').addEventListener('click', function () {
  document.querySelector('ul#navbar').classList.toggle('collapsed');
  this.classList.toggle('active')
  // if(document.querySelector('ul#navbar').classList.contains('collapsed')) {
  //   document.querySelector('ul#navbar').classList.remove('collapsed')
  //   document.querySelector('ul#navbar').classList.add('slideOut')
  // } 
  // else {
  //   document.querySelector('ul#navbar').classList.add('collapsed')
  //   document.querySelector('ul#navbar').classList.remove('slideOut')
  // }
})