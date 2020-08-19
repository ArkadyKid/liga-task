export default () => {
  const activeItem = document.querySelector('.sort__item--active');
  if (activeItem) {
    activeItem.classList.remove('sort__item--active');
  }
};
