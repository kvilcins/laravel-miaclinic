"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[1752],{1752:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(4967),n=(r(7729),r(9755));function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function _callSuper(e,t,r){return t=_getPrototypeOf(t),function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,_isNativeReflectConstruct()?Reflect.construct(t,r||[],_getPrototypeOf(e).constructor):t.apply(e,r))}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!e})()}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}var i=function(e){function VideoPopup(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,VideoPopup),_callSuper(this,VideoPopup,arguments)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}(VideoPopup,e),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(VideoPopup,[{key:"_init",value:function _init(){return this.selector='[data-js="video-popup"], [data-fancybox].video-bg',!0}},{key:"_bind",value:function _bind(){return this._liveBindTo(this.selector,"click",(function(e){e.preventDefault();var t=n(e.currentTarget),r=t.data("js-video-popup")?t.data("js-video-popup"):t.attr("href");r=(r=r.replace("&feature=youtu.be","")).replace("&autoplay=1&rel=0&controls=1&showinfo=1","");var o=new URL(r).searchParams.get("t");r=r.split("&")[0];var i="";return o&&(i="&amp;start=".concat(o)),n.magnificPopup.open({tClose:"Закрыть (Esc)",tLoading:"Загрузка… (%curr% из %total%)",type:"iframe",mainClass:"mfp-fade mfp_video-popup",removalDelay:160,preloader:!1,fixedContentPos:!1,items:{src:r},iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe></div>',patterns:{youtube:{src:"//www.youtube.com/embed/%id%?rel=0&autoplay=1".concat(i)}}}}),!1})),!0}}]),VideoPopup}(o.default)}}]);