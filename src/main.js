// TODO: add js;
function burgerMenu(selector) {
  const menu = $(selector);
  const button = menu.find('.burger-menu_button', '.burger-menu_lines');
  const links = menu.find('.burger-menu_link');
  const overlay = menu.find('.burger-menu_overlay');

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
}

burgerMenu('.burger-menu');
