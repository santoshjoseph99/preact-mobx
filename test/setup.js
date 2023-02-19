'use strict';

var context = global;

var _ = require('lodash');
var chai = require('chai');
var sinon = require('sinon');
var assertJsx = require('preact-jsx-chai');
var expect = chai.expect;
chai.use(assertJsx.default);
chai.use(require('sinon-chai'));

const {JSDOM} = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body><div id="test"></div></body></html>');
const {window} = jsdom;
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
global.MouseEvent = global.window.MouseEvent;
copyProps(window, global);

var moduleOutput = {
  chai,
  expect,
  sinon,
  JSDOM
};

_.extend(context, moduleOutput);

module.exports = moduleOutput;