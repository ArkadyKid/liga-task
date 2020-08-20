import data from '../data.json';

class Data {
  constructor() {
    this.data = data.items;
    this.initialData = data.items;
  }

  getData() {
    return this.data;
  }

  getInitialData() {
    return this.initialData;
  }

  setData(val) {
    this.data = val;
  }

  getFilteredData() {
    const checkboxInputs = document.forms[0].querySelectorAll('input[type="checkbox"]');
    const checkedValue = [];
    const minPrice = document.forms[0].querySelector('#min-price').value;
    const maxPrice = document.forms[0].querySelector('#max-price').value;
    checkboxInputs.forEach((input) => input.checked && checkedValue.push(input.value));
    return this.initialData.filter((item) => {
      const values = Object.values(item);
      const checkValue = values
        .some((value) => checkedValue
          .includes(value));
      const featuresObject = values.filter((value) => typeof value === 'object');
      const checkFeature = featuresObject
        .some((features) => features
          .some((feature) => checkedValue
            .includes(feature.value)));
      const checkPrice = (item.price >= minPrice)
        && (item.price <= maxPrice);
      return checkValue && checkFeature && checkPrice;
    });
  }
}

export default new Data();
