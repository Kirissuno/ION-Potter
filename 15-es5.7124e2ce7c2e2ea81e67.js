(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{urzM:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),o=u("pMnS"),b=u("oBZk"),r=u("ZZ/e"),c=u("ZYCi"),e=u("Ip0R"),s=u("oVht"),a=function(){function l(l,n){this.libroService=l,this.router=n}return l.prototype.ngOnInit=function(){var l=this;this.libroService.libros.subscribe((function(n){l.librosCargados=n}))},l.prototype.onEditLibro=function(l,n){this.router.navigate(["/","libros","editar",l]),n.close()},l}(),p=t.rb({encapsulation:0,styles:[[""]],data:{}});function k(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,20,"ion-item-sliding",[],null,null,null,b.J,b.o)),t.sb(1,49152,[["slidingItem",4]],0,r.K,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,12,"ion-item",[["detail",""]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Eb(l,4).onClick()&&i),"click"===n&&(i=!1!==t.Eb(l,6).onClick(u)&&i),i}),b.K,b.l)),t.sb(3,49152,null,0,r.F,[t.h,t.k,t.z],{detail:[0,"detail"]},null),t.sb(4,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Fb(5,4),t.sb(6,737280,null,0,r.Jb,[e.g,r.Fb,t.k,c.m,[2,c.n]],null,null),(l()(),t.tb(7,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,b.P,b.t)),t.sb(8,49152,null,0,r.xb,[t.h,t.k,t.z],null,null),(l()(),t.tb(9,0,null,0,1,"ion-img",[],null,null,null,b.F,b.j)),t.sb(10,49152,null,0,r.B,[t.h,t.k,t.z],{src:[0,"src"]},null),(l()(),t.tb(11,0,null,0,3,"ion-label",[],null,null,null,b.L,b.p)),t.sb(12,49152,null,0,r.L,[t.h,t.k,t.z],null,null),(l()(),t.tb(13,0,null,0,0,"h4",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.tb(14,0,null,0,0,"p",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.tb(15,0,null,0,5,"ion-item-options",[],null,null,null,b.I,b.n)),t.sb(16,49152,null,0,r.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(17,0,null,0,3,"ion-item-option",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.onEditLibro(l.context.$implicit.isbn,t.Eb(l,1))&&i),i}),b.H,b.m)),t.sb(18,49152,null,0,r.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(19,0,null,0,1,"ion-icon",[["name","create"],["slot","icon-only"]],null,null,null,b.E,b.i)),t.sb(20,49152,null,0,r.A,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"");var u=l(n,5,0,"/","libros","detalles",n.context.$implicit.isbn);l(n,4,0,u),l(n,6,0),l(n,10,0,n.context.$implicit.portada),l(n,20,0,"create")}),(function(l,n){l(n,13,0,n.context.$implicit.titulo),l(n,14,0,n.context.$implicit.cantidad)}))}function h(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,6,"ion-header",[],null,null,null,b.D,b.h)),t.sb(1,49152,null,0,r.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,4,"ion-toolbar",[],null,null,null,b.R,b.v)),t.sb(3,49152,null,0,r.Ab,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,2,"ion-title",[],null,null,null,b.Q,b.u)),t.sb(5,49152,null,0,r.yb,[t.h,t.k,t.z],null,null),(l()(),t.Jb(-1,0,["Listado de Libros"])),(l()(),t.tb(7,0,null,null,11,"ion-content",[],null,null,null,b.B,b.f)),t.sb(8,49152,null,0,r.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(9,0,null,0,9,"ion-grid",[],null,null,null,b.C,b.g)),t.sb(10,49152,null,0,r.y,[t.h,t.k,t.z],null,null),(l()(),t.tb(11,0,null,0,7,"ion-row",[],null,null,null,b.N,b.r)),t.sb(12,49152,null,0,r.hb,[t.h,t.k,t.z],null,null),(l()(),t.tb(13,0,null,0,5,"ion-col",[],null,null,null,b.A,b.e)),t.sb(14,49152,null,0,r.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(15,0,null,0,3,"ion-list",[],null,null,null,b.M,b.q)),t.sb(16,49152,null,0,r.M,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(18,278528,null,0,e.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,18,0,n.component.librosCargados)}),null)}function f(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,1,"app-libros",[],null,null,null,h,p)),t.sb(1,114688,null,0,a,[s.a,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var d=t.pb("app-libros",a,f,{},{},[]),m=u("gIcY"),C=function(){return function(){}}();u.d(n,"LibrosPageModuleNgFactory",(function(){return z}));var z=t.qb(i,[],(function(l){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[o.a,d]],[3,t.j],t.x]),t.Cb(4608,e.j,e.i,[t.u,[2,e.p]]),t.Cb(4608,m.o,m.o,[]),t.Cb(4608,r.a,r.a,[t.z,t.g]),t.Cb(4608,r.Eb,r.Eb,[r.a,t.j,t.q]),t.Cb(4608,r.Ib,r.Ib,[r.a,t.j,t.q]),t.Cb(1073742336,e.b,e.b,[]),t.Cb(1073742336,m.n,m.n,[]),t.Cb(1073742336,m.g,m.g,[]),t.Cb(1073742336,r.Cb,r.Cb,[]),t.Cb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Cb(1073742336,C,C,[]),t.Cb(1073742336,i,i,[]),t.Cb(1024,c.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);