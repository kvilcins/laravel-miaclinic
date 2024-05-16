"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[6511],{6511:(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});var n=i(4967),r=i(3330),o=i(9755),a=i(6885);function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _toPropertyKey(t){var e=function _toPrimitive(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function _callSuper(t,e,i){return e=_getPrototypeOf(e),function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(e,i||[],_getPrototypeOf(t).constructor):e.apply(t,i))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}var s=function(t){function Quiz(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Quiz),_callSuper(this,Quiz,arguments)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(Quiz,t),function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(Quiz,[{key:"_init",value:function _init(){this.$wrappers=o('[data-js="quiz"]');return this.options=o.extend({infinite:!1,dots:!1,arrows:!1,draggable:!1,swipe:!1,slidesToShow:1},this.options,!0),!!this.$wrappers}},{key:"_bind",value:function _bind(){var t=this;return this.quizInit(this.$wrappers),this._bindTo(o(a),"modal:opened",(function(e,i){t.$wrappers=o('[data-js="quiz"]'),t.$wrappers_remove=t.$wrappers.splice(1),t.quizInit(t.$wrappers)})),!0}},{key:"quizInit",value:function quizInit(t){var e=this;t.each((function(t,i){var n=o(i),r=n.find('[data-js-quiz="wrapper"]'),a=n.find('[data-js="quiz-pages"]'),s=n.find('[data-js="quiz-progress"]'),u=n.find('[data-js-quiz-navigation="back"]'),c=n.find('[data-js-quiz-navigation="forward"]'),l=n.find('[data-js-quiz="ajax-content"]');e.$quiz_type=n.find('[name="quiz_type"]').val(),r.addClass("initialized");var f=o.extend(e._copyObj(e.options),{adaptiveHeight:!0,dots:!0,appendDots:s},!0);e._bindTo(a,"init",(function(t,i){e.navigationCheck(i,s,u,c)})),a.not(".slick-initialized").slick(f),e._bindTo(a,"afterChange",(function(t,i){e.navigationCheck(i,s,u,c)})),e._bindTo(u,"click",(function(t){a.slick("slickPrev"),c.removeClass("quiz__button-next_3")})),e._bindTo(c,"click",(function(t){a.slick("slickNext"),n.height(n.height());var i=o(t.currentTarget);2===a.find(".slick-active").data("slick-index")?i.addClass("quiz__button-next_3"):i.removeClass("quiz__button-next_3"),i.data("js-results")&&e.showLoader(l,n)}))})),this.radioSelect(),this.checkboxSelect()}},{key:"navigationCheck",value:function navigationCheck(t,e,i,n){var r=t.currentSlide,o=t.slideCount;0!==r&&i.length&&i.removeClass("inactive"),0===r&&i.length&&i.addClass("inactive"),n.length&&(r+1===o?n.data("js-results",!0):n.data("js-results",!1))}},{key:"radioSelect",value:function radioSelect(){this._liveBindTo('[data-js-radio="input"]',"click",(function(t){var e=o(t.currentTarget),i=e.closest('[data-js="radio"]'),n=i.find('[data-js="radio-answer"]');i.find('[data-js-radio="inputs"]').find(".radio__item").removeClass("checked"),e.addClass("checked"),n.val(e.find(".text").text())}))}},{key:"checkboxSelect",value:function checkboxSelect(){this._liveBindTo('[data-js-checkbox="input"]',"click",(function(t){var e=o(t.currentTarget),i=e.find("input");e.toggleClass("checked"),i.prop("checked",!i.prop("checked"))}))}},{key:"showLoader",value:function showLoader(t,e){var i=this;e.find('[data-js-quiz="quiz_title"]').text("Подбираем персональное предложение..."),e.find(".quiz__inner").fadeOut(200,(function(){new r.default({url:i._route("app:quiz:get-view",{view:"loader"}).uri,success:function success(n){var r=i._nullSafe((function(){return n.view}));if(r){t.append(r);var o=t.find(".quiz__results__count"),a=o.find(".bg"),s=o.find(".quiz__results__value"),u=0,c=setInterval((function(){u>=100?(clearInterval(c),0,setTimeout((function(){i.showFinalForm(t,e)}),100)):(u+=2,a.css("width",u+"%"),s.text("".concat(u,"%")))}),1)}}})}))}},{key:"showFinalForm",value:function showFinalForm(t,e){var i=this,n=e.find('[data-js-quiz="quiz_title"]');n.text("Спасибо за ваши ответы!"),n.addClass("h2_final"),n.after('<div class="quiz__subtitle">Уже готовим расчёт стоимости</div>'),this.$wrappers.find('[data-js="quiz-info-title"]').html("<span>Подарки <br>уже ждут вас:</span>"),t.children().fadeOut(200,(function(){t.empty(),new r.default({url:i._route("app:quiz:get-view",{view:"final"}).uri+"/?quiz_type="+i.$quiz_type,success:function success(e){var n=i._nullSafe((function(){return e.view}));if(n){t.append(n);t.closest("form");setTimeout((function(){i._triggerVanillaEvent(a,"pimg")}),10),setTimeout((function(){t.closest('[data-js="quiz"]').height("")}),50)}o(a).trigger("ajax:content",t)}})}))}}]),Quiz}(n.default)}}]);