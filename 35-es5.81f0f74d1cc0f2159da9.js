(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"2YsE":function(e,t,i){"use strict";i.r(t),i.d(t,"ion_checkbox",(function(){return c}));var o=i("Twl7"),n=(i("ttJE"),i("wSPg")),r=i("Jky2"),c=function(){function e(e){var t=this;Object(o.l)(this,e),this.inputId="ion-cb-"+a++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){t.setFocus(),t.checked=!t.checked,t.indeterminate=!1},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()},this.ionChange=Object(o.d)(this,"ionChange",7),this.ionFocus=Object(o.d)(this,"ionFocus",7),this.ionBlur=Object(o.d)(this,"ionBlur",7),this.ionStyle=Object(o.d)(this,"ionStyle",7)}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},e.prototype.render=function(){var e,t=this,i=this,c=i.indeterminate,a=i.disabled,s=i.checked,b=i.value,h=i.color,d=i.el,l=i.inputId+"-lbl",u=Object(o.e)(this),p=Object(n.f)(d);p&&(p.id=l),Object(n.a)(!0,d,this.name,s?b:"",a);var k=c?Object(o.i)("path",{d:"M6 12L18 12"}):Object(o.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===u&&(k=c?Object(o.i)("path",{d:"M2 12H22"}):Object(o.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(o.i)(o.a,{onClick:this.onClick,role:"checkbox","aria-disabled":a?"true":null,"aria-checked":""+s,"aria-labelledby":l,class:Object.assign(Object.assign({},Object(r.a)(h)),(e={},e[u]=!0,e["in-item"]=Object(r.c)("ion-item",d),e["checkbox-checked"]=s,e["checkbox-disabled"]=a,e["checkbox-indeterminate"]=c,e.interactive=!0,e))},Object(o.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},k),Object(o.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}}))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.23);--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}"},enumerable:!0,configurable:!0}),e}(),a=0}}]);