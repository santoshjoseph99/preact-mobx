const {extendObservable, computed} = require('mobx');

class CountStore {
  constructor() {
    extendObservable(this, {
      count: 0,
      highCount: computed(() => {
        return this.count > 5;
      })
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