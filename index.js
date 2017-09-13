
const { createElement, div, button, input } = require('preact-hyperscript');
const { render, Component } = require('preact');
const {extendObservable} = require('mobx');
const {observer} = require('mobx-observer');
const h = createElement;

class CountStore {
  constructor() {
    extendObservable(this, {
      count: 0
    })
  }
}

const CountUi = observer(class CountUi extends Component {
  handleInc() {
    this.props.store.count++;
  }
  handleDec() {
    this.props.store.count--;
  }
  render() {
    let store = this.props.store;
    return div([
      button({ onClick: () => this.handleInc() }, '+'),
      button({ onClick: () => this.handleDec() }, '-'),
      input({ type: 'text', readonly: true, value: store.count }),
    ]);
  }
});

const countStore = new CountStore();

render(
  h(CountUi, {store: countStore}),
  document.getElementById('app')
);