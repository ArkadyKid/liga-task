import data from './data';
import renderItems from './render-items';
import removeActiveSortClass from './utils';

const resetButton = document.querySelector('.form__reset');
const acceptButton = document.querySelector('.form__accept');

const onResetButtonClick = () => {
  data.setData(data.getInitialData());
  removeActiveSortClass();
  renderItems(data.getInitialData());
};

const onAcceptButtonClick = () => {
  data.setData(data.getFilteredData());
  removeActiveSortClass();
  renderItems(data.getFilteredData());
};

export default () => {
  resetButton.addEventListener('click', onResetButtonClick);
  acceptButton.addEventListener('click', onAcceptButtonClick);
};
