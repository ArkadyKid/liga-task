import service from './service';
import renderItems from './render-items';

const resetButton = document.querySelector('.form__reset');
const acceptButton = document.querySelector('.form__accept');

const onResetButtonClick = () => {
  service.setData(service.getInitialData());
  renderItems(service.getSortedData());
};

const onAcceptButtonClick = () => {
  service.setData(service.getFilteredData());
  renderItems(service.getSortedData());
};

export default () => {
  resetButton.addEventListener('click', onResetButtonClick);
  acceptButton.addEventListener('click', onAcceptButtonClick);
};
