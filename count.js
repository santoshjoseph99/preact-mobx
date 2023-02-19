
const { createElement, div, button, input } = require('preact-hyperscript');
const { Component } = require('preact');
const {observer} = require('mobx-observer');
const {action} = require('mobx');

const CountUi = observer(class CountUi extends Component {
  //add @action attribute
  handleInc() {
    setTimeout(() => this.props.store.incCount(), 1000);
  }
  handleDec() {
    setTimeout(() => this.props.store.decCount(), 3000);
  }
  render() {
    let store = this.props.store;
    let msgClass = store.highCount ? '.show-msg' : '.hide-msg';
    let message = div(msgClass, 'Message is > 5!');
    return div([
      button('#inc', { onClick: () => this.handleInc() }, '+'),
      button('#dec', { onClick: () => this.handleDec() }, '-'),
      input({ type: 'text', readonly: true, value: store.count }),
      message
    ]);
  }
});

module.exports = CountUi;