"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[4773],{4773:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Employees});var l=i(4967),s=i(1721),n=i(9755),a=i(6885);class Employees extends l.default{_init(){return this.$list=n('[data-js="employees-list"]'),!!this.$list.length}_bind(){return this._bindTo(n(a),"employee:created",(()=>{a.location.reload()})),this._bindTo(n(a),"employee:updated",((e,t)=>{let i=this._nullSafe((()=>t.response.notification.data.employee)),l=this._nullSafe((()=>t.$modal)),n=this.$list.find(`[data-js-id="${i.id}"]`).find("td");n.length&&n.text(i.fio),l&&l.length&&l.close(null,(()=>{let e=this._route("admin:affiliate:employee:edit",{employee:i.id});new s.default({route:e.uri})}))})),!0}}}}]);