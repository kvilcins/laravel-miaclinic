(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[767,6322,1611,7249,5962,5392,9875,1720,8796],{1109:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var s=i(4967),a=i(4419),o=(i(7729),i(9755)),n=i(6885);function _defineProperties(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,_toPropertyKey(s.key),s)}}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function _callSuper(e,t,i){return t=_getPrototypeOf(t),function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,_isNativeReflectConstruct()?Reflect.construct(t,i||[],_getPrototypeOf(e).constructor):t.apply(e,i))}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!e})()}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}var l=function(e){function Modal(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Modal),_callSuper(this,Modal,arguments)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}(Modal,e),function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(Modal,[{key:"_init",value:function _init(){return this.$target=this.options.$target,this.trigger=this.options.trigger||null,this.modal_bg=".mfp-wrap",this.modal_popup='[data-js="modal"]',!!this.$target.length}},{key:"_bind",value:function _bind(){var e=this;if(o.magnificPopup.open({tClose:"Закрыть (Esc)",tLoading:"Загрузка… (%curr% из %total%)",mainClass:"mfp-fade mfp_modal",removalDelay:10,autoFocusLast:!1,closeOnBgClick:!1,items:{src:this.$target,type:"inline"},callbacks:{beforeOpen:function beforeOpen(){var e=o(this.st.items.src[0]);this.st.mainClass=e.attr("data-effect"),o("html").css("overflow","hidden")},open:function open(){setTimeout((function(){var t=o(".modal");t.find("form").length&&new a.default({$block:t}),e.trigger&&o(n).trigger(e.trigger,t),o(n).trigger("modal:opened")}),200),e._triggerVanillaEvent(n,"pimg")},afterClose:function afterClose(){e.$target.remove(),o("html").removeAttr("style")}}}),this._liveBindTo(this.modal_bg,"click",(function(e){var t=e.target,i=o(t).hasClass("mfp-arrow");o.magnificPopup&&!i&&o.magnificPopup.close()})),this._liveBindTo(this.modal_popup,"click",(function(e){e.stopPropagation()})),o(n).width()<=767){var t=o(this.modal_popup)[0].getBoundingClientRect();this._bindTo(o(this.modal_popup).closest(".mfp-wrap"),"scroll",(function(){o(e.modal_popup).find(".mfp-close").addClass("fixed").css({right:t.x})}))}}}]),Modal}(s.default)},1611:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>OfferForService});var s=i(4967),a=i(3330),o=(i(1109),i(9755));class OfferForService extends s.default{_init(){return this.$wrapper=o('[data-js="offer-for-service"]'),!!this.$wrapper.length&&(this.$search=this.$wrapper.find('[data-js="search-input-result"]'),this.$container=this.$wrapper.find('[data-js-offer-for-service="container"]'),this.$select=this.$container.find('[name="custom_fields[offer_for_service]"]'),!0)}_bind(){return this._bindTo(this.$search,"select-result",(()=>{this.getOffers()})),this.getOffers(),!0}getOffers(){let e=parseInt(o.trim(this.$search.val()));if(this.$select.html(""),this.$select.addClass("hidden"),isNaN(e))return!1;let t=this._route("admin:service:offers",{service_id:e});new a.default({url:t.uri,success:e=>{let t=this._nullSafe((()=>e.data.offers));t&&t.length&&(o.each(t,((e,t)=>{let i=o("<option/>",{value:t.id}).html(`${t.name} – ${t.price_string}`),s=this.$container.attr("data-js-offer-for-service-id");s&&t.id==s&&i.attr("selected","selected"),this.$select.append(i)})),this.$select.removeClass("hidden"))}})}}},767:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>AceEditor});var s=i(4967),a=i(9875),o=i(1721),n=i(9755),l=i(4771);class AceEditor extends s.default{_init(){return this.$wrappers=n('[data-js="ace-editor-wrapper"]'),!!this.$wrappers.length&&(this.options.$scroll_element=this.options.$scroll_element||!1,this.initEditor(),!0)}initEditor(){let e=n("[data-js-ace-scripts]");if(e.length){let t=e.data("js-ace-scripts"),i=n("body");n.each(t,(function(e,t){i.append(n("<script/>",{src:t,type:"text/javascript",charset:"utf-8"}))})),e.remove()}this.$wrappers.each(((e,t)=>{let i=n(t),s=i.find('[data-js="ace-editor"]');if(!s.attr("data-ace-initialized")&&s.is(":visible")){let e=i.find('[data-js="ace-editor-panel"]'),t=e.find("[data-js-ace-button]"),o=i.find('textarea[data-js="ace-editor-textarea"]'),r=e.data("js-ace-mode"),d=e.data("js-ace-action-url"),c=a.default.guid();s.attr("id",c),o.hide();let p=new ace.edit(`${c}`);if(this._bindTo(t,"click",(e=>{this.triggerButton(n(e.target),d,p)})),p.setShowPrintMargin(!1),p.setTheme("ace/theme/chrome"),p.session.setMode(r),p.setOptions({enableEmmet:!0,scrollPastEnd:!0}),p.session.setWrapLimitRange(100,180),p.session.setUseWrapMode(!0),p.$blockScrolling=1/0,"ace/mode/json"==r){let e=p.session.getValue();e&&(e=JSON.stringify(JSON.parse(e),null,4),p.session.setValue(e))}p.on("change",(()=>{o.val(p.getValue()),o.trigger("change")}));let getBefore=function(e,t,i){if(!e[t])return!1;let s=e[t].length;if(i<0){if(!e[t-=1])return!1;s=e[t].length,i=s-1}let a=e[t].charAt(i);return/^\s+$/.test(a)||!n.trim(a)?getBefore(e,t,i-1):a},getAfter=function(e,t,i){if(!e[t])return!1;if(i>e[t].length&&(t+=1,i=0),!e[t])return!1;let s=e[t].charAt(i);return/^\s+$/.test(s)||!n.trim(s)?getAfter(e,t,i+1):s};p.getBeforeAndAfterOfCursor=()=>{let e=p.getCursorPosition(),t=p.session.getLines(0,p.session.getLength());return{before:getBefore(t,e.row,e.column-1),after:getAfter(t,e.row,e.column)}},s.append(n("<a/>",{href:"javascript:void(0);",title:"Для переключения Alt+F","data-js":"ace-toggle-fullscreen"}));let u=s.find('[data-js="ace-toggle-fullscreen"]'),m=s.closest(".modal"),toggleFullScreen=()=>{s.toggleClass("fullscreen"),e.toggleClass("fullscreen"),s.is(".fullscreen")?(m.css("overflow-y","hidden"),s.css({"margin-top":Math.round(e.outerHeight())})):(m.css("overflow-y","auto"),s.css({"margin-top":0})),p.resize(),this.options.$scroll_element&&this.options.$scroll_element.scrollTop(0)};this._bindTo(u,"click",toggleFullScreen),this._bindTo(n(l),"keydown keypress",(e=>{if(e.altKey&&("f"===e.key||"а"===e.key||402===e.which||247===e.which))return e.preventDefault(),toggleFullScreen(),!1})),s.attr("data-ace-initialized",!0)}}))}triggerButton(e,t,i){let s=e.data("js-ace-button");new o.default({route:t,data:{action:s},callback:t=>{this.modalOpened(t,e,s,i);let a=t.find('[data-js="ace-button"]');this._bindTo(a,"click",(e=>{let a=n(e.target);this.handleClick(t,s,i,a)}))}})}modalOpened(e,t,i,s){if(!0==("image"===i)){let i=t.data("js-ace-model");e.find('[name="model"]').val(i)}}handleClick(e,t,i,s){switch(!0){case"variable"===t:let a=`v("${n.trim(e.find('[name="variable_key"]').val())||""}")`;this.checkIfWrapperNeeded(i.getBeforeAndAfterOfCursor())&&(a=`{!! ${a} !!}`),i.insert(a),e.close();break;case"link-to-page"===t:let o,l=n.trim(e.find('[name="page_id"]').val()),r=e.find(`[data-search-element-id="${l}"]`),d=n.trim(r.data("search-element-uuid")),c=n.trim(r.data("search-element-h1")).toLowerCase(),p=n.trim(e.find('[name="title"]').val()),u=n.trim(e.find('[name="classes"]').val()).toLowerCase(),m=!!e.find('[name="as_tag"]').prop("checked");if(!d)return!1;if(c=p||c,m){let t=e.find('[name="target_blank"]').prop("checked")?'target="_blank"':"";o=u?`<a href="{{ page_url("${d}") }}" class="${u}" ${t}>${c}</a>`:`<a href="{{ page_url("${d}") }}" ${t}>${c}</a>`}else o=`page_url("${d}")`,this.checkIfWrapperNeeded(i.getBeforeAndAfterOfCursor())&&(o=`{!! ${o} !!}`);i.insert(o),e.close();break;case"image"===t:this._bindTo(e,"form:done",((t,s)=>{let a,o=this._nullSafe((()=>s.notification.data)),l=o.length>1?"\n":"",r=e.find('[name="ace_as"]').val(),d=e.find('[name="ha"]').get(0).checked;d=d?', "ha" => true':"",n.each(o,((e,t)=>{switch(!0){case"as_path"===r:a=`"${t}"`;break;case"as_link"===r:a=`uploads("${t}")`,this.checkIfWrapperNeeded(i.getBeforeAndAfterOfCursor())&&(a=`{!! ${a} !!}`);break;case"as_tag"===r:a=`<img src="{{ uploads("${t}") }}" alt="" />${l}`;break;case"as_pimg"===r:a=`uploads("${t}", ["pimg" => true${d}])`,this.checkIfWrapperNeeded(i.getBeforeAndAfterOfCursor())&&(a=`{!! ${a} !!}`);break;case"as_pimg_bg"===r:a=`uploads("${t}", ["pimgbg" => true${d}])`,this.checkIfWrapperNeeded(i.getBeforeAndAfterOfCursor())&&(a=`{!! ${a} !!}`)}i.insert(a)})),e.close()}));break;case"video"===t:this._bindTo(e,"form:done",((t,s)=>{let a,o=this._nullSafe((()=>s.notification.data)),l=(o.length,e.find('[name="ace_as"]').val());n.each(o,((e,t)=>{switch(!0){case"as_path"===l:console.log(t),a=`"${t}"`;break;case"as_link"===l:a=`uploads("${t}")`,this.checkIfWrapperNeeded(i.getBeforeAndAfterOfCursor())&&(a=`{!! ${a} !!}`)}i.insert(a)})),e.close()}));break;case"preset"===t:let b=s.closest(".page-preset"),v=n.trim(b.find('[data-js="page-preset"]').val())||"";i.insert(v),e.close();break;case"uuid"===t:let _=n.trim(e.find('[name="uuid"]').val())||"";i.insert(_),e.close();break;case"pusher"===t:let $,w=n.trim(e.find('[name="margin_top"]').val())||null,x=n.trim(e.find('[name="margin_bottom"]').val())||null,y=e.find('[name="divider"]').prop("checked");switch(!0){case!!w&&!x:$=y?`@divider(${w})`:`@pusher(${w})`;break;case!!w&&!!x:$=`@divider(${w}, ${x})`;break;case!w&&!x||!!x&&!w:$=y?"@divider":"@pusher"}i.insert($),e.close()}}checkIfWrapperNeeded(e){return">"!==e.before&&","!==e.after&&","!==e.before&&")"!==e.after&&","!==e.before&&"]"!==e.after}}},1721:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>AdminModal});var s=i(4967),a=i(9875),o=i(767),n=i(4520),l=i(7249),r=i(6467),d=i(1720),c=i(5962),p=i(1611),u=(i(858),i(9755)),m=i(6885);class AdminModal extends s.default{_init(){return this.$modal=null,this.$close=null,this.$overlay=null,this.$form=null,this.options.route=this.options.route||null,this.options.data=this.options.data||{},this.options.callback=this.options.callback||null,this.old_title=u("html").find("title").text(),!0}_bind(){this._bindTo(u("body"),"keydown",((e,t)=>{let i=u(".modal.animation_open");if(!i.length)return!1;i.length>1&&(i=i.last());let s=i.find("form");if(e.ctrlKey&&("q"===e.key||"й"===e.key)||"Escape"===e.key){e.preventDefault();let t=i.find('[data-js="ace-editor"]');if(t.length&&t.is(".fullscreen")){let e=t.filter(".fullscreen");e.find('[data-js="ace-toggle-fullscreen"]').trigger("click");let i=parseInt(e.offset().top)-80;return u(".modal").animate({scrollTop:i},0),!1}return this.close(i),!1}return s.length&&e.ctrlKey&&("s"===e.key||"ы"===e.key)?(e.preventDefault(),s.submit(),!1):void 0}));let e=new l.default;return u.ajax({url:this.options.route,data:this.options.data,success:(e,t,i)=>{let s=this._nullSafe((()=>e.view)),l=this._nullSafe((()=>e.notification));if(l&&new n.default(l),s){let e=u(s),t=a.default.guid(),i=u("html"),n=u("body");e.attr("id",t),n.append(e),this.$modal=u(`#${t}`),this.$close=this.$modal.find(".modal__close"),this.$overlay=this.$modal.find(".modal__overlay");let l=u.trim(this.$modal.find(".modal__title").text());if(i.find("title").text(l),this.$modal.addClass("animation_open"),this._bindTo(this.$overlay,"click",(()=>this.close(this.$modal))),this._bindTo(this.$close,"click",(()=>this.close(this.$modal))),this.$modal.close=(e,t)=>this.close(e||this.$modal,t),i.css({"overflow-y":"hidden"}),this.$form=this.$modal.find("form"),this.$form.length){new c.default,new r.default,new d.default,new p.default,u(m).trigger("modal:with-form:appended",{$modal:this.$modal}),this._bindTo(this.$form.find(":input"),"change",(()=>{u(m).trigger("modal:form:changed",{$modal:this.$modal})})),u("select[multiple]").chosen({search_contains:!0,no_results_text:"Не найдено соответствий запросу:",placeholder_text_multiple:"Выберите или начните вбивать…"}),this._bindTo(this.$form,"form:done",((e,t)=>{this.$form.is("[data-js-fire]")&&u(m).trigger(this.$form.data("js-fire"),{response:t,$modal:this.$modal,event:e})})),new o.default({$scroll_element:this.$modal});let e={};this.$form.find(":input").each(((t,i)=>{let s=u(i).attr("name");/^custom_fields\[/.test(s)&&(e[s]?e[s]+=1:e[s]=1)}))}u(m).trigger("modal:opened",{$modal:this.$modal})}u.isFunction(this.options.callback)&&this.options.callback(this.$modal)},error:(e,t,i)=>{let s=this._nullSafe((()=>e.responseJSON.notification));if(s){new n.default(s);let t=this._nullSafe((()=>e.responseJSON.notification.data.trace));this._nullSafe((()=>e.responseJSON.notification.data.full_error));t&&console.table(t)}u.isFunction(this.options.callback)&&this.options.callback(this.$modal)},complete:(t,i)=>{e.remove()}}),!0}close(e,t){let i=u("html");e.removeClass("animation_open").addClass("animation_close"),i.find("title").text(this.old_title),setTimeout((()=>{e.remove(),u(".modal").length||i.css({"overflow-y":"auto"}),this.removeHashParams(),u.isFunction(t)&&t()}),200)}}},7249:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Loader});var s=i(4967),a=i(9755);class Loader extends s.default{_init(){return this.$loader=a('[data-js="ajax-loader"]'),this.$loader.length||(this.$loader=this.create()),!0}create(){let e=a("<div/>",{class:"ajax-loader","data-js":"ajax-loader"}),t=a("<div/>",{class:"ajax-loader__wrapper"}),i=a("<div/>",{class:"ajax-loader__dots"}),s=a("<div/>",{class:"ajax-loader__roller"}),o=a("body");return e.append(t),i.append(s),i.append(s.clone()),t.append(i),t.append(i.clone()),t.append(i.clone()),o.append(e),e.addClass("opened"),o.addClass("blurred"),a('[data-js="ajax-loader"]')}remove(){a("body").removeClass("blurred"),this.$loader.remove()}}},5962:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>SelectDate});var s=i(4967),a=i(4319),o=i.n(a),n=i(9755);class SelectDate extends s.default{_init(){if(this.$pickers=n('[data-js="pikaday"]'),!this.$pickers.length)return!1;this.pickers=[],this.is_range=this.$pickers.closest('[data-js-pikaday="range"]').length;return this.options=Object.assign({format:"DD.MM.YYYY",theme:"synergy-theme",yearRange:[2010,2025],firstDay:1,i18n:{previousMonth:"<",nextMonth:">",months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],weekdays:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],weekdaysShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]}},this.options),!0}_bind(){return this.$pickers.filter(":not(.pika-initialized)").each(((e,t)=>{let i=n(t),s=Object.assign({field:t},this.options);this.is_range&&0===e&&(s.onSelect=e=>{this._diffDays(e,this.pickers[1].getDate())<0&&this.pickers[1].setDate(e),this.pickers[1].setMinDate(e)});let a=new(o())(s);this.pickers.push(a),i.addClass("pika-initialized")})),!0}}},4419:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>AjaxForms});var s=i(4967),a=i(3330),o=i(5392),n=i(1109),l=i(9755);class AjaxForms extends s.default{_init(){return this.button_text=this.options.button_text||"Отправка…",this.$block=this.options.$block||null,this.$block?this.$forms=this.$block.find('[data-js="ajax-form"]'):this.$forms=l('[data-js="ajax-form"]'),!!this.$forms.length}_bind(){let e,t,i,s,r,d;return this.$forms.each(((c,p)=>{e=l(p),new o.default({$block:l(p)}),this._bindTo(e,"submit",(e=>{e.preventDefault(),t=l(e.target),i=t.find(":input"),s=t.find('[type="submit"]'),d=l.trim(s.text()),t.find(".form__error").remove(),r=s.data("ajax-form-button-text")?s.data("ajax-form-button-text"):this.button_text,this.setButtonText(s,r),s.prop("disabled",!0);let o=t.data("js-ajax-form-not-reset"),c=new FormData;return i.each(((e,t)=>{if(t.files)l.each(t.files,((e,i)=>{c.append(t.name,i)}));else if(t.type&&"checkbox"===t.type)c.append(t.name,t.checked?"bool::true":"bool::false");else if(/\[]$/.test(t.name)&&t.options){let e=this.getSelectValues(t);l.each(e,((e,i)=>{c.append(t.name,i)}))}else c.append(t.name,t.value)})),new a.default({$form:t,data:c,cache:!1,processData:!1,contentType:!1,success:e=>{o||(t.get(0).reset(),t.find(":input").trigger("blur"),t.find("textarea").trigger("change"));let i=t.closest(".modal"),s=this._nullSafe((()=>e.view));i.length&&!s&&i.magnificPopup("close"),s&&new n.default({$target:l(s)})},complete:(e,i)=>{this.setButtonText(s,d),t.trigger("form:complete",e,i)}}),!1}))})),!0}setButtonText(e,t){let i=e.find("span");i.length?i.text(t):e.text(t)}getSelectValues(e){let t,i=[],s=e&&e.options;if(s)for(let e=0,a=s.length;e<a;e++)t=s[e],t.selected&&i.push(t.value||t.text);return i}}},5392:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Inputs});var s=i(4967),a=i(9755),o=i(6885),n=i(4771),l=i(9755);class Inputs extends s.default{_init(){return this.$block=this.options.$block||null,this.$block?this.$inputs=this.$block.find(":input"):this.$inputs=a(":input"),!!this.$inputs.length}_bind(){this.afterGrowPluginInit(),this.$inputs.each(((e,t)=>{let i=a(t);this._bindTo(a(o),"load",(()=>{i.each(((e,t)=>{let i=a(t),s=i.closest(".input__wrapper");a.trim(i.val())&&s.addClass("focused")}))})),this._bindTo(i,"focus",(e=>{a(e.target).closest(".input__wrapper").addClass("focused")})),this._bindTo(i,"blur",(e=>{let t=a(e.target),i=t.closest(".input__wrapper");a.trim(t.val())||i.removeClass("focused")}))})),this.$inputs.filter("textarea").css({overflow:"hidden"}).autoGrow()}afterGrowPluginInit(){!function(e){e.fn.autoGrow=function(t){return this.filter("textarea").each((function(){let i=this,s=e(i),a=s.height(),l=e.extend({preGrowCallback:null,postGrowCallback:null},t),d=e("<div></div>").css({position:"absolute",top:-1e4,left:-1e4,width:s.width(),fontSize:s.css("fontSize"),fontFamily:s.css("fontFamily"),fontWeight:s.css("fontWeight"),lineHeight:s.css("lineHeight"),resize:"none","word-wrap":"break-word"}).appendTo(n.body),update=function(e){let t=i.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n$/,"<br/>&#xa0;").replace(/\n/g,"<br/>").replace(/ {2,}/g,(function(e){return function(e,t){for(let i=0,s="";i<t;i++)s+=e;return r}("&#xa0;",e.length-1)+" "}));e&&e.data&&"keydown"===e.data.event&&13===e.keyCode&&(t+="<br />"),d.css("width",s.width()),d.html(t+"...");let o=Math.max(d.height()+0,a);null!==l.preGrowCallback&&(o=l.preGrowCallback(s,d,o,a)),s.height(o),null!==l.postGrowCallback&&l.postGrowCallback(s)};s.change(update).keyup(update).keydown({event:"keydown"},update),e(o).resize(update),update()}))}}(l)}}},9875:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>UUID});var s=i(4967);class UUID extends s.default{_init(){return!0}static guid(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}static s4(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}},6467:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>CustomFields});var s=i(4967),a=i(767),o=i(9755),n=i(6885);class CustomFields extends s.default{_init(){return this.$cf=o('[data-js="custom-field-options"]'),!!this.$cf.length}_bind(){this._bindTo(o(n),"modal:with-form:appended",(()=>{this.showOldCustomFields()}));let e={};return this.$cf.each(((t,i)=>{let s=o(i),a=s.data("js-custom-field-options-name"),n=s.closest("form").find(`[name="${a}"]`),l=this.getField(n);e[a]={name:a,$current:s,$target:n,field:l},s.is(":visible")&&this.selectOption(s,l)})),o.each(e,((e,t)=>{this._bindTo(t.$target,"change",(e=>{let i=this.getField(o(e.currentTarget));this.selectOption(t.$current,i),this.showOldCustomFields()}))})),!0}getField(e){return e.find("option:selected").data("cf-field")}selectOption(e,t){let i;i=e.data("js-cf-nested")?e.find("> [data-js-custom-field-options]"):o('[data-js="custom-field-options"]:not([data-js-cf-nested]) > [data-js-custom-field-options]'),i.hide(),i.filter(`:regex(data:js-custom-field-options,^${t}:|:${t}:|^${t}$|:${t}$)`).show(),o(n).trigger("image-preview:update"),o(n).trigger("image-select:init"),o("select[multiple]").chosen({search_contains:!0,no_results_text:"Не найдено соответствий запросу:",placeholder_text_multiple:"Выберите или начните вбивать…"}),new a.default({$scroll_element:i.closest(".modal")})}showOldCustomFields(){let e=o("[data-model-fields]").data("model-fields"),t=this._nullSafe((()=>e.fields));this._objSize(t)&&o.each(t,((e,t)=>{let i=this.$cf.find(`[name="custom_fields[${e}]"]`),s=this.$cf.find(`[name="custom_fields[${e}][cf_data][]"]`),a=this.$cf.find(`[name="custom_fields[${e}][]"]`),showRoot=e=>{let t=o(e).closest("[data-js-custom-field-options]");t.closest("[data-js-cf-nested]").length||t.show()};i.each(((e,t)=>showRoot(t))),s.each(((e,t)=>showRoot(t))),a.each(((e,t)=>showRoot(t)))}))}}},1720:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>ImageSelect});var s=i(4967),a=(i(8796),i(9755)),o=i(6885);class ImageSelect extends s.default{_init(){return this.selector='[data-js="image-select"]',!0}_bind(){return this.initSelectors(),this._bindTo(a(o),"image-select:init",(()=>{this.initSelectors()})),!0}initSelectors(){a(this.selector).each(((e,t)=>{let i=a(t);!i.data("dd-slick:inited")&&i.closest("[data-js-custom-field-options]").is(":visible")&&(i.ddslick({data:i.data("js-image-select-data"),width:400,height:285,imagePosition:"right",selectText:"Выберите изображение",onSelected:e=>{e.selectedItem.closest(".dd-container").next("select").find(`option[value="${e.selectedData.value}"]`).attr("selected",!0),i.trigger("change")}}),i.data("dd-slick:inited",!0))}))}}},8796:(e,t,i)=>{!function(e){e.fn.ddslick=function(i){return t[i]?t[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exists."):t.init.apply(this,arguments)};var t={},i={data:[],keepJSONItemsOnTop:!1,width:260,height:null,background:"#eee",selectText:"",defaultSelectedIndex:null,truncateDescription:!0,imagePosition:"left",showSelectedHTML:!0,clickOffToClose:!0,embedCSS:!0,onSelected:function(){}};function j(e,t){var i=e.data("ddslick"),s=e.find(".dd-selected"),a=s.siblings(".dd-selected-value"),o=(e.find(".dd-options"),s.siblings(".dd-pointer"),e.find(".dd-option").eq(t)),n=o.closest("li"),l=i.settings,r=i.settings.data[t];e.find(".dd-option").removeClass("dd-option-selected"),o.addClass("dd-option-selected"),i.selectedIndex=t,i.selectedItem=n,i.selectedData=r,l.showSelectedHTML?s.html((r.imageSrc?'<img class="dd-selected-image'+("right"==l.imagePosition?" dd-image-right":"")+'" src="'+r.imageSrc+'" />':"")+(r.text?'<label class="dd-selected-text">'+r.text+"</label>":"")+(r.description?'<small class="dd-selected-description dd-desc'+(l.truncateDescription?" dd-selected-description-truncated":"")+'" >'+r.description+"</small>":"")):s.html(r.text),a.val(r.value),i.original.val(r.value),e.data("ddslick",i),k(e),function g(e){var t=e.find(".dd-select").css("height"),i=e.find(".dd-selected-description"),s=e.find(".dd-selected-image");i.length<=0&&s.length>0&&e.find(".dd-selected-text").css("lineHeight",parseInt(t)-17+"px")}(e),"function"==typeof l.onSelected&&l.onSelected.call(this,i)}function f(t){var i=t.find(".dd-select"),s=i.siblings(".dd-options"),a=i.find(".dd-pointer"),o=s.is(":visible");e(".dd-click-off-close").not(s).slideUp(50),e(".dd-pointer").removeClass("dd-pointer-up"),o?(s.slideUp("fast"),a.removeClass("dd-pointer-up")):(s.slideDown("fast"),a.addClass("dd-pointer-up")),function h(t){t.find(".dd-option").each((function(){var i=e(this),s=i.css("height"),a=i.find(".dd-option-description"),o=t.find(".dd-option-image");a.length<=0&&o.length>0&&i.find(".dd-option-text").css("lineHeight",parseInt(s)-17+"px")}))}(t)}function k(e){e.find(".dd-options").slideUp(50),e.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")}t.init=function(t){t=e.extend({},i,t);return e("#css-ddslick").length<=0&&t.embedCSS&&e('<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; padding-right: 30px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>').appendTo("head"),this.each((function(){var i=e(this);if(!i.data("ddslick")){var s=[];t.data;i.find("option").each((function(){var t=e(this),i=t.data();s.push({text:e.trim(t.text()),value:t.val(),selected:t.is(":selected"),description:i.description,imageSrc:i.imagesrc})})),t.keepJSONItemsOnTop?e.merge(t.data,s):t.data=e.merge(s,t.data);var a=i,o=e("<div></div>");i.replaceWith(o),(i=o).addClass("dd-container").append('<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>').append('<ul class="dd-options"></ul>');s=i.find(".dd-select");var n=i.find(".dd-options");n.css({width:t.width}),s.css({width:t.width,background:t.background}),i.css({width:t.width}),null!=t.height&&n.css({height:t.height,overflow:"auto"}),e.each(t.data,(function(e,i){i.selected&&(t.defaultSelectedIndex=e),n.append('<li><a class="dd-option">'+(i.value?' <input class="dd-option-value" type="hidden" value="'+i.value+'" />':"")+(i.imageSrc?' <img class="dd-option-image'+("right"==t.imagePosition?" dd-image-right":"")+'" src="'+i.imageSrc+'" />':"")+(i.text?' <label class="dd-option-text">'+i.text+"</label>":"")+(i.description?' <small class="dd-option-description dd-desc">'+i.description+"</small>":"")+"</a></li>")}));var l={settings:t,original:a,selectedIndex:-1,selectedItem:null,selectedData:null};if(i.data("ddslick",l),t.selectText.length>0&&null==t.defaultSelectedIndex)i.find(".dd-selected").html(t.selectText);else{var r=null!=t.defaultSelectedIndex&&t.defaultSelectedIndex>=0&&t.defaultSelectedIndex<t.data.length?t.defaultSelectedIndex:0;j(i,r)}i.find(".dd-select").on("click.ddslick",(function(){f(i)})),i.find(".dd-option").on("click.ddslick",(function(){j(i,e(this).closest("li").index())})),t.clickOffToClose&&(n.addClass("dd-click-off-close"),i.on("click.ddslick",(function(e){e.stopPropagation()})),e("body").on("click",(function(){e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")})))}}))},t.select=function(t){return this.each((function(){void 0!==t.index&&j(e(this),t.index)}))},t.open=function(){return this.each((function(){var t=e(this);t.data("ddslick")&&f(t)}))},t.close=function(){return this.each((function(){var t=e(this);t.data("ddslick")&&k(t)}))},t.destroy=function(){return this.each((function(){var t=e(this),i=t.data("ddslick");if(i){var s=i.original;t.removeData("ddslick").unbind(".ddslick").replaceWith(s)}}))}}(i(9755))}}]);