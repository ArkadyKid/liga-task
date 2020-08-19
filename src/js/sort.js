import renderItem from './render-item';
import data from '../data.json';

const sortButtons = document.querySelectorAll('.sort__select');
const { products } = data;
const sorts = {
  priceUp: () => products.sort((a, b) => Number(b.price) - Number(a.price)),
  priceDown: () => products.sort((a, b) => Number(a.price) - Number(b.price)),
  squareUp: () => products.sort((a, b) => Number(b.square) - Number(a.square)),
  squareDown: () => products.sort((a, b) => Number(a.square) - Number(b.square)),
};

export default () => {
  sortButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const sortedProducts = sorts[evt.target.dataset.sort]();
      renderItem(sortedProducts);
    });
  });
};
