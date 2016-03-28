require('babel-register');

const fs = require('fs');
const jsdom = require('jsdom');
const chai = require('chai');
const chaiImmutable = require('chai-immutable');
const doc = jsdom.jsdom(`
  <!doctype html>
  <html>
    <head></head>
    <body></body>
  </html>
`);
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if(!(key in global)) {
    global[key] = window[key];
  }
});

// fix for unidentified token @import
require.extensions['.css'] = function() {}
require.extensions['.less'] = function() {}

chai.use(chaiImmutable);
