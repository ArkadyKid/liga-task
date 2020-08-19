import data from '../data.json';

const { products } = data;
const checkboxInputs = document.forms[0].querySelectorAll('input[type="checkbox"]');

export default () => {
  const checkedValue = [];
  const minPrice = document.forms[0].querySelector('#min-price').value;
  const maxPrice = document.forms[0].querySelector('#max-price').value;
  checkboxInputs.forEach((input) => input.checked && checkedValue.push(input.value));
  return products.filter((product) => {
    const values = Object.values(product);
    const checkValue = values
      .some((value) => checkedValue
        .includes(value));
    const featuresObject = values.filter((value) => typeof value === 'object');
    const checkFeature = featuresObject
      .some((features) => features
        .some((feature) => checkedValue
          .includes(feature.value)));
    const checkPrice = (product.price >= minPrice)
                    && (product.price <= maxPrice);
    return checkValue && checkFeature && checkPrice;
  });
};
