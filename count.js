
const { createElement, div, button, input } = require('preact-hyperscript');
const { Component } = require('preact');
const {observer} = require('mobx-observer');

const CountUi = observer(class CountUi extends Component {
  handleInc() {
    this.props.store.incCount();
  }
  handleDec() {
    this.props.store.decCount();
  }
  render() {
    let store = this.props.store;
    return div([
      button('#inc', { onClick: () => this.handleInc() }, '+'),
      button('#dec', { onClick: () => this.handleDec() }, '-'),
      input({ type: 'text', readonly: true, value: store.count }),
    ]);
  }
});

module.exports = CountUi;