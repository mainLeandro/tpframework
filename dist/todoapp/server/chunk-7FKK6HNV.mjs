import './polyfills.server.mjs';
import{Aa as I,Ba as V,Ca as R,Ea as A,Ha as S,I as h,N as C,O as x,T as l,U as p,W as y,X as s,Y as T,ca as v,da as m,ea as a,fa as c,ga as k,ha as b,ia as d,ja as f,ka as M,la as _,ma as w,ya as E,za as D}from"./chunk-TLHG7WES.mjs";var g=class{constructor(e,r){this.descricao=e,this.statusRealizada=r}};function F(i,e){if(i&1){let r=b();a(0,"div",6)(1,"button",7),d("click",function(){l(r);let t=f();return p(t.emEdicao=!0)}),_(2,"Editar"),c(),a(3,"button",8),d("click",function(){l(r);let t=f();return p(t.removeTarefa.emit())}),_(4,"Remover"),c()()}}function N(i,e){if(i&1){let r=b();a(0,"div"),k(1,"input",9,0),a(3,"div",6)(4,"button",7),d("click",function(){l(r);let t=f();return p(t.emEdicao=!1)}),_(5,"Cancelar"),c(),a(6,"button",10),d("click",function(){l(r);let t=M(2),n=f();return n.tarefa.descricao=t.value,n.emEdicao=!1,p(n.modificaTarefa.emit())}),_(7,"Salvar"),c()()()}if(i&2){let r=f();s(),m("value",r.tarefa.descricao)}}var L=(()=>{let e=class e{constructor(){this.emEdicao=!1,this.tarefa=new g("",!1),this.removeTarefa=new y,this.modificaTarefa=new y}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=C({type:e,selectors:[["app-item"]],inputs:{tarefa:"tarefa"},outputs:{removeTarefa:"removeTarefa",modificaTarefa:"modificaTarefa"},decls:6,vars:6,consts:[["editedItem",""],[1,"item"],["type","checkbox",3,"change","id","checked"],[3,"for"],["class","btn-wrapper",4,"ngIf"],[4,"ngIf"],[1,"btn-wrapper"],[1,"btn",3,"click"],[1,"btn","btn-warn",3,"click"],["placeholder",`escreva o novo nome da tarefa 
   aqui`,1,"sm-text-input",3,"value"],[1,"btn","btn-save",3,"click"]],template:function(t,n){t&1&&(a(0,"div",1)(1,"input",2),d("change",function(){return n.tarefa.statusRealizada=!n.tarefa.statusRealizada,n.modificaTarefa.emit()}),c(),a(2,"label",3),_(3),c(),v(4,F,5,0,"div",4)(5,N,8,1,"div",5),c()),t&2&&(s(),m("id",n.tarefa.descricao)("checked",n.tarefa.statusRealizada),s(),m("for",n.tarefa.descricao),s(),w(n.tarefa.descricao),s(),m("ngIf",!n.emEdicao),s(),m("ngIf",n.emEdicao))},dependencies:[D],styles:['.item[_ngcontent-%COMP%]{padding:.5rem 0 .75rem;text-align:left;font-size:1.2rem}.btn-wrapper[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:.5rem}.btn[_ngcontent-%COMP%]{flex-basis:49%}.btn-save[_ngcontent-%COMP%]{background-color:#000;color:#fff;border-color:#000}.btn-save[_ngcontent-%COMP%]:hover{background-color:#444242}.btn-save[_ngcontent-%COMP%]:focus{background-color:#fff;color:#000}.checkbox-wrapper[_ngcontent-%COMP%]{margin:.5rem 0}.btn-warn[_ngcontent-%COMP%]{background-color:#b90000;color:#fff;border-color:#9a0000}.btn-warn[_ngcontent-%COMP%]:hover{background-color:#9a0000}.btn-warn[_ngcontent-%COMP%]:active{background-color:#e30000;border-color:#000}.sm-text-input[_ngcontent-%COMP%]{width:100%;padding:.5rem;border:2px solid #555;display:block;box-sizing:border-box;font-size:1rem;margin:1rem 0}[type=checkbox][_ngcontent-%COMP%]:not(:checked), [type=checkbox][_ngcontent-%COMP%]:checked{position:absolute;left:-9999px}[type=checkbox][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%], [type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{position:relative;padding-left:1.95em;cursor:pointer}[type=checkbox][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]:before, [type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;width:1.25em;height:1.25em;border:2px solid #ccc;background:#fff}[type=checkbox][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]:after, [type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{content:"\\2713  ";position:absolute;top:.15em;left:.22em;font-size:1.3em;line-height:.8;color:#0d8dee;transition:all .2s;font-family:Lucida Sans Unicode,Arial Unicode MS,Arial}[type=checkbox][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]:after{opacity:0;transform:scale(0)}[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{opacity:1;transform:scale(1)}[type=checkbox][_ngcontent-%COMP%]:checked:focus + label[_ngcontent-%COMP%]:before, [type=checkbox][_ngcontent-%COMP%]:not(:checked):focus + label[_ngcontent-%COMP%]:before{border:2px dotted blue}']});let i=e;return i})();function H(i,e){if(i&1){let r=b();a(0,"li")(1,"app-item",5),d("removeTarefa",function(){let t=l(r).$implicit,n=f();return p(n.DELETE_tarefa(t))})("modificaTarefa",function(){let t=l(r).$implicit,n=f();return p(n.UPDATE_tarefa(t))}),c()()}if(i&2){let r=e.$implicit;s(),m("tarefa",r)}}var O=(()=>{let e=class e{constructor(o){this.http=o,this.title="TODOapp",this.arrayDeTarefas=[],this.apiURL="http://localhost:3000",this.READ_tarefas()}CREATE_tarefa(o){var t=new g(o,!1);this.http.post(`${this.apiURL}/api/post`,t).subscribe(n=>{console.log(n),this.READ_tarefas()})}READ_tarefas(){this.http.get(`${this.apiURL}/api/getAll`).subscribe(o=>this.arrayDeTarefas=o)}DELETE_tarefa(o){var t=this.arrayDeTarefas.indexOf(o),n=this.arrayDeTarefas[t]._id;this.http.delete(`${this.apiURL}/api/delete/${n}`).subscribe(u=>{console.log(u),this.READ_tarefas()})}UPDATE_tarefa(o){var t=this.arrayDeTarefas.indexOf(o),n=this.arrayDeTarefas[t]._id;this.http.patch(`${this.apiURL}/api/update/${n}`,o).subscribe(u=>{console.log(u),this.READ_tarefas()})}};e.\u0275fac=function(t){return new(t||e)(T(I))},e.\u0275cmp=C({type:e,selectors:[["app-root"]],decls:9,vars:1,consts:[["campoNovoItem",""],[1,"main"],[1,"lg-text-input"],[1,"btn-primary",3,"click"],[4,"ngFor","ngForOf"],[3,"removeTarefa","modificaTarefa","tarefa"]],template:function(t,n){if(t&1){let u=b();a(0,"div",1)(1,"h1"),_(2,"My Task - Leandro - 233813"),c(),k(3,"input",2,0),a(5,"button",3),d("click",function(){l(u);let U=M(4);return p(n.CREATE_tarefa(U.value))}),_(6," Adicionar Tarefa"),c(),a(7,"ul"),v(8,H,2,1,"li",4),c()()}t&2&&(s(8),m("ngForOf",n.arrayDeTarefas))},dependencies:[E,L],styles:["body[_ngcontent-%COMP%]{background-color:#f5f5f5;color:#4d4d4d}.main[_ngcontent-%COMP%]{max-width:500px;width:85%;margin:2rem auto;padding:1rem;text-align:center;box-shadow:0 2px 4px #0003,0 2.5rem 5rem #0000001a}@media screen and (min-width: 600px){.main[_ngcontent-%COMP%]{width:70%}}label[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;display:block;padding-bottom:1rem}.lg-text-input[_ngcontent-%COMP%]{width:100%;padding:1rem;border:2px solid #000;display:block;box-sizing:border-box;font-size:1rem}.btn-wrapper[_ngcontent-%COMP%]{margin-bottom:2rem}.btn-menu[_ngcontent-%COMP%]{flex-basis:32%}.active[_ngcontent-%COMP%]{color:green}ul[_ngcontent-%COMP%]{padding-inline-start:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}"]});let i=e;return i})();var z=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x({type:e,bootstrap:[O]}),e.\u0275inj=h({providers:[A()],imports:[R,V]});let i=e;return i})();var q=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x({type:e,bootstrap:[O]}),e.\u0275inj=h({imports:[z,S]});let i=e;return i})();export{q as a};
