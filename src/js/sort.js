import _ from 'lodash';
import state from './state';
import renderItems from './render-items';
import removeActiveSortClass from './utils';

const sortButtons = document.querySelectorAll('.sort__select');

export default () => {
  sortButtons.forEach((button) => {
    const onButtonClick = (evt) => {
      removeActiveSortClass();
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
