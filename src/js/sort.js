import service from './service';
import renderItems from './render-items';

const sortButtons = document.querySelectorAll('.sort__select');

export default () => {
  sortButtons.forEach((button) => {
    const onButtonClick = (evt) => {
      const activeItem = document.querySelector('.sort__item--active');
      if (activeItem) {
        activeItem.classList.remove('sort__item--active');
      }
      button.parentElement.classList.add('sort__item--active');
      const sortedItems = service.getSortedData(evt);
      service.setData(sortedItems);
      renderItems(sortedItems);
    };
    button.addEventListener('click', onButtonClick);
  });
};
