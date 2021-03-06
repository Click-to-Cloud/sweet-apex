var pageComponent =
webpackJsonppageComponent([45],{

/***/ 280:
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

var _indexSoy = __webpack_require__(281);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lHpIf = function (_Component) {
  _inherits(lHpIf, _Component);

  function lHpIf() {
    _classCallCheck(this, lHpIf);

    return _possibleConstructorReturn(this, (lHpIf.__proto__ || Object.getPrototypeOf(lHpIf)).apply(this, arguments));
  }

  return lHpIf;
}(_metalComponent2.default);

;

_metalSoy2.default.register(lHpIf, _indexSoy2.default);

exports.default = lHpIf;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.lHpIf = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace lHpIf.
   * @public
   */

  goog.module('lHpIf.incrementaldom');

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
    var param421 = function param421() {
      ie_open('h6');
      var dyn33 = opt_data.page.description;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Sweet.apex Plugin System');
      ie_close('h2');
      ie_open('p');
      itext('All Sweet.apex features are implemented as plugins in the ');
      ie_open('code');
      itext('src/features');
      ie_close('code');
      itext(' directory.');
      ie_close('p');
      ie_open('p');
      itext('To implement your own feature, you need:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Create a new directory under ');
      ie_open('code');
      itext('src/features');
      ie_close('code');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Implement your feature in ');
      ie_open('code');
      itext('src/features/FeatureName/index.js');
      ie_close('code');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Register your feature in the feature list in ');
      ie_open('code');
      itext('config.json');
      ie_close('code');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Test your feature');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Write test cases');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Write documentations');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param421 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'lHpIf.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var lHpIf = function (_Component) {
  _inherits(lHpIf, _Component);

  function lHpIf() {
    _classCallCheck(this, lHpIf);

    return _possibleConstructorReturn(this, (lHpIf.__proto__ || Object.getPrototypeOf(lHpIf)).apply(this, arguments));
  }

  return lHpIf;
}(_metalComponent2.default);

_metalSoy2.default.register(lHpIf, templates);
exports.lHpIf = lHpIf;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[280]);