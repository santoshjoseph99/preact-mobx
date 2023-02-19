
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

setInterval(decEvent, 500);
setInterval(incEvent, 100);

function decEvent() {
  let event = new MouseEvent('click');
  document.getElementById('dec').dispatchEvent(event);
}

function incEvent() {
  let event = new MouseEvent('click');
  document.getElementById('inc').dispatchEvent(event);
}