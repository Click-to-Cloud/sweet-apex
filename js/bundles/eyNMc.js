var pageComponent =
webpackJsonppageComponent([2],{

/***/ 340:
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

var _step_4Soy = __webpack_require__(341);

var _step_4Soy2 = _interopRequireDefault(_step_4Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var eyNMc = function (_Component) {
  _inherits(eyNMc, _Component);

  function eyNMc() {
    _classCallCheck(this, eyNMc);

    return _possibleConstructorReturn(this, (eyNMc.__proto__ || Object.getPrototypeOf(eyNMc)).apply(this, arguments));
  }

  return eyNMc;
}(_metalComponent2.default);

;

_metalSoy2.default.register(eyNMc, _step_4Soy2.default);

exports.default = eyNMc;

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.eyNMc = undefined;

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

  // This file was automatically generated from step_4.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace eyNMc.
   * @public
   */

  goog.module('eyNMc.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param1035 = function param1035() {
      ie_open('h2');
      var dyn62 = opt_data.page.title;
      if (typeof dyn62 == 'function') dyn62();else if (dyn62 != null) itext(dyn62);
      ie_close('h2');
      ie_open('p');
      itext('Go to ');
      ie_open('code');
      itext('/Users/wilson/sweet_apex/build');
      ie_close('code');
      itext(' and check what has been generated. You can find a file called ');
      ie_open('code');
      itext('HelloSweetApex.cls');
      ie_close('code');
      itext(', and it looks like this:');
      ie_close('p');
      $templateAlias2({ code: 'public class HelloSweetApex {\n    public static void main() {\n        Integer a = 5;\n        Integer b = 7;\n        System.debug(Math.mod(a, b));\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Note that ');
      ie_open('code');
      itext('a % b');
      ie_close('code');
      itext(' has been translated to ');
      ie_open('code');
      itext('Math.mod(a, b)');
      ie_close('code');
      itext('. This is a typical example of how Sweet Apex codes are transpiled to Apex codes.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1035 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'eyNMc.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var eyNMc = function (_Component) {
  _inherits(eyNMc, _Component);

  function eyNMc() {
    _classCallCheck(this, eyNMc);

    return _possibleConstructorReturn(this, (eyNMc.__proto__ || Object.getPrototypeOf(eyNMc)).apply(this, arguments));
  }

  return eyNMc;
}(_metalComponent2.default);

_metalSoy2.default.register(eyNMc, templates);
exports.eyNMc = eyNMc;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[340]);