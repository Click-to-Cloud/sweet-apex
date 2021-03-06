var pageComponent =
webpackJsonppageComponent([39],{

/***/ 290:
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

var _array_creationSoy = __webpack_require__(291);

var _array_creationSoy2 = _interopRequireDefault(_array_creationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WoipC = function (_Component) {
  _inherits(WoipC, _Component);

  function WoipC() {
    _classCallCheck(this, WoipC);

    return _possibleConstructorReturn(this, (WoipC.__proto__ || Object.getPrototypeOf(WoipC)).apply(this, arguments));
  }

  return WoipC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(WoipC, _array_creationSoy2.default);

exports.default = WoipC;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.WoipC = undefined;

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

  // This file was automatically generated from array_creation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace WoipC.
   * @public
   */

  goog.module('WoipC.incrementaldom');

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
    var param536 = function param536() {
      ie_open('h6');
      var dyn38 = opt_data.page.description;
      if (typeof dyn38 == 'function') dyn38();else if (dyn38 != null) itext(dyn38);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature enables simple creation of arrays/lists and maps.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('None');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: 'public class ArrayCreation {\n    public static void run(Object o) {\n    }\n\n    public static void main() {\n        Map<String, Object> m = new Map<String, Object>{ \'a\': 2, };\n        List<Object> l = new List<Object>{ \'a\', };\n\n        Map<String, Object> m1 = { \'a\' => 2 };\n        List<Object> l1 = { \'a\' };\n\n        Object m2 = { \'a\' => 2 };\n        Object l2 = { \'a\' };\n\n        Map<String, Object> m3 = { \'a\' => { \'b\' => 2 } };\n        List<Object> l3 = { { \'a\' } };\n\n        run({ \'a\' => 2 });\n        run({ \'a\' });\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class ArrayCreation {\n    public static void run(Object o) {\n    }\n    public static void main() {\n        Map<String, Object> m = new Map<String, Object>{ \'a\' => 2 };\n        List<Object> l = new List<Object>{ \'a\' };\n\n        Map<String, Object> m1 = new Map<String, Object>{ \'a\' => 2 };\n        List<Object> l1 = new List<Object>{ \'a\' };\n\n        Object m2 = new Map<String, Object>{ \'a\' => 2 };\n        Object l2 = new List<Object>{ \'a\' };\n\n        Map<String, Object> m3 = new Map<String, Object>{ \'a\' => new Map<String, Object>{ \'b\' => 2 } };\n        List<Object> l3 = new List<Object>{ new List<Object>{ \'a\' } };\n        run(new Map<String, Object>{ \'a\' => 2 });\n        run(new List<Object>{ \'a\' });\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('When enabled, this feature helps you to complete the array creation.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param536 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'WoipC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var WoipC = function (_Component) {
  _inherits(WoipC, _Component);

  function WoipC() {
    _classCallCheck(this, WoipC);

    return _possibleConstructorReturn(this, (WoipC.__proto__ || Object.getPrototypeOf(WoipC)).apply(this, arguments));
  }

  return WoipC;
}(_metalComponent2.default);

_metalSoy2.default.register(WoipC, templates);
exports.WoipC = WoipC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[290]);