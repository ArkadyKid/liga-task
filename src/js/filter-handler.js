import state from './state';
import data from '../data.json';
import renderItems from './render-items';
import getFilteredProducts from './get-filtered-products';
import removeActiveSortClass from './utils';

const products = state.getData();
const resetButton = document.querySelector('.form__reset');
const acceptButton = document.querySelector('.form__accept');

const onResetButtonClick = () => {
  state.setData(data.products);
  removeActiveSortClass();
  renderItems(products);
};

const onAcceptButtonClick = () => {
  state.setData(getFilteredProducts());
  removeActiveSortClass();
  renderItems(getFilteredProducts());
};

export default () => {
  resetButton.addEventListener('click', onResetButtonClick);
  acceptButton.addEventListener('click', onAcceptButtonClick);
};
