(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[0],[,,,,function(e,t,a){e.exports={header:"Header_header__2_PwU",nav:"Header_nav__2ddzJ",logo:"Header_logo__FgUVn",login:"Header_login__2HJu_",nome:"Header_nome__3GcwR",wrapper:"Header_wrapper__csDFt",dropdownContainer:"Header_dropdownContainer__BTQ1j",dropdownTrigger:"Header_dropdownTrigger__343jg",dropDownUL:"Header_dropDownUL__3aoyQ"}},,,,function(e,t,a){e.exports={form:"LoginForm_form__15pRP",perdeu:"LoginForm_perdeu__nuZdb",cadastro:"LoginForm_cadastro__2wlnM",subtitle:"LoginForm_subtitle__PgSo9"}},function(e,t,a){e.exports={wrapper:"Input_wrapper__2Hudh",input:"Input_input__1L5nj",label:"Input_label__2EwO_",error:"Input_error__2D1fT"}},function(e,t,a){e.exports={login:"Login_login__1uZTK",forms:"Login_forms__2qpnL"}},,,,function(e,t,a){e.exports={button:"Button_button__2Hvbn"}},function(e,t,a){},,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(22),a(3)),u=a(1),i=a(4),s=a.n(i);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z",fill:"#333"}),d=r.a.createElement("circle",{cx:21,cy:3,r:3,fill:"#333"}),v=r.a.createElement("circle",{cx:7,cy:3,r:3,fill:"#333"}),E=function(e){var t=e.svgRef,a=e.title,n=p(e,["svgRef","title"]);return r.a.createElement("svg",m({width:28,height:22,viewBox:"0 0 28 22",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,f,d,v)},g=r.a.forwardRef((function(e,t){return r.a.createElement(E,m({svgRef:t},e))}));a.p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var w=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 6C8.10457 6 9 5.10457 9 4C9 2.89543 8.10457 2 7 2C5.89543 2 5 2.89543 5 4C5 5.10457 5.89543 6 7 6ZM7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8Z",fill:"#333"}),_=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 11C4.23858 11 2 13.2386 2 16C2 16.5523 1.55228 17 1 17C0.447715 17 0 16.5523 0 16C0 12.134 3.13401 9 7 9C10.866 9 14 12.134 14 16C14 16.5523 13.5523 17 13 17C12.4477 17 12 16.5523 12 16C12 13.2386 9.76142 11 7 11Z",fill:"#333"}),O=function(e){var t=e.svgRef,a=e.title,n=b(e,["svgRef","title"]);return r.a.createElement("svg",h({width:14,height:17,viewBox:"0 0 14 17",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,w,_)},y=r.a.forwardRef((function(e,t){return r.a.createElement(O,h({svgRef:t},e))})),j=(a.p,a(2)),x=a.n(j),C=a(6),k=a(7),N="https://dogsapi.origamid.dev/json";function S(e){return{url:N+"/jwt-auth/v1/token",options:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}}}function L(e){return{url:N+"/api/user",options:{method:"GET",headers:{Authorization:"Bearer "+e}}}}function R(e){return{url:N+"/api/user",options:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}}}function P(e){return{url:N+"/jwt-auth/v1/token/validate",options:{method:"POST",headers:{Authorization:"Bearer "+e}}}}var H=r.a.createContext(),T=function(e){var t=e.children,a=r.a.useState(null),n=Object(k.a)(a,2),l=n[0],o=n[1],c=r.a.useState(null),i=Object(k.a)(c,2),s=i[0],m=i[1],p=r.a.useState(!1),f=Object(k.a)(p,2),d=f[0],v=f[1],E=r.a.useState(null),g=Object(k.a)(E,2),h=g[0],b=g[1],w=r.a.useState(!1),_=Object(k.a)(w,2),O=_[0],y=_[1],j=Object(u.h)(),N=r.a.useCallback(Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(null),b(null),v(!1),m(!1),y(!1),window.localStorage.removeItem("token"),j("/login");case 7:case"end":return e.stop()}}),e)}))),[j]);function R(e){return T.apply(this,arguments)}function T(){return(T=Object(C.a)(x.a.mark((function e(t){var a,n,r,l,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L(t),n=a.url,r=a.options,e.next=3,fetch(n,r);case 3:return l=e.sent,e.next=6,l.json();case 6:c=e.sent,console.log(c),o(c),m(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(C.a)(x.a.mark((function e(t,a){var n,r,l,o,c,u;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(null),y(!1),v(!0),n=S({username:t,password:a}),r=n.url,l=n.options,e.next=7,fetch(r,l);case 7:if((o=e.sent).ok){e.next=10;break}throw new Error("Error: ".concat(o.statusText));case 10:return e.next=12,o.json();case 12:return c=e.sent,u=c.token,console.log({token:u}),window.localStorage.setItem("token",u),e.next=18,R(u);case 18:j("/conta"),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),b(e.t0.message),m(!1);case 25:return e.prev=25,v(!1),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[0,21,25,28]])})))).apply(this,arguments)}return r.a.useEffect((function(){function e(){return(e=Object(C.a)(x.a.mark((function e(){var t,a,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("token"))){e.next=22;break}return e.prev=2,b(null),y(!1),v(!0),a=P(t),n=a.url,r=a.options,e.next=9,fetch(n,r);case 9:if(e.sent.ok){e.next=12;break}throw new Error("Token inv\xe1lido.");case 12:return e.next=14,R(t);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),N();case 19:return e.prev=19,v(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[2,16,19,22]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[N]),r.a.createElement(H.Provider,{value:{userLogin:function(e,t){return B.apply(this,arguments)},data:l,userLogout:N,error:h,loading:d,login:s,active:O,setActive:y}},t)},B=a(16),I=a(14),A=a.n(I),D=function(e){var t=e.children,a=Object(B.a)(e,["children"]);return r.a.createElement("button",Object.assign({},a,{className:A.a.button}),t)},F=function(){var e=r.a.useContext(H),t=e.data,a=e.userLogout,n=e.active,l=e.setActive,o=r.a.useRef(null);return r.a.useEffect((function(){var e=function(e){null===o.current||o.current.contains(e.target)||l(!n)};return n&&window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[n,l]),r.a.createElement("header",{className:s.a.header},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:s.a.nav},r.a.createElement(c.b,{className:s.a.logo,to:"/","aria-label":"Dogs - Home"},r.a.createElement(g,null)),t?r.a.createElement("div",{className:s.a.wrapper},r.a.createElement(c.b,{className:s.a.login,to:"/conta"},r.a.createElement("p",{className:s.a.nome},t.nome)),r.a.createElement("div",{className:s.a.dropdownContainer},r.a.createElement("button",{onClick:function(e){l(!n)},className:s.a.dropdownTrigger},r.a.createElement(y,null)),n&&r.a.createElement("nav",{ref:o,className:"menu ".concat(n?"active":"inactive")},r.a.createElement("ul",{className:s.a.dropDownUL},r.a.createElement("li",{onClick:a},r.a.createElement(c.b,{onClick:a,to:""},"Sair")))))):r.a.createElement(c.b,{className:s.a.login,to:"/login"},r.a.createElement(D,null,"Login")))))},U=a(15),Z=a.n(U),z=function(){return r.a.createElement("div",{className:Z.a.footer},"Footer")},J=function(){return r.a.createElement("div",null,"Home")},M=a(9),G=a.n(M),Q=function(e){var t=e.label,a=e.type,n=e.name,l=e.value,o=e.onChange,c=e.error,u=e.onBlur;return r.a.createElement("div",{className:G.a.wrapper},r.a.createElement("label",{htmlFor:n,className:G.a.label},t),r.a.createElement("input",{id:n,name:n,className:G.a.input,type:a,value:l,onChange:o,onBlur:u,autoComplete:"off"}),c&&r.a.createElement("p",{className:G.a.error},c))},V={email:{regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Preencha um email v\xe1lido"}},q=function(e){var t=r.a.useState(""),a=Object(k.a)(t,2),n=a[0],l=a[1],o=r.a.useState(null),c=Object(k.a)(o,2),u=c[0],i=c[1];function s(t){return!1===e||(0===t.length?(i("Preencha um valor."),!1):V[e]&&!V[e].regex.test(t)?(i(V[e].message),!1):(i(null),!0))}return{value:n,setValue:l,onChange:function(e){var t=e.target;u&&s(t.value),l(t.value)},error:u,validate:function(){return s(n)},onBlur:function(){return s(n)}}},K=function(e){var t=e.error;return t?r.a.createElement("p",{style:{color:"#f31",margin:"1rem 0"}},t):null},$=a(8),W=a.n($),X=function(){var e=q(),t=q(),a=r.a.useContext(H),n=a.userLogin,l=a.error,o=a.loading;function u(){return(u=Object(C.a)(x.a.mark((function a(r){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r.preventDefault(),e.validate()&&t.validate()&&n(e.value,t.value);case 2:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement("section",{className:"animeLeft"},r.a.createElement("h1",{className:"title"},"Login"),r.a.createElement("form",{className:W.a.form,onSubmit:function(e){return u.apply(this,arguments)}},r.a.createElement(Q,Object.assign({label:"Usu\xe1rio",type:"text",name:"username"},e)),r.a.createElement(Q,Object.assign({label:"Senha",type:"password",name:"password"},t)),o?r.a.createElement(D,{disabled:!0},"Carregando"):r.a.createElement(D,null,"Entrar"),r.a.createElement(K,{error:l}),l&&r.a.createElement("p",null,l)),r.a.createElement(c.b,{className:W.a.perdeu,to:"/login/perdeu"},"Perdeu a senha?"),r.a.createElement("div",{className:W.a.cadastro},r.a.createElement("h2",{className:W.a.subtitle},"Cadastre-se"),r.a.createElement("p",null,"Ainda n\xe3o possui conta? Cadastre-se"),r.a.createElement(c.b,{className:W.a.buttonCriar,to:"/login/criar"},r.a.createElement(D,null,"Cadastro"))))},Y=function(){var e=q(),t=q("email"),a=q(),n=r.a.useContext(H).userLogin;function l(){return(l=Object(C.a)(x.a.mark((function r(l){var o,c,u,i;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l.preventDefault(),o=R({username:e.value,email:t.value,password:a.value}),c=o.url,u=o.options,r.next=4,fetch(c,u);case 4:(i=r.sent).ok&&n(e.value,a.value),console.log(i);case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return r.a.createElement("section",{className:"animeLeft"},r.a.createElement("h1",{className:"title"},"Cadastre-se"),r.a.createElement("form",{onSubmit:function(e){return l.apply(this,arguments)}},r.a.createElement(Q,Object.assign({label:"Usu\xe1rio",type:"text",name:"username"},e)),r.a.createElement(Q,Object.assign({label:"E-mail",type:"email",name:"email"},t)),r.a.createElement(Q,Object.assign({label:"Senha",type:"password",name:"password"},a)),r.a.createElement(D,null,"Cadastrar")))},ee=function(){return r.a.createElement("div",null)},te=function(){return r.a.createElement("div",null)},ae=a(10),ne=a.n(ae),re=function(){return!0===r.a.useContext(H).login?r.a.createElement(u.a,{to:"/conta"}):r.a.createElement("section",{className:ne.a.login},r.a.createElement("div",{className:ne.a.forms},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",element:r.a.createElement(X,null)}),r.a.createElement(u.b,{path:"criar",element:r.a.createElement(Y,null)}),r.a.createElement(u.b,{path:"perdeu",element:r.a.createElement(ee,null)}),r.a.createElement(u.b,{path:"resetar",element:r.a.createElement(te,null)}))))};var le=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(T,null,r.a.createElement(F,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",element:r.a.createElement(J,null)}),r.a.createElement(u.b,{path:"/login/*",element:r.a.createElement(re,null)})),r.a.createElement(z,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.eaa6a927.chunk.js.map