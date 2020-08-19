const resetButton = document.querySelector('.form__reset');

const onFormChange = () => {
  resetButton.classList.remove('form__reset--hide');
};
const onResetButtonClick = () => {
  if (!resetButton.classList.contains('form__reset--hide')) {
    resetButton.classList.add('form__reset--hide');
  }
};

export default () => {
  document.forms[0].addEventListener('change', onFormChange);
  resetButton.addEventListener('click', onResetButtonClick);
};
