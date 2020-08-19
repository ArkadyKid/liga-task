import _ from 'lodash';
import state from './state';
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
      const products = state.getData();
      const sorts = {
        priceUp: () => products.sort((a, b) => Number(a.price) - Number(b.price)),
        priceDown: () => products.sort((a, b) => Number(b.price) - Number(a.price)),
        squareUp: () => products.sort((a, b) => Number(a.square) - Number(b.square)),
        squareDown: () => products.sort((a, b) => Number(b.square) - Number(a.square)),
      };
      const sort = _.camelCase(evt.target.dataset.sort);
      const sortedProducts = sorts[sort]();
      state.setData(sortedProducts);
      renderItems(sortedProducts);
    };
    button.addEventListener('click', onButtonClick);
  });
};
