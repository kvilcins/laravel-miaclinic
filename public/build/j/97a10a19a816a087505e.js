"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[9718],{9718:(t,e,i)=>{i.r(e),i.d(e,{default:()=>Admins});var n=i(4967),a=i(1721),d=i(9755),s=i(6885);class Admins extends n.default{_init(){return this.$list=d('[data-js="admins-list"]'),!!this.$list.length}_bind(){return this._bindTo(d(s),"admin:created",(()=>{s.location.reload()})),this._bindTo(d(s),"admin:updated",((t,e)=>{let i=this._nullSafe((()=>e.response.notification.data.admin)),n=this._nullSafe((()=>e.response.notification.data.role)),d=this._nullSafe((()=>e.$modal)),s=this.$list.find(`[data-js-id="${i.id}"]`).find("td");s.length&&(s.eq(0).text(i.fio),s.eq(1).text(i.login),s.eq(2).text(n),s.eq(3).text(i.ban?"Да":"Нет")),d&&d.length&&d.close(null,(()=>{let t=this._route("admin:admin:edit",{admin:i.id});new a.default({route:t.uri})}))})),!0}}}}]);