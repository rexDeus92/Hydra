const burgerMenuBtn =  document.querySelector('.burger-menu');
  const header = document.querySelector('.header');
  const nav = document.querySelector('.header-nav');
  const burgerMenuIcon = document.querySelector('.burger-menu-icon');

burgerMenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');

  // Toggle the 'active' class on the header and nav elements
  nav.classList.toggle('active');

  // Toggle the 'active' class on the burger menu icon
  burgerMenuBtn.classList.toggle('active');
});