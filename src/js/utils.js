export const setDefaultSort = () => {
  const priceUpButtonElement = document.querySelector('button[data-sort="price-up"]');
  priceUpButtonElement.parentElement.classList.add('sort__item--active');
};

export const showResetButton = () => {
  const resetButtonElement = document.querySelector('.form__reset');

  const onFormChange = () => {
    resetButtonElement.classList.remove('form__reset--hide');
  };
  const onResetButtonClick = () => {
    if (!resetButtonElement.classList.contains('form__reset--hide')) {
      resetButtonElement.classList.add('form__reset--hide');
    }
  };
  document.forms[0].addEventListener('change', onFormChange);
  resetButtonElement.addEventListener('click', onResetButtonClick);
};
