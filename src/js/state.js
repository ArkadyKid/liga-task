import data from '../data.json';

class State {
  constructor() {
    this.data = data.products;
  }

  getData() {
    return this.data;
  }

  setData(val) {
    this.data = val;
  }
}

export default new State();
