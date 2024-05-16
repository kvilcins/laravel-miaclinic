"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[683,7249],{683:(e,t,s)=>{s.r(t),s.d(t,{default:()=>AjaxUpload});var i=s(4967),o=s(4520),a=s(7249),r=s(9755),n=s(6885);class AjaxUpload extends i.default{_init(){return this.$form=null,this.$fields=null,this.$submit=null,this.options.animation_class=this.options.animation_class||"a_shake",this.options.error_class=this.options.error_class||"form__error",this.options.speed=this.options.speed||700,this.options.success=this.options.success||this.success,this.options.error=this.options.error||this.error,this.options.complete=this.options.complete||this.complete,this.options.show_notifications=!1!==this.options.show_notifications,!0}_bind(){return this._liveBindTo("form","submit",(e=>{if(e.stopPropagation(),e.preventDefault(),this.$form=r(e.target).closest("form"),this.$fields=this.$form.find(":input"),this.$submit=this.$form.find('[type="submit"]'),!this.$form.is("[data-js-ajax-upload]"))return!1;if(this.$form.find(".form__require-error").length)return!1;let t=new FormData;this.$fields.each(((e,s)=>{let i=r(s);if(i.closest("tr").length&&!i.closest("tr").is(":visible"))return!0;if(/^custom_fields\[/gi.test(s.name)||/^child_custom_fields\[/gi.test(s.name)){let e=i.closest("[data-js-custom-field-options]");if(e.length&&!e.is(":visible"))return!0}if(s.files)r.each(s.files,((e,i)=>{t.append(s.name,i)}));else if(s.type&&"checkbox"===s.type)t.append(s.name,s.checked?"bool::true":"bool::false");else if(/\[]$/.test(s.name)&&s.options)if(i.is("select[multiple]")){let e=i.next(".chosen-container");if(e.length){let o=e.find(".search-choice a");o.length?o.each(((e,o)=>{let a=i.find(`option:eq(${r(o).data("option-array-index")})`);t.append(s.name,a.val())})):t.append(s.name,null)}}else{let e=this.getSelectValues(s);r.each(e,((e,i)=>{t.append(s.name,i)}))}else t.append(s.name,s.value)})),this.disableButton();let s=new a.default;return this.$form.find(".form__error").remove(),r.ajax({url:this.$form.attr("action"),type:this.$form.attr("method"),data:t,cache:!1,dataType:"json",processData:!1,contentType:!1,beforeSend:(e,t)=>{"post"===t.type.toLowerCase()&&r.ajax({url:this._route("app:refresh-csrf").uri,type:"GET",dataType:"json",async:!1,success:e=>{let s=this._nullSafe((()=>e.token));r('meta[name="token"]').attr("content",s),r('input[name="_token"]').val(s),t.data.set("_token",s)}})},success:(e,t,s)=>{let i=this._nullSafe((()=>e.notification));i&&this.options.show_notifications&&new o.default(i);let a=this._nullSafe((()=>e.redirect_url));a&&(n.location.href=a),this.$form.trigger("form:done",e),this.options.success(e,t,s,this),this.enableButton()},error:(e,t,s)=>{let i=this._nullSafe((()=>e.responseJSON.form_errors));i&&this.formErrors(i),this.enableButton();let a=this._nullSafe((()=>e.responseJSON.notification));if(a){new o.default(a);let t=this._nullSafe((()=>e.responseJSON.notification.data.trace));this._nullSafe((()=>e.responseJSON.notification.data.full_error));t&&console.table(t)}this.options.error(e,t,this)},complete:(e,t)=>{s.remove(),this.options.complete(e,t,this)}}),!1})),!0}disableButton(){this.$submit&&this.$submit.prop("disabled",!0)}enableButton(){this.$submit&&this.$submit.prop("disabled",!1)}success(e,t,s,i){return i.options.$form&&i.options.$form.get(0).reset(),this}error(e,t,s,i){return this}complete(e,t,s){return this}formErrors(e){return this.$form?(r.each(e,((e,t)=>{r.isArray(t)&&(t=t.join(", ")),e.match(/\.(\d+)$/)&&(e=e.replace(/\.\d+$/,""));let s=this.$form.find(`[name="${e}[]"]`),i=s.length?s:this.$form.find(`input[name="${e}"], textarea[name="${e}"]`),o=i.get(0);if(i.prev().is('[data-js="ace-editor"]')){let e=i.prev();e.next().is(`.${this.options.error_class}`)||(r("<div/>",{class:this.options.error_class}).html(t).insertAfter(e),this._bindTo(i,"change",(e=>{let t=r(e.target).prev();t.is(`.${this.options.error_class}`)&&t.remove()})))}else if(s.length){let e=i.next();e.next().is(`.${this.options.error_class}`)||(r("<div/>",{class:this.options.error_class}).html(t).insertAfter(e),this._bindTo(i,"change",(e=>{let t=r(e.target).next();t.next().is(`.${this.options.error_class}`)&&t.next().remove()}))),this.options.animation_class&&(e.addClass(`${this.options.animation_class}`),setTimeout((()=>{r(o).next().removeClass(this.options.animation_class)}),this.options.speed))}else if(!i.next().is(`.${this.options.error_class}`)){let e=i.is("textarea")?"form__error_textarea":"";r("<div/>",{class:`${this.options.error_class} ${e}`}).html(t).insertAfter(i),this._bindTo(i,"change",(e=>{let t=r(e.target).next();t.is(`.${this.options.error_class}`)&&t.remove()}))}this.options.animation_class&&(i.addClass(`${this.options.animation_class}`),setTimeout((()=>{r(o).removeClass(this.options.animation_class)}),this.options.speed))})),this):this}getSelectValues(e){let t,s=[],i=e&&e.options;if(i)for(let e=0,o=i.length;e<o;e++)t=i[e],t.selected&&s.push(t.value||t.text);return s}}},7249:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Loader});var i=s(4967),o=s(9755);class Loader extends i.default{_init(){return this.$loader=o('[data-js="ajax-loader"]'),this.$loader.length||(this.$loader=this.create()),!0}create(){let e=o("<div/>",{class:"ajax-loader","data-js":"ajax-loader"}),t=o("<div/>",{class:"ajax-loader__wrapper"}),s=o("<div/>",{class:"ajax-loader__dots"}),i=o("<div/>",{class:"ajax-loader__roller"}),a=o("body");return e.append(t),s.append(i),s.append(i.clone()),t.append(s),t.append(s.clone()),t.append(s.clone()),a.append(e),e.addClass("opened"),a.addClass("blurred"),o('[data-js="ajax-loader"]')}remove(){o("body").removeClass("blurred"),this.$loader.remove()}}}}]);