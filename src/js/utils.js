export const setDefaultSort = () => {
  const priceUpButton = document.querySelector('button[data-sort="price-up"]');
  priceUpButton.parentElement.classList.add('sort__item--active');
};

export const showResetButton = () => {
  const resetButton = document.querySelector('.form__reset');

  const onFormChange = () => {
    resetButton.classList.remove('form__reset--hide');
  };
  const onResetButtonClick = () => {
    if (!resetButton.classList.contains('form__reset--hide')) {
      resetButton.classList.add('form__reset--hide');
    }
  };
  document.forms[0].addEventListener('change', onFormChange);
  resetButton.addEventListener('click', onResetButtonClick);
};
