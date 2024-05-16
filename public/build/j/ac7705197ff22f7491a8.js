"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[7914],{7914:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var n=o(4967),i=(o(7729),o(9755)),a=o(6885),r=o(4771);function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _toPropertyKey(t){var e=function _toPrimitive(t,e){if("object"!=typeof t||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function _callSuper(t,e,o){return e=_getPrototypeOf(e),function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(e,o||[],_getPrototypeOf(t).constructor):e.apply(t,o))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}var s=function(t){function Map(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Map),_callSuper(this,Map,arguments)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(Map,t),function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(Map,[{key:"_init",value:function _init(){return this.$map=i(".map-container"),this.api_key=this.$map.data("js-api"),this.$map_loader=i('[data-js="map_loader"]'),this.points=this.$map.data("js-map-data"),this.maps=[],this.mapAppend=!1,this.mapLoaded=!1,this.mapModalId="map-modal",this.onlyModal=!1,this.addYamap(),this.$map.length?!!this.$map.length:(this.onlyModal=!0,this.onlyModal)}},{key:"_bind",value:function _bind(){var t=this;return this.onlyModal||this._bindTo(i(a),"scroll resize orientationchange",(function(){t.mapInViewport()&&t.init("map")})),this._bindTo(i(a),"modal:opened",(function(e,o){t.mapElem=i("#".concat(t.mapModalId)),t.initMapInModal(t.mapModalId,t.mapElem)})),!0}},{key:"mapInViewport",value:function mapInViewport(){var t=this.$map.get(0),e=t.getBoundingClientRect(),o=t.clientHeight+1e3;return e.top+o>=0&&e.bottom-o<=(a.innerHeight||r.documentElement.clientHeight)}},{key:"addYamap",value:function addYamap(){this.mapAppend||(i("body").append(i("<script/>",{src:"https://api-maps.yandex.ru/2.1/?apikey=".concat(this.api_key,"&lang=ru_RU")})),this.mapAppend=!0)}},{key:"init",value:function init(t){var e=this;if(!this.maps.includes(t))if(a.ymaps&&a.ymaps.Map){this.$map_loader.remove(),this.maps.push(t);var o=new ymaps.Map(t,{center:[59.92018406230688,30.352508425270045],zoom:16,controls:["zoomControl"]});o.behaviors.disable("scrollZoom"),o.setZoom(9),this._isTouchDevice()&&o.behaviors.disable("drag");var n=new ymaps.GeoObjectCollection;i.each(this.points,(function(t,e){var o=new ymaps.Placemark([e.lat,e.lon],{},{iconLayout:"default#image",iconImageHref:"/images/app/pin.svg",iconImageSize:[35,45]});n.add(o)})),o.geoObjects.add(n),o.setBounds(n.getBounds(),{checkZoomRange:!0,zoomMargin:35}).then((function(){o.getZoom()>16&&o.setZoom(16)}))}else setTimeout((function(){e.init(t)}),100)}},{key:"initMapInModal",value:function initMapInModal(t,e){var o=this;if(this.$map=i(".map-container"),this.api_key=this.$map.data("js-api"),this.$map_loader=i('[data-js="map_loader"]'),this.points=this.$map.data("js-map-data"),this.mapAppend=!1,this.mapLoaded=!1,!1!=!!e.length)if(a.ymaps&&a.ymaps.Map){this.$map_loader.remove();var n=new ymaps.Map(t,{center:[59.92018406230688,30.352508425270045],zoom:16,controls:["zoomControl"]});n.behaviors.disable("scrollZoom"),n.setZoom(9),this._isTouchDevice()&&n.behaviors.disable("drag");var r=new ymaps.GeoObjectCollection;i.each(this.points,(function(t,e){var o=new ymaps.Placemark([e.lat,e.lon],{},{iconLayout:"default#image",iconImageHref:"/images/app/pin.svg",iconImageSize:[35,45]});r.add(o)})),n.geoObjects.add(r),n.setBounds(r.getBounds(),{checkZoomRange:!0,zoomMargin:35}).then((function(){n.getZoom()>16&&n.setZoom(16)}))}else setTimeout((function(){o.init(t)}),100)}}]),Map}(n.default)}}]);