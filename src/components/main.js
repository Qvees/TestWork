const containerCards = document.querySelector('.cards__container');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const container = document.querySelector('#container');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('touchstart', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('touchend', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
});

leftButton.addEventListener('click', () => {
  containerCards.scrollBy({
    left: -300, 
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  containerCards.scrollBy({
    left: 300, 
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.header__menu-icon');
  const sideMenu = document.querySelector('.header__side-menu__content');

  menuIcon.addEventListener('click', function () {
    if (sideMenu.style.display === 'block') {
      sideMenu.style.display = 'none';
    } else {
      sideMenu.style.display = 'block';
    }
  });
});
