var pageComponent =
webpackJsonppageComponent([14],{

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(1);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _templateSoy = __webpack_require__(343);

var _templateSoy2 = _interopRequireDefault(_templateSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VOMiN = function (_Component) {
  _inherits(VOMiN, _Component);

  function VOMiN() {
    _classCallCheck(this, VOMiN);

    return _possibleConstructorReturn(this, (VOMiN.__proto__ || Object.getPrototypeOf(VOMiN)).apply(this, arguments));
  }

  return VOMiN;
}(_metalComponent2.default);

;

_metalSoy2.default.register(VOMiN, _templateSoy2.default);

exports.default = VOMiN;

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.VOMiN = undefined;

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(1);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from template.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace VOMiN.
   * @public
   */

  goog.module('VOMiN.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param1097 = function param1097() {
      ie_open('h6');
      var dyn64 = opt_data.page.description;
      if (typeof dyn64 == 'function') dyn64();else if (dyn64 != null) itext(dyn64);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature converts templates in the source files.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('You need to create template files in the template directory set in the config file.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: '@log\npublic class TemplateDemo {\n    public static void main() {\n        #debug(\'Hello World\')\n\n        #debug(\'a\\,b\', \'c\\,d\')\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class TemplateDemo {\n    public static final Log logger = Log.getLogger(TemplateDemo.class);\n\n    public static void main() {\n\n        if(logger.isDebugEnabled()) {\n            logger.debug(\'Hello World\');\n        }\n        if(logger.isDebugEnabled()) {\n            logger.debug(\'a,b\', \'c,d\');\n        }\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('Here is an example of how to create a new template definition.');
      ie_close('p');
      $templateAlias2({ code: '// In debug.js\nconst _ = require(\'lodash\');\n\nconst debug = (...values) => `\nif(logger.isDebugEnabled()) {\n    logger.debug(${_.join(values, \', \')});\n}\n`;\n\nmodule.exports = debug;', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Place this js file in the template directory set in the config file and Sweet.apex will load it.');
      ie_close('p');
      ie_open('p');
      itext('Here is how you would invoke this template.');
      ie_close('p');
      $templateAlias2({ code: '#debug(\'Hello World\')', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('#');
      ie_close('code');
      itext(' starts the template, and anything between the following parenthesis, separated by comma,  will be passed in as the arguments.');
      ie_close('p');
      ie_open('p');
      itext('For example,');
      ie_close('p');
      $templateAlias2({ code: '#test(abc, def)', mode: 'text' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1097 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'VOMiN.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var VOMiN = function (_Component) {
  _inherits(VOMiN, _Component);

  function VOMiN() {
    _classCallCheck(this, VOMiN);

    return _possibleConstructorReturn(this, (VOMiN.__proto__ || Object.getPrototypeOf(VOMiN)).apply(this, arguments));
  }

  return VOMiN;
}(_metalComponent2.default);

_metalSoy2.default.register(VOMiN, templates);
exports.VOMiN = VOMiN;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[342]);