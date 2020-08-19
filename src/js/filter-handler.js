import data from '../data.json';
import renderItem from './render-item';
import getFilteredProducts from './get-filtered-products';

const { products } = data;
const resetButton = document.querySelector('.form__reset');
const acceptButton = document.querySelector('.form__accept');

const onResetButtonClick = () => renderItem(products);
const onAcceptButtonClick = () => renderItem(getFilteredProducts());

export default () => {
  resetButton.addEventListener('click', onResetButtonClick);
  acceptButton.addEventListener('click', onAcceptButtonClick);
};
