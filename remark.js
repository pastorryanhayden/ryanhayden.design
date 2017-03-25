---
---
var Api = require('{{site.url}}/remark/api')
  , polyfills = require('{{site.url}}/polyfills')
  , styler = require('{{site.url}}/remark/components/styler/styler')
  ;

// Expose API as `remark`
window.remark = new Api();

// Apply polyfills as needed
polyfills.apply();

// Apply embedded styles to document
styler.styleDocument();