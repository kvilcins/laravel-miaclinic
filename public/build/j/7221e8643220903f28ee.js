"use strict";(self.webpackChunksynergine=self.webpackChunksynergine||[]).push([[5962],{5962:(e,t,s)=>{s.r(t),s.d(t,{default:()=>SelectDate});var i=s(4967),a=s(4319),n=s.n(a),r=s(9755);class SelectDate extends i.default{_init(){if(this.$pickers=r('[data-js="pikaday"]'),!this.$pickers.length)return!1;this.pickers=[],this.is_range=this.$pickers.closest('[data-js-pikaday="range"]').length;return this.options=Object.assign({format:"DD.MM.YYYY",theme:"synergy-theme",yearRange:[2010,2025],firstDay:1,i18n:{previousMonth:"<",nextMonth:">",months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],weekdays:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],weekdaysShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]}},this.options),!0}_bind(){return this.$pickers.filter(":not(.pika-initialized)").each(((e,t)=>{let s=r(t),i=Object.assign({field:t},this.options);this.is_range&&0===e&&(i.onSelect=e=>{this._diffDays(e,this.pickers[1].getDate())<0&&this.pickers[1].setDate(e),this.pickers[1].setMinDate(e)});let a=new(n())(i);this.pickers.push(a),s.addClass("pika-initialized")})),!0}}}}]);