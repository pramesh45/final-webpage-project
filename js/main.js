const nav_button = document.getElementById('menu_button');
const sec_nav = document.getElementById('secondary_nav');
const close = document.getElementById('close_button');
const div_menu = document.getElementById('academic_nav');
const div = document.querySelector('.academic_menu');
const change = document.querySelector('.fa-plus');
nav_button.addEventListener('click', function(){
  console.log('working');
  sec_nav.classList.remove('secondary_navs');
});

close.addEventListener('click', function(){
  sec_nav.classList.add('secondary_navs');
});

div_menu.addEventListener('click', function(){
  div.classList.toggle('hidden');
  change.classList.toggle('fa-plus');

})
