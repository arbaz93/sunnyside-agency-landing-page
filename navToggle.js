const navToggleBtn = document.querySelector('.navigation-toggle-button');
const navigation = document.querySelector('.primary-navigation');

navToggleBtn.addEventListener('click', navToggle);

function navToggle() {
  if(navigation.ariaExpanded === 'false') {
    navigation.classList.add('open');
    navigation.ariaExpanded = 'true';
  } else {
    navigation.classList.remove('open');
    navigation.ariaExpanded = 'false';
  }
}