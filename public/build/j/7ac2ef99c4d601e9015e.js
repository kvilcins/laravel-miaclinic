"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[2294],{2294:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(4967),o=r(9755),n=r(6885);function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function _callSuper(e,t,r){return t=_getPrototypeOf(t),function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,_isNativeReflectConstruct()?Reflect.construct(t,r||[],_getPrototypeOf(e).constructor):t.apply(e,r))}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!e})()}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}var s=function(e){function HeaderAddress(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,HeaderAddress),_callSuper(this,HeaderAddress,arguments)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}(HeaderAddress,e),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(HeaderAddress,[{key:"_init",value:function _init(){return this.$wrapper=o("[data-js-header-address-wrapper]"),!!this.$wrapper.length}},{key:"_bind",value:function _bind(){var e=this;return this._bindTo(o(n),"load resize",(function(e){var t=o("[data-js-header-address_default]").attr("data-js-header-address_default");o("[data-js-header-city]").removeClass("active"),o('[data-js-header-city="'.concat(t,'"]')).addClass("active")})),this._bindTo(o(n),"click",(function(t){if(o(t.target).closest("[data-js-header-address-wrapper]").length||e.$wrapper.find("[data-header-content]").removeClass("opened"),o(t.target).closest("[data-js-header-address-wrapper]").length&&e.$wrapper.find("[data-header-content]").toggleClass("opened"),o(t.target).closest("[data-js-header-address-item]").length){var r=o(t.target).closest("[data-js-header-address-item]").attr("data-js-header-address"),a=o("[data-js-header-modal-link]"),n=a.attr("href");o("[data-js-header-address_default]").html(o(t.target).closest("[data-js-header-address-item]").html()),o("[data-js-header-city]").removeClass("active"),o('[data-js-header-city="'.concat(r,'"]')).addClass("active"),n=n.replace(/([?&]data)=([^&]*)/g,"?data=".concat("msk"===r?"a65f8b69-6573-4721-a2e2-8f5adffd9bec":"83acd429-1aab-4dc0-b83e-4a6b268002ec")),a.attr("href",n)}})),!0}}]),HeaderAddress}(a.default)}}]);