
const { createElement } = require('preact-hyperscript');
const { render, Component } = require('preact');
const h = createElement;
const CountStore = require('./store');
const CountUi = require('./count');

const countStore = new CountStore();

render(
  h(CountUi, {store: countStore}),
  document.getElementById('app')
);