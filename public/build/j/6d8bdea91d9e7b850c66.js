"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[897],{897:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var o=r(4967),i=r(9755),n=r(6885);function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var e=function _toPrimitive(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function _callSuper(t,e,r){return e=_getPrototypeOf(e),function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(e,r||[],_getPrototypeOf(t).constructor):e.apply(t,r))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}var s=function(t){function ProsthesesSlider(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ProsthesesSlider),_callSuper(this,ProsthesesSlider,arguments)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(ProsthesesSlider,t),function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(ProsthesesSlider,[{key:"_init",value:function _init(){if(this.$wrappers=i('[data-js="prostheses-slider-wrapper"]'),!this.$wrappers.length)return!1;return this.options=i.extend({mobileFirst:!0,slidesToShow:1,infinite:!1,dots:!0,arrows:!0,variableWidth:!0,adaptiveHeight:!1,responsive:[{breakpoint:767,settings:"unslick"}]},this.options,!0),!0}},{key:"_bind",value:function _bind(){var t=this;return this.$wrappers.each((function(e,r){var o=i(r),s=o.find('[data-js="prostheses-slider"]'),a=o.find('[data-js="prostheses-slider-navigation"]'),u=i.extend(t._copyObj(t.options),{appendArrows:a,prevArrow:'<div class="prev button-slider-navigation"></div>',nextArrow:'<div class="next button-slider-navigation"></div>'},!0);s.slick(u),t._bindTo(s,"afterChange",(function(){t._triggerVanillaEvent(n,"pimg")})),s.on("setPosition",(function(){i(this).find('[data-js="prostheses-slider-item"]').height("auto");var t=i(this).find(".slick-track"),e=i(t).height();i(this).find('[data-js="prostheses-slider-item"]').css("height",e+"px")}))})),!0}}]),ProsthesesSlider}(o.default)}}]);