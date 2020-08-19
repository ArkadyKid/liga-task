import _ from 'lodash';
import state from './state';
import renderItems from './render-items';

const sortButtons = document.querySelectorAll('.sort__select');

export default () => {
  sortButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const products = state.getData();
      const sorts = {
        priceUp: () => products.sort((a, b) => Number(b.price) - Number(a.price)),
        priceDown: () => products.sort((a, b) => Number(a.price) - Number(b.price)),
        squareUp: () => products.sort((a, b) => Number(b.square) - Number(a.square)),
        squareDown: () => products.sort((a, b) => Number(a.square) - Number(b.square)),
      };
      console.log(products);
      const sort = _.camelCase(evt.target.dataset.sort);
      const sortedProducts = sorts[sort]();
      renderItems(sortedProducts);
    });
  });
};
