"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[2807],{2807:(e,d,i)=>{i.r(d),i.d(d,{default:()=>DevGrid});var r=i(4967),s=i(9755),t=i(6885);class DevGrid extends r.default{_init(){return this.$grid=s('[data-js="dev-grid"]'),!!this.$grid.length&&(t.__storage.get("dev-grid-open")&&this.$grid.addClass("dev-grid_open"),!0)}_bind(){let e=s("body");return this._bindTo(e,"keydown",(e=>{!e.ctrlKey||";"!==e.key&&"ж"!==e.key||(this.$grid.toggleClass("dev-grid_open"),this.$grid.is(".dev-grid_open")?t.__storage.set("dev-grid-open",!0):t.__storage.remove("dev-grid-open"))})),!0}}}}]);