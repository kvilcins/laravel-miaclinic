"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[8449,2637],{8449:(t,e,i)=>{i.r(e),i.d(e,{default:()=>Activities});var n=i(4967),s=i(2637),o=i(1721),l=i(4520),a=i(9755);class Activities extends n.default{_init(){return this.$list=a('[data-js="activities-list"]'),!!this.$list.length&&(new s.default({$wrapper:this.$list,namespace:this.constructor.name}),!0)}_bind(){return this._bindTo(this.$list,"show",((t,e)=>{let i=a(e.target);new o.default({route:i.data("js-show-url")})})),this._bindTo(this.$list.find('[data-js-activity="no-edit"]'),"click",(()=>{new l.default({type:"info",text:"Не найден объект редактирования"})})),!0}}},2637:(t,e,i)=>{i.r(e),i.d(e,{default:()=>ContextMenu});var n=i(4967),s=i(9755),o=i(4771),l=i(6885);class ContextMenu extends n.default{_init(){return!(!this.options.$wrapper||!this.options.$wrapper.length)&&(this.options.namespace=this.options.namespace||null,this.$menu=this.options.$wrapper.find('[data-js="context-menu"]'),!!this.$menu.length&&(this.menu_open_selector="context-menu_active",this.task_item_selector='[data-js-context-menu="item"]',this.link_selector='[data-js-context-menu="link"]',this.$item_in_context=null,this.$link_in_context=null,this.menu_state=0,!0))}_bind(){return this.contextListener(),this.clickListener(),this.keyupListener(),this.resizeListener(),!0}contextListener(){let callback=t=>{this.$item_in_context=this.clickInsideElement(t,this.task_item_selector),this.$item_in_context?(t.preventDefault(),this.toggleMenuOn(),this.positionMenu(t)):(this.$item_in_context=null,this.toggleMenuOff())};this._bindTo(s(o),"contextmenu",callback),this._onTwoFingersTap(s(o),callback)}clickListener(){this._bindTo(s(o),"click",(t=>{if(this.$link_in_context=this.clickInsideElement(t,this.link_selector),this.$link_in_context)t.preventDefault(),this.menuItemListener();else{1===(t.which||t.button)&&this.toggleMenuOff()}}))}menuItemListener(){let t=this.options.namespace?`.${this.options.namespace}`:"";this.options.$wrapper.trigger(`${this.$link_in_context.attr("data-js-action")}${t}`,{target:this.$item_in_context}),this.toggleMenuOff()}keyupListener(){this._bindTo(s(l),"keyup",(t=>{27===t.keyCode&&this.toggleMenuOff()}))}resizeListener(){this._bindTo(s(l),"resize",(t=>{this.toggleMenuOff()}))}toggleMenuOn(){s("[data-context-menu-target]").each(((t,e)=>{s(e).removeAttr("data-context-menu-target")})),this.$item_in_context.attr("data-context-menu-target",!0),1!==this.menu_state&&(this.menu_state=1,this.$menu.addClass(this.menu_open_selector))}toggleMenuOff(){this.$item_in_context&&this.$item_in_context.removeAttr("data-context-menu-target"),0!==this.menu_state&&(this.menu_state=0,this.$menu.removeClass(this.menu_open_selector))}positionMenu(t){let e=this.getPosition(t),i=e.x,n=e.y,s=this.$menu.get(0).offsetWidth+4,o=l.innerWidth;o-i<s?this.$menu.css({left:o-s}):this.$menu.css({left:i}),this.$menu.css({top:n})}clickInsideElement(t,e){let i=s(t.target);if(i.is(e))return i;let n=i.closest(e);return!!n.length&&n}getPosition(t=l.event){let e,i;return t.pageX||t.pageY?(e=t.pageX,i=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+o.body.scrollLeft+o.documentElement.scrollLeft,i=t.clientY+o.body.scrollTop+o.documentElement.scrollTop),{x:e,y:i}}}}}]);