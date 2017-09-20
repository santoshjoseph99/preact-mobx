const {extendObservable} = require('mobx');

class CountStore {
  constructor() {
    extendObservable(this, {
      count: 0
    })
  }
  incCount() {
    this.count++;
  }
  decCount() {
    this.count--;
  }
}

module.exports = CountStore;