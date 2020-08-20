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
    const getFilteredByType = (type, values, item) => {
      const inputs = document.forms[0].querySelectorAll(`input[name=${type}]`);
      inputs.forEach((input) => input.checked && values.push(input.value));
      return () => {
        if (values.length === 0) {
          return true;
        }
        if (type === 'feature') {
          return Object.values(item.features)
            .some((value) => values.includes(value.value));
        }
        return Object.values(item)
          .some((value) => values.includes(value));
      };
    };
    return this.initialData.filter((item) => {
      const checkedValuesSquare = [];
      const checkedValuesFeature = [];
      const filteredBySquare = getFilteredByType('square', checkedValuesSquare, item);
      const filteredByFeature = getFilteredByType('feature', checkedValuesFeature, item);
      const minPrice = document.forms[0].querySelector('[data-input="min-price"]').value;
      const maxPrice = document.forms[0].querySelector('[data-input="max-price"]').value;
      const checkPrice = (item.price >= minPrice) && (item.price <= maxPrice);
      return filteredBySquare() && filteredByFeature() && checkPrice;
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
