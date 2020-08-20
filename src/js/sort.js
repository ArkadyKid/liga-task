import _ from 'lodash';
import data from './data';
import renderItems from './render-items';
import removeActiveSortClass from './utils';

const sortButtons = document.querySelectorAll('.sort__select');

export default () => {
  sortButtons.forEach((button) => {
    const onButtonClick = (evt) => {
      removeActiveSortClass();
      button.parentElement.classList.add('sort__item--active');
      const items = data.getData();
      const sorts = {
        priceUp: () => items.sort((a, b) => Number(a.price) - Number(b.price)),
        priceDown: () => items.sort((a, b) => Number(b.price) - Number(a.price)),
        squareUp: () => items.sort((a, b) => Number(a.square) - Number(b.square)),
        squareDown: () => items.sort((a, b) => Number(b.square) - Number(a.square)),
      };
      const sort = _.camelCase(evt.target.dataset.sort);
      const sorteditems = sorts[sort]();
      data.setData(sorteditems);
      renderItems(sorteditems);
    };
    button.addEventListener('click', onButtonClick);
  });
};
