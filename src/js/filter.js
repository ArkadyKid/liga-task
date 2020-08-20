import service from './service';
import renderItems from './render-items';

const resetButton = document.querySelector('[data-button="reset"]');
const acceptButton = document.querySelector('[data-button="accept"]');

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
