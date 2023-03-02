'use strict';

const menuIcon = document.querySelector('.icon.one');
const dropdownMenu = document.querySelector('.headerlist');

console.log(menuIcon);

menuIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');

});

