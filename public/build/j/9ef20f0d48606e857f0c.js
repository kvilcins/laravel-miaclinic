"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[5392],{5392:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Inputs});var i=n(4967),l=n(9755),s=n(6885),a=n(4771),o=n(9755);class Inputs extends i.default{_init(){return this.$block=this.options.$block||null,this.$block?this.$inputs=this.$block.find(":input"):this.$inputs=l(":input"),!!this.$inputs.length}_bind(){this.afterGrowPluginInit(),this.$inputs.each(((t,e)=>{let n=l(e);this._bindTo(l(s),"load",(()=>{n.each(((t,e)=>{let n=l(e),i=n.closest(".input__wrapper");l.trim(n.val())&&i.addClass("focused")}))})),this._bindTo(n,"focus",(t=>{l(t.target).closest(".input__wrapper").addClass("focused")})),this._bindTo(n,"blur",(t=>{let e=l(t.target),n=e.closest(".input__wrapper");l.trim(e.val())||n.removeClass("focused")}))})),this.$inputs.filter("textarea").css({overflow:"hidden"}).autoGrow()}afterGrowPluginInit(){!function(t){t.fn.autoGrow=function(e){return this.filter("textarea").each((function(){let n=this,i=t(n),l=i.height(),o=t.extend({preGrowCallback:null,postGrowCallback:null},e),u=t("<div></div>").css({position:"absolute",top:-1e4,left:-1e4,width:i.width(),fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),lineHeight:i.css("lineHeight"),resize:"none","word-wrap":"break-word"}).appendTo(a.body),update=function(t){let e=n.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n$/,"<br/>&#xa0;").replace(/\n/g,"<br/>").replace(/ {2,}/g,(function(t){return function(t,e){for(let n=0,i="";n<e;n++)i+=t;return r}("&#xa0;",t.length-1)+" "}));t&&t.data&&"keydown"===t.data.event&&13===t.keyCode&&(e+="<br />"),u.css("width",i.width()),u.html(e+"...");let s=Math.max(u.height()+0,l);null!==o.preGrowCallback&&(s=o.preGrowCallback(i,u,s,l)),i.height(s),null!==o.postGrowCallback&&o.postGrowCallback(i)};i.change(update).keyup(update).keydown({event:"keydown"},update),t(s).resize(update),update()}))}}(o)}}}}]);