"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[2082],{2082:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var o=r(4967),n=(r(7729),r(9755)),i=r(6885),s=r(4771);function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var e=function _toPrimitive(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function _callSuper(t,e,r){return e=_getPrototypeOf(e),function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(e,r||[],_getPrototypeOf(t).constructor):e.apply(t,r))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}var p=function(t){function Ribbon(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Ribbon),_callSuper(this,Ribbon,arguments)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(Ribbon,t),function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(Ribbon,[{key:"_init",value:function _init(){return this.$wrappers=n("[data-js-ribbon]"),this.finalHeight=0,!!this.$wrappers.length}},{key:"_bind",value:function _bind(){var t=this,e=this.$wrappers.offset();this._bindTo(n(i),"load scroll resize",(function(r){var o=n(s).scrollTop(),i=t.$wrappers.height(),p=parseInt(t.$wrappers.css("padding-top")),a=parseInt(t.$wrappers.css("padding-bottom"));t.$wrappers.hasClass("fixed")||(t.finalHeight=i+p+a),o>e.top+t.finalHeight?(t.$wrappers.addClass("fixed"),t.$wrappers.css("top",n(".header").height()),n("body").css("padding-top","".concat(t.finalHeight,"px"))):(t.$wrappers.removeClass("fixed"),t.$wrappers.css("top",0),n("body").css("padding-top",0))}))}}]),Ribbon}(o.default)}}]);