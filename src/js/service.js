import _ from 'lodash';
import data from '../data.json';

class Service {
  constructor() {
    this.data = data.items;
    this.initialData = data.items;
    this.sortType = 'priceUp';
  }

  getData() {
    return this.data;
  }

  getInitialData() {
    return this.initialData;
  }

  getSortType() {
    return this.sortType;
  }

  setData(val) {
    this.data = val;
  }

  setSortType(val) {
    this.sortType = val;
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

  getSortedData(evt = null) {
    const items = this.getData();
    const sorts = {
      priceUp: () => items.sort((a, b) => Number(a.price) - Number(b.price)),
      priceDown: () => items.sort((a, b) => Number(b.price) - Number(a.price)),
      squareUp: () => items.sort((a, b) => Number(a.square) - Number(b.square)),
      squareDown: () => items.sort((a, b) => Number(b.square) - Number(a.square)),
    };
    if (evt) {
      const sort = _.camelCase(evt.target.dataset.sort);
      this.sortType = sort;
      return sorts[sort]();
    }
    return sorts[this.sortType]();
  }
}

export default new Service();
