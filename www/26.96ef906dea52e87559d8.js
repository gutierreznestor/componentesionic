(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{YchG:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=function(){function l(){this.usuario={email:"",password:""}}return l.prototype.ngOnInit=function(){},l.prototype.onSubmitTemplate=function(){console.log("Form submit"),console.log(this.usuario)},l}(),i=function(){return function(){}}(),t=u("pMnS"),b=u("Xqnl"),a=u("2MiI"),r=u("oBZk"),s=u("ZZ/e"),d=u("gIcY"),p=e.nb({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-header",[["titulo","Inputs y Forms"]],null,null,null,b.b,b.a)),e.ob(1,114688,null,0,a.a,[],{titulo:[0,"titulo"]},null),(l()(),e.pb(2,0,null,null,64,"ion-content",[],null,null,null,r.qb,r.n)),e.ob(3,49152,null,0,s.v,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,18,"ion-list",[],null,null,null,r.Jb,r.F)),e.ob(5,49152,null,0,s.P,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,4,"ion-list-header",[],null,null,null,r.Ib,r.G)),e.ob(7,49152,null,0,s.Q,[e.h,e.k],null,null),(l()(),e.pb(8,0,null,0,2,"ion-label",[],null,null,null,r.Hb,r.E)),e.ob(9,49152,null,0,s.O,[e.h,e.k],null,null),(l()(),e.Fb(10,0,["Nombre: ",""])),(l()(),e.pb(11,0,null,0,11,"ion-item",[],null,null,null,r.Gb,r.A)),e.ob(12,49152,null,0,s.I,[e.h,e.k],null,null),(l()(),e.pb(13,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.Hb,r.E)),e.ob(14,49152,null,0,s.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Nombre"])),(l()(),e.pb(16,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==e.yb(l,17)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.yb(l,17)._handleInputEvent(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(i.nombre=u)&&o),o},r.Cb,r.z)),e.ob(17,16384,null,0,s.Ob,[e.k],null,null),e.Cb(1024,null,d.d,function(l){return[l]},[s.Ob]),e.ob(19,671744,null,0,d.i,[[8,null],[8,null],[8,null],[6,d.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,d.e,null,[d.i]),e.ob(21,16384,null,0,d.f,[[4,d.e]],null,null),e.ob(22,49152,null,0,s.H,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(23,0,null,0,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,i=l.component;return"submit"===n&&(o=!1!==e.yb(l,25).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.yb(l,25).onReset()&&o),"ngSubmit"===n&&(o=!1!==i.onSubmitTemplate()&&o),o},null,null)),e.ob(24,16384,null,0,d.m,[],null,null),e.ob(25,4210688,[["formulario",4]],0,d.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Cb(2048,null,d.a,null,[d.h]),e.ob(27,16384,null,0,d.g,[[4,d.a]],null,null),(l()(),e.pb(28,0,null,null,35,"ion-list",[],null,null,null,r.Jb,r.F)),e.ob(29,49152,null,0,s.P,[e.h,e.k],null,null),(l()(),e.pb(30,0,null,0,4,"ion-list-header",[],null,null,null,r.Ib,r.G)),e.ob(31,49152,null,0,s.Q,[e.h,e.k],null,null),(l()(),e.pb(32,0,null,0,2,"ion-label",[],null,null,null,r.Hb,r.E)),e.ob(33,49152,null,0,s.O,[e.h,e.k],null,null),(l()(),e.Fb(34,0,["Formulatio template: Valido "," "])),(l()(),e.pb(35,0,null,0,14,"ion-item",[],null,null,null,r.Gb,r.A)),e.ob(36,49152,null,0,s.I,[e.h,e.k],null,null),(l()(),e.pb(37,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.Hb,r.E)),e.ob(38,49152,null,0,s.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Email"])),(l()(),e.pb(40,0,null,0,9,"ion-input",[["name","email"],["pattern","^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"],["required",""],["type","email"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==e.yb(l,44)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.yb(l,44)._handleInputEvent(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(i.usuario.email=u)&&o),o},r.Cb,r.z)),e.ob(41,16384,null,0,d.k,[],{required:[0,"required"]},null),e.ob(42,540672,null,0,d.j,[],{pattern:[0,"pattern"]},null),e.Cb(1024,null,d.c,function(l,n){return[l,n]},[d.k,d.j]),e.ob(44,16384,null,0,s.Ob,[e.k],null,null),e.Cb(1024,null,d.d,function(l){return[l]},[s.Ob]),e.ob(46,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,d.e,null,[d.i]),e.ob(48,16384,null,0,d.f,[[4,d.e]],null,null),e.ob(49,49152,null,0,s.H,[e.h,e.k],{name:[0,"name"],pattern:[1,"pattern"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.pb(50,0,null,0,13,"ion-item",[],null,null,null,r.Gb,r.A)),e.ob(51,49152,null,0,s.I,[e.h,e.k],null,null),(l()(),e.pb(52,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.Hb,r.E)),e.ob(53,49152,null,0,s.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Password"])),(l()(),e.pb(55,0,null,0,8,"ion-input",[["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==e.yb(l,58)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.yb(l,58)._handleInputEvent(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(i.usuario.password=u)&&o),o},r.Cb,r.z)),e.ob(56,16384,null,0,d.k,[],{required:[0,"required"]},null),e.Cb(1024,null,d.c,function(l){return[l]},[d.k]),e.ob(58,16384,null,0,s.Ob,[e.k],null,null),e.Cb(1024,null,d.d,function(l){return[l]},[s.Ob]),e.ob(60,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,d.e,null,[d.i]),e.ob(62,16384,null,0,d.f,[[4,d.e]],null,null),e.ob(63,49152,null,0,s.H,[e.h,e.k],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(64,0,null,null,2,"ion-button",[["expand","full"],["type","submit"]],null,null,null,r.gb,r.d)),e.ob(65,49152,null,0,s.l,[e.h,e.k],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Fb(-1,0,[" Enviar "]))],function(l,n){var u=n.component;l(n,1,0,"Inputs y Forms"),l(n,14,0,"floating"),l(n,19,0,u.nombre),l(n,22,0,"text"),l(n,38,0,"floating"),l(n,41,0,""),l(n,42,0,"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"),l(n,46,0,"email",u.usuario.email),l(n,49,0,"email","^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$","","email"),l(n,53,0,"floating"),l(n,56,0,""),l(n,60,0,"password",u.usuario.password),l(n,63,0,"password","","password"),l(n,65,0,e.yb(n,25).invalid,"full","submit")},function(l,n){l(n,10,0,n.component.nombre||"No hay nombre"),l(n,16,0,e.yb(n,21).ngClassUntouched,e.yb(n,21).ngClassTouched,e.yb(n,21).ngClassPristine,e.yb(n,21).ngClassDirty,e.yb(n,21).ngClassValid,e.yb(n,21).ngClassInvalid,e.yb(n,21).ngClassPending),l(n,23,0,e.yb(n,27).ngClassUntouched,e.yb(n,27).ngClassTouched,e.yb(n,27).ngClassPristine,e.yb(n,27).ngClassDirty,e.yb(n,27).ngClassValid,e.yb(n,27).ngClassInvalid,e.yb(n,27).ngClassPending),l(n,34,0,e.yb(n,25).valid),l(n,40,0,e.yb(n,41).required?"":null,e.yb(n,42).pattern?e.yb(n,42).pattern:null,e.yb(n,48).ngClassUntouched,e.yb(n,48).ngClassTouched,e.yb(n,48).ngClassPristine,e.yb(n,48).ngClassDirty,e.yb(n,48).ngClassValid,e.yb(n,48).ngClassInvalid,e.yb(n,48).ngClassPending),l(n,55,0,e.yb(n,56).required?"":null,e.yb(n,62).ngClassUntouched,e.yb(n,62).ngClassTouched,e.yb(n,62).ngClassPristine,e.yb(n,62).ngClassDirty,e.yb(n,62).ngClassValid,e.yb(n,62).ngClassInvalid,e.yb(n,62).ngClassPending)})}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-input",[],null,null,null,g,p)),e.ob(1,114688,null,0,o,[],null,null)],function(l,n){l(n,1,0)},null)}var c=e.lb("app-input",o,y,{},{},[]),m=u("Ip0R"),h=u("ZYCi"),C=u("j1ZV");u.d(n,"InputPageModuleNgFactory",function(){return f});var f=e.mb(i,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[t.a,c]],[3,e.j],e.x]),e.wb(4608,m.m,m.l,[e.u,[2,m.s]]),e.wb(4608,d.n,d.n,[]),e.wb(4608,s.c,s.c,[e.z,e.g]),e.wb(4608,s.Ib,s.Ib,[s.c,e.j,e.q]),e.wb(4608,s.Lb,s.Lb,[s.c,e.j,e.q]),e.wb(1073742336,m.c,m.c,[]),e.wb(1073742336,d.l,d.l,[]),e.wb(1073742336,d.b,d.b,[]),e.wb(1073742336,s.Eb,s.Eb,[]),e.wb(1073742336,h.o,h.o,[[2,h.u],[2,h.m]]),e.wb(1073742336,C.a,C.a,[]),e.wb(1073742336,i,i,[]),e.wb(1024,h.k,function(){return[[{path:"",component:o}]]},[])])})}}]);