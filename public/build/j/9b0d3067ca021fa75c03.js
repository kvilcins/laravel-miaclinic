"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[8668,2637],{8668:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ImageSliders});var s=i(4967),n=i(2637),l=i(3330),a=i(1721),r=i(9755),d=i(6885);class ImageSliders extends s.default{_init(){return this.$slider_list=r('[data-js="image-sliders-list"]'),new n.default({$wrapper:this.$slider_list,namespace:this.constructor.name}),!!this.$slider_list.length}_bind(){return this._liveBindTo('[data-js="slide-delete"]',"click",(e=>{this.deleteOrRestoreSlide(r(e.target))})),this._liveBindTo('[data-js="slide-restore"]',"click",(e=>{this.deleteOrRestoreSlide(r(e.target))})),this._bindTo(r(d),"modal:opened",((e,t)=>{let i=this._nullSafe((()=>t.$modal));this.initAddSlides(i)})),this._bindTo(r(d),"image_slider:created",((e,t)=>{d.location.reload()})),this._bindTo(r(d),"image_slider:updated",((e,t)=>{let i=this._nullSafe((()=>t.response.notification.data.image_slider)),s=this._nullSafe((()=>t.$modal)),n=this.$slider_list.find(`[data-js-id="${i.id}"]`).find("td");n.length&&n.text(i.name),s&&s.length&&s.close(null,(()=>{let e=this._route("admin:widget:image-slider:edit",{image_slider:i.id});new a.default({route:e.uri})}))})),this._bindTo(this.$slider_list,"clear:cache",((e,t)=>{let i=r(t.target),s=this._route("admin:image-slider:cache:clear",{image_slider:i.data("js-id")});new l.default({url:s.uri,method:s.method})})),this._bindTo(this.$slider_list,"create:similar",((e,t)=>{let i=r(t.target),s=this._route("admin:image-slider:create:similar",{image_slider:i.data("js-id")});new a.default({route:s.uri})})),!0}deleteOrRestoreSlide(e){let t=e.closest('[data-js="slide-delete-wrapper"]'),i=t.find("input");return e.is('[data-js="slide-delete"]')?(t.addClass("deleted"),i.val(1),!1):e.is('[data-js="slide-restore"]')?(t.removeClass("deleted"),i.val(0),!1):this}initAddSlides(e){let t=e.find('[data-js="image-sliders__file-input-add"]'),i=e.find("tbody");this._bindTo(t,"click",(()=>{let e=i.find("tr").last(),t=e.clone();t.removeAttr("style"),t.insertBefore(e)}))}}},2637:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ContextMenu});var s=i(4967),n=i(9755),l=i(4771),a=i(6885);class ContextMenu extends s.default{_init(){return!(!this.options.$wrapper||!this.options.$wrapper.length)&&(this.options.namespace=this.options.namespace||null,this.$menu=this.options.$wrapper.find('[data-js="context-menu"]'),!!this.$menu.length&&(this.menu_open_selector="context-menu_active",this.task_item_selector='[data-js-context-menu="item"]',this.link_selector='[data-js-context-menu="link"]',this.$item_in_context=null,this.$link_in_context=null,this.menu_state=0,!0))}_bind(){return this.contextListener(),this.clickListener(),this.keyupListener(),this.resizeListener(),!0}contextListener(){let callback=e=>{this.$item_in_context=this.clickInsideElement(e,this.task_item_selector),this.$item_in_context?(e.preventDefault(),this.toggleMenuOn(),this.positionMenu(e)):(this.$item_in_context=null,this.toggleMenuOff())};this._bindTo(n(l),"contextmenu",callback),this._onTwoFingersTap(n(l),callback)}clickListener(){this._bindTo(n(l),"click",(e=>{if(this.$link_in_context=this.clickInsideElement(e,this.link_selector),this.$link_in_context)e.preventDefault(),this.menuItemListener();else{1===(e.which||e.button)&&this.toggleMenuOff()}}))}menuItemListener(){let e=this.options.namespace?`.${this.options.namespace}`:"";this.options.$wrapper.trigger(`${this.$link_in_context.attr("data-js-action")}${e}`,{target:this.$item_in_context}),this.toggleMenuOff()}keyupListener(){this._bindTo(n(a),"keyup",(e=>{27===e.keyCode&&this.toggleMenuOff()}))}resizeListener(){this._bindTo(n(a),"resize",(e=>{this.toggleMenuOff()}))}toggleMenuOn(){n("[data-context-menu-target]").each(((e,t)=>{n(t).removeAttr("data-context-menu-target")})),this.$item_in_context.attr("data-context-menu-target",!0),1!==this.menu_state&&(this.menu_state=1,this.$menu.addClass(this.menu_open_selector))}toggleMenuOff(){this.$item_in_context&&this.$item_in_context.removeAttr("data-context-menu-target"),0!==this.menu_state&&(this.menu_state=0,this.$menu.removeClass(this.menu_open_selector))}positionMenu(e){let t=this.getPosition(e),i=t.x,s=t.y,n=this.$menu.get(0).offsetWidth+4,l=a.innerWidth;l-i<n?this.$menu.css({left:l-n}):this.$menu.css({left:i}),this.$menu.css({top:s})}clickInsideElement(e,t){let i=n(e.target);if(i.is(t))return i;let s=i.closest(t);return!!s.length&&s}getPosition(e=a.event){let t,i;return e.pageX||e.pageY?(t=e.pageX,i=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+l.body.scrollLeft+l.documentElement.scrollLeft,i=e.clientY+l.body.scrollTop+l.documentElement.scrollTop),{x:t,y:i}}}}}]);