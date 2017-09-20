const { createElement } = require('preact-hyperscript');
const { render, Component } = require('preact');
const h = createElement;
const CountUi = require('../count');

class StoreStub {
  incCount() {
  }
  decCount() {
  }
}

describe('Count UI', function () {

  it('To contain the `+` symbol', function () {
    let storeStub = new StoreStub();
    let component = h(CountUi, {store: storeStub});
    expect(component).to.contain('+');
  });

  it('To contain the `-` symbol', function () {
    let storeStub = new StoreStub();
    let component = h(CountUi, { store: storeStub });
    expect(component).to.contain('-');
  });

  it('handles the `+` click event', function () {
    let storeStub = new StoreStub();
    storeStub.incCount = sinon.stub().returns();
    let component = h(CountUi, { store: storeStub });
    let container = document.getElementById('test');
    const context = render(component, container, container.lastElementChild);

    let event = new MouseEvent('click');
    document.getElementById('inc').dispatchEvent(event);
    expect(storeStub.incCount).to.be.called;
  });

  it('handles the `-` click event', function () {
    let storeStub = new StoreStub();
    storeStub.decCount = sinon.stub().returns();
    let component = h(CountUi, { store: storeStub });
    let container = document.getElementById('test');
    const context = render(component, container, container.lastElementChild);

    let event = new MouseEvent('click');
    document.getElementById('dec').dispatchEvent(event);
    expect(storeStub.decCount).to.be.called;
  });

});