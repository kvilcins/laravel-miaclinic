"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[2418],{2418:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var n=r(4967),o=r(9755),i=r(6885);function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _toPropertyKey(t){var e=function _toPrimitive(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function _callSuper(t,e,r){return e=_getPrototypeOf(e),function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(e,r||[],_getPrototypeOf(t).constructor):e.apply(t,r))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}var a=function(t){function TabsById(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,TabsById),_callSuper(this,TabsById,arguments)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(TabsById,t),function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(TabsById,[{key:"_init",value:function _init(){return this.selector='[data-js="tabs-by-id"] [data-js="tab-link"]',!0}},{key:"_bind",value:function _bind(){return this._liveBindTo(this.selector,"click",(function(t){var e=o(t.currentTarget),r=e.closest('[data-js="tabs-by-id"]'),n=e.closest("[data-tab-id]"),a=n.data("tabId"),s=r.find('[data-js="tab"]'),c=r.find('[data-js="tab-link"]');r.find('[data-js="tab-content"]').removeClass("active"),c.removeClass("active"),s.removeClass("active"),r.find("[data-tab-content-id=".concat(a,"]")).addClass("active"),n.addClass("active"),e.addClass("active"),r.css({"padding-bottom":e.next('[data-js="tab-content"]').height()+42}),o(i).width()<=1023&&r.css({"padding-bottom":e.next('[data-js="tab-content"]').height()+25})})),!0}}]),TabsById}(n.default)}}]);