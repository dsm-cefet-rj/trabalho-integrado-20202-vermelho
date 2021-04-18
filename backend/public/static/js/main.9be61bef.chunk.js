(this["webpackJsonphotelaria-app"]=this["webpackJsonphotelaria-app"]||[]).push([[0],{114:function(e,t,r){},115:function(e,t,r){},120:function(e,t,r){},224:function(e,t,r){},226:function(e,t,r){},227:function(e,t,r){},228:function(e,t,r){},229:function(e,t,r){},230:function(e,t,r){},231:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=r(7),i=r.n(n),s=(r(114),r(13)),o=r(260),d=r(257),l=r(259),j=(r(115),r(1));function u(){var e=a.a.useState(null),t=Object(s.a)(e,2),r=t[0],c=t[1],n=function(){c(null)};return Object(j.jsxs)("div",{className:"Menu",children:[Object(j.jsx)(o.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:Object(j.jsx)("div",{className:"menu-texto",children:"Menu"})}),Object(j.jsx)("div",{id:"titulo",children:"Hotelaria 5 Estrelas!"}),Object(j.jsx)("div",{id:"imagem",children:Object(j.jsx)("img",{src:"/images/hotelaria-slogan.jpg",className:"img-menu"})}),Object(j.jsxs)(d.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:n,children:[Object(j.jsx)(l.a,{onClick:n,children:Object(j.jsx)("a",{href:"/registrar",children:"Registrar"})}),Object(j.jsx)(l.a,{onClick:n,children:Object(j.jsx)("a",{href:"/cardapio",children:"Card\xe1pio"})}),Object(j.jsx)(l.a,{onClick:n,children:Object(j.jsx)("a",{href:"/cria-cardapio",children:"Criar Card\xe1pio"})}),Object(j.jsx)(l.a,{onClick:n,children:Object(j.jsx)("a",{href:"/realiza-pedido",children:"Fazer Pedido"})}),Object(j.jsx)(l.a,{onClick:n,children:Object(j.jsx)("a",{href:"/cria-refeicao",children:"Criar Refei\xe7\xe3o"})}),Object(j.jsxs)(l.a,{onClick:n,children:[" ",Object(j.jsx)("a",{href:"/pedidos-recebidos",children:" Pedidos "})]})]})]})}var b=r(39),p=r(12),O=(r(120),r(41)),m=r(60),x=r(22),h=r(62);x.d(h.ptForm);var f=x.b().shape({firstName:x.e().required(),lastName:x.e().required(),email:x.e().email("Insira um email v\xe1lido").required(),age:x.a("Idade precisa ser um n\xfamero").positive("Idade precisa ser n\xfamero positivo").integer().required(),password:x.e().min(4).max(15).required(),confirmPassword:x.e().oneOf([x.c("password"),null])});var v=function(){var e,t,r,c,a,n=Object(O.b)({resolver:Object(m.a)(f)}),i=n.register,s=n.handleSubmit,o=n.errors;return Object(j.jsxs)("div",{className:"Form",children:[Object(j.jsx)("div",{className:"title",children:"Registrar"}),Object(j.jsx)("div",{className:"inputs",children:Object(j.jsxs)("form",{onSubmit:s((function(e){console.log(e)})),id:"form-registrar",children:[Object(j.jsx)("label",{htmlFor:"",children:"Nome:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"firstName",ref:i}),Object(j.jsxs)("p",{children:[" ",null===(e=o.firstName)||void 0===e?void 0:e.message," "]}),Object(j.jsx)("label",{htmlFor:"",children:"Sobrenome:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"lastName",ref:i}),Object(j.jsxs)("p",{children:[" ",null===(t=o.lastName)||void 0===t?void 0:t.message," "]}),Object(j.jsx)("label",{htmlFor:"",children:"Email:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"email",ref:i}),Object(j.jsxs)("p",{children:[" ",null===(r=o.email)||void 0===r?void 0:r.message," "]}),Object(j.jsx)("label",{htmlFor:"",children:"Idade:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"age",ref:i}),Object(j.jsxs)("p",{children:[" ",null===(c=o.age)||void 0===c?void 0:c.message," "]}),Object(j.jsx)("label",{htmlFor:"",children:"Senha:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"password",ref:i}),Object(j.jsxs)("p",{children:[" ",null===(a=o.password)||void 0===a?void 0:a.message," "]}),Object(j.jsx)("label",{htmlFor:"",children:"Confirme a Senha:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"password",name:"confirmPassword",ref:i}),Object(j.jsxs)("p",{children:[" ",o.confirmPassword&&"As senhas precisam ser iguais"," "]}),Object(j.jsx)("input",{type:"submit",id:"submit"})]})})]})},g=r(10),N=r(3),y=r.n(N),C=r(9),w=r(16),k=r(106),S=r(14);function E(e){return P.apply(this,arguments)}function P(){return(P=Object(C.a)(y.a.mark((function e(t){var r,c,a,n,i,s,o,d=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d.length>1&&void 0!==d[1]?d[1]:{},c=r.body,a=Object(k.a)(r,["body"]),n={"Content-Type":"application/json"},i=Object(S.a)(Object(S.a)({method:c?"POST":"GET"},a),{},{headers:Object(S.a)(Object(S.a)({},n),a.headers)}),c&&(i.body=JSON.stringify(c)),e.prev=4,e.next=7,window.fetch(t,i);case 7:return o=e.sent,e.next=10,o.json();case 10:if(s=e.sent,!o.ok){e.next=13;break}return e.abrupt("return",s);case 13:throw new Error(o.statusText);case 16:return e.prev=16,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:s));case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}var I,T=function(){var e=Object(C.a)(y.a.mark((function e(t){var r,c=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},e.abrupt("return",E(t,Object(S.a)(Object(S.a)({},r),{},{method:"GET"})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(C.a)(y.a.mark((function e(t,r){var c,a=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>2&&void 0!==a[2]?a[2]:{},e.abrupt("return",E(t,Object(S.a)(Object(S.a)({body:r},c),{},{method:"POST"})));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(C.a)(y.a.mark((function e(t,r){var c,a=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>2&&void 0!==a[2]?a[2]:{},e.abrupt("return",E(t,Object(S.a)(Object(S.a)({body:r},c),{},{method:"PUT"})));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),z=function(){var e=Object(C.a)(y.a.mark((function e(t){var r,c=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},e.abrupt("return",E(t,Object(S.a)(Object(S.a)({},r),{},{method:"DELETE"})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R="http://localhost:3004",G="http://localhost:3005",A=Object(w.c)(),L=A.getInitialState({status:"not_loaded",error:null}),B=Object(w.b)("cardapios/fetchcardapios",Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("".concat(G,"/cardapiosEx"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),M=Object(w.b)("cardapiosrecebidos/deletecardapioServer",function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z("".concat(G,"/cardapiosEx/").concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$=Object(w.b)("cardapiosrecebidos/addCardapioServer",function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("".concat(G,"/cardapiosEx"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(w.b)("cardapiosrecebidos/updateCardapioServer",function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("".concat(G,"/cardapiosEx/").concat(t.id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Q=Object(w.d)({name:"cardapio",initialState:L,extraReducers:(I={},Object(g.a)(I,B.pending,(function(e,t){e.status="loading"})),Object(g.a)(I,B.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),Object(g.a)(I,B.fulfilled,(function(e,t){e.status="loaded",A.setAll(e,t.payload)})),Object(g.a)(I,M.fulfilled,(function(e,t){e.status="deleted",A.removeOne(e,t.payload)})),Object(g.a)(I,$.fulfilled,(function(e,t){e.status="saved",A.addOne(e,t.payload)})),Object(g.a)(I,J.fulfilled,(function(e,t){e.status="saved",A.upsertOne(e,t.payload)})),I)}).reducer,Z=A.getSelectors((function(e){return e.cardapio})),_=Z.selectAll,D=(Z.selectById,Z.selectIds,r(19)),H=(r(224),function(e){var t=Object(p.f)(),r=Object(D.c)(_),a=Object(D.c)((function(e){return e.cardapio.status})),n=Object(D.c)((function(e){return e.cardapio.error})),i=Object(D.b)();Object(c.useEffect)((function(){"not_loaded"!==a&&"saved"!==a&&"deleted"!==a||i(B())}),[a,i]);var o=Object(c.useState)(0),d=Object(s.a)(o,2),l=d[0],u=d[1],b=r.map((function(e){if(e.tipo==l)return Object(j.jsxs)("div",{className:"cardapio-div",children:[Object(j.jsxs)("div",{className:"cardapio-div2",children:[Object(j.jsx)("p",{className:"cardapio-elemento",children:e.nome}),Object(j.jsx)("input",{className:"checkbox",type:"checkbox"})]}),"cardapio.png"!=e.img?Object(j.jsx)("img",{id:"cardapio-img",src:"/images/".concat(e.img),alt:""}):Object(j.jsx)("img",{id:"cardapio-img-improvisado",src:"/images/cardapio.png",alt:""}),Object(j.jsx)("p",{className:"cardapio-descricao",children:e.descricao}),Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:e.refeicoes.map((function(e){return Object(j.jsx)("li",{children:e})}))})}),Object(j.jsx)("p",{className:"cardapio-elemento",id:"preco",children:e.preco})]})}));return Object(j.jsxs)("div",{id:"cardapio",children:[Object(j.jsx)("div",{className:"cardapio-titulo",children:Object(j.jsx)("h3",{children:"Card\xe1pio "})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{action:"",children:Object(j.jsx)("div",{className:"seletor",children:Object(j.jsxs)("select",{className:"opcoes",onChange:function(e){return u(e.target.value)},children:[Object(j.jsx)("option",{value:0,selected:!0,children:"Caf\xe9 da Manh\xe3"}),Object(j.jsx)("option",{value:1,children:"Almo\xe7o"}),Object(j.jsx)("option",{value:2,children:"Lanche da Tarde"}),Object(j.jsx)("option",{value:3,children:"Janta"}),Object(j.jsx)("option",{value:4,children:"Sobremesa"}),Object(j.jsx)("option",{value:5,children:"Conveni\xeancia"})]})})}),Object(j.jsx)("div",{className:"cardapios",children:Object(j.jsx)("h2",{children:function(){var e="";return"loaded"===a?b:("loading"===a?e=Object(j.jsxs)("div",{className:"renderiza-aviso",id:"loading",children:[Object(j.jsx)("img",{id:"loading-img",src:"/images/cardapio2.png"}),Object(j.jsx)("div",{className:"loading-div",children:"Carregando..."})]}):"failed"===a&&(e=Object(j.jsxs)("div",{className:"renderiza-aviso",id:"error",children:[Object(j.jsxs)("div",{className:"error-div",children:[" Error: ",n]})," "]})),e)}()})}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"botoes-cardapio",children:[Object(j.jsx)("button",{type:"button",onClick:function(){return t.push("/realiza-pedido")},className:"btn btn-primary",id:"irpedido",children:Object(j.jsx)("div",{className:"botao",children:"Ir para Pedido"})}),Object(j.jsx)("button",{type:"button",className:"btn btn-danger",id:"limpar",children:Object(j.jsx)("div",{className:"botao",children:"Limpar"})})]})]})});r(226);x.d(h.ptForm);var U=x.b().shape({nome:x.e().required(),tipo:x.e().required(),descricao:x.e().max(50),preco:x.a("Precisa ser um n\ufffdmero").positive("Precisa ser n\ufffdmero positivo").required()});function V(e){var t,r,a,n,i=Object(p.f)(),o=Object(c.useState)(""),d=Object(s.a)(o,2),l=(d[0],d[1]),u=Object(c.useState)(""),b=Object(s.a)(u,2),x=(b[0],b[1]),h=Object(c.useState)(""),f=Object(s.a)(h,2),v=f[0],g=f[1],N=Object(c.useState)("Escreva Aqui!"),y=Object(s.a)(N,2),C=(y[0],y[1]),w=Object(c.useState)(0),k=Object(s.a)(w,2),S=(k[0],k[1]),E=Object(O.b)({resolver:Object(m.a)(U)}),P=E.register,I=E.handleSubmit,T=E.errors;return Object(j.jsxs)("div",{id:"cria-cardapio",children:[Object(j.jsx)("div",{className:"cria-cardapio-titulo",children:Object(j.jsx)("h3",{children:"Criar Card\xe1pio"})}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{className:"formularios",onSubmit:I((function(e){console.log(e)})),children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"formGroupExampleInput",children:"Nome: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"formGroupExampleInput",name:"nome",placeholder:"",ref:P}),Object(j.jsxs)("p",{children:[" ",null===(t=T.nome)||void 0===t?void 0:t.message," "]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"formGroupExampleInput2",children:"Tipo: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",name:"tipo",placeholder:"",ref:P}),Object(j.jsxs)("p",{children:[" ",null===(r=T.tipo)||void 0===r?void 0:r.message," "]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"formGroupExampleInput2",children:"Refeicao: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",onChange:function(e){return g(e.target.value)},value:v,placeholder:""})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"exampleFormControlTextarea1",children:"Descricao:"}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"form-control-desc",id:"exampleFormControlTextarea1",rows:"3",placeholder:"",ref:P}),Object(j.jsxs)("p",{children:[" ",null===(a=T.descricao)||void 0===a?void 0:a.message," "]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group col-md-2",children:[Object(j.jsx)("label",{for:"inputZip",children:"Valor: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"number",className:"form-control-2",id:"inputZip",placeholder:"",ref:P}),Object(j.jsxs)("p",{children:[" ",null===(n=T.preco)||void 0===n?void 0:n.message," "]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"botoes",children:[Object(j.jsx)("button",{type:"button",className:"btn",id:"criar",onClick:function(){return i.push("/cardapio")},children:Object(j.jsx)("div",{className:"botao",children:"Criar"})}),Object(j.jsx)("button",{type:"button",className:"btn",id:"limpar",onClick:function(){return l(""),x(""),g(""),C("Escreva Aqui!"),void S(0)},children:Object(j.jsx)("div",{className:"botao",children:"Limpar"})})]})]})]})}var K=Object(w.d)({name:"refeicao",initialState:{nome:"",tipo:""},reducers:{alteraNome:function(e,t){return Object(S.a)(Object(S.a)({},e),{},{nome:t.payload})},alteraTipo:function(e,t){return Object(S.a)(Object(S.a)({},e),{},{tipo:t.payload})}}}),W=K.actions,X=W.alteraNome,Y=W.alteraTipo,ee=K.reducer;r(227);function te(e){var t=Object(p.f)(),r=Object(D.c)((function(e){return e.refeicao})),c=r.nome,a=r.tipo,n=Object(D.b)();return Object(j.jsxs)("div",{id:"cria-refeicao",children:[Object(j.jsx)("div",{className:"cria-refeicao-titulo",children:Object(j.jsx)("h3",{children:"Criar Refei\xe7\xe3o"})}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"formGroupExampleInput",className:"label-title",children:"Nome: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"",onChange:function(e){return n(X(e.target.value))},value:c})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"formGroupExampleInput2",className:"label-title",children:"Tipo: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"",onChange:function(e){return n(Y(e.target.value))},value:a})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"botoes",children:[Object(j.jsx)("button",{type:"button",onClick:function(){return t.push("/cardapio")},className:"btn btn-primary",id:"cria",children:Object(j.jsx)("div",{className:"botao",children:"Cria"})}),Object(j.jsx)("button",{type:"button",onClick:function(){return t.push("/cardapio")},className:"btn btn-danger",id:"cancela",children:Object(j.jsx)("div",{className:"botao",children:"Cancela"})})]})]})]})}r(228);var re,ce=function(e){var t=e.pedidos.map((function(e){return Object(j.jsx)("li",{children:e})}));return Object(j.jsxs)("div",{className:"pedido",children:[Object(j.jsxs)("div",{className:"cabecalho",children:[Object(j.jsxs)("div",{children:["#",e.numero]}),Object(j.jsxs)("h1",{children:["Quarto: ",e.quarto]})]}),Object(j.jsx)("div",{className:"detalhes",children:Object(j.jsx)("ul",{className:"detalhes-ul",children:t})}),Object(j.jsxs)("div",{className:"total",children:["Total: R$ ",e.total]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"botoes",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:e.lidaPronto,id:"pronto",children:Object(j.jsx)("div",{className:"botao",children:"Pronto!"})}),Object(j.jsx)("button",{type:"button",className:"btn btn-secondary",id:"preparando",onClick:function(){alert("Cliente avisado")},children:Object(j.jsx)("div",{className:"botao",children:"Preparando..."})})]})]})},ae=Object(w.c)(),ne=ae.getInitialState({status:"not_loaded",error:null}),ie=Object(w.b)("pedidosrecebidos/fetchPedidos",Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("".concat(R,"/pedidosEx"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),se=Object(w.b)("pedidosrecebidos/deletePedidoServer",function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z("".concat(R,"/pedidosEx/").concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),oe=Object(w.b)("pedidosrecebidos/addPedidoServer",function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("".concat(R,"/pedidosEx"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),de=Object(w.b)("pedidosrecebidos/updatePedidoServer",function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("".concat(R,"/pedidosEx/").concat(t.id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),le=Object(w.d)({name:"pedidosrecebidos",initialState:ne,extraReducers:(re={},Object(g.a)(re,ie.pending,(function(e,t){e.status="loading"})),Object(g.a)(re,ie.fulfilled,(function(e,t){e.status="loaded",ae.setAll(e,t.payload)})),Object(g.a)(re,ie.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),Object(g.a)(re,se.fulfilled,(function(e,t){e.status="deleted",ae.removeOne(e,t.payload)})),Object(g.a)(re,oe.fulfilled,(function(e,t){e.status="saved",ae.addOne(e,t.payload)})),Object(g.a)(re,de.fulfilled,(function(e,t){e.status="saved",ae.upsertOne(e,t.payload)})),re)}).reducer,je=ae.getSelectors((function(e){return e.pedidosrecebidos})),ue=je.selectAll;je.selectById,je.selectIds,r(229);function be(e){var t=Object(D.c)(ue),r=Object(D.c)((function(e){return e.pedidosrecebidos.status})),a=Object(D.c)((function(e){return e.pedidosrecebidos.error})),n=Object(D.b)();Object(c.useEffect)((function(){"not_loaded"===r||"saved"===r||"deleted"===r?n(ie()):"failed"===r&&setTimeout((function(){return n(ie())}),5e3)}),[r,n]);var i=function(e){if(!e.pronto)return Object(j.jsx)(ce,{numero:e.numero,quarto:e.quarto,pedidos:e.pedidos,total:e.total,pronto:e.pronto,lidaPronto:function(){var t=e.id,r=e.numero,c=e.quarto,a=e.pedidos,i=e.total,s=e.pronto;n(de({id:t,numero:r,quarto:c,pedidos:a,total:i,pronto:!s}))}})};return Object(j.jsxs)("div",{id:"pedidos-recebidos",children:[Object(j.jsx)("div",{className:"pedidos-recebidos-titulo",children:Object(j.jsxs)("h3",{children:["Pedidos Recebidos",Object(j.jsx)("img",{className:"refresh",src:"/images/refresh.png",onClick:function(){return n(ie())}})]})}),void 0===r?Object(j.jsx)("div",{children:"Sem novos pedidos!"}):Object(j.jsx)("div",{children:function(e){var t="";return"loaded"===r?t=Object(j.jsx)("div",{children:e.map(i)}):"loading"===r?t=Object(j.jsxs)("div",{className:"renderiza-aviso",id:"loading",children:[Object(j.jsx)("br",{}),Object(j.jsx)("img",{id:"loading-img",src:"/images/cardapio2.png"}),Object(j.jsx)("div",{className:"loading-div",children:" Carregando..."})," "]}):"failed"===r&&(t=Object(j.jsxs)("div",{className:"renderiza-aviso",id:"error",children:[Object(j.jsxs)("div",{className:"error-div",children:[" Error: ",a]})," "]})),t}(t)}),Object(j.jsx)("br",{})]})}var pe=Object(w.d)({name:"realizapedido",initialState:{quarto:0},reducers:{alteraQuarto:function(e,t){return Object(S.a)(Object(S.a)({},e),{},{quarto:t.payload})}}}),Oe=pe.actions.alteraQuarto,me=pe.reducer;r(230);function xe(e){var t=Object(p.f)(),r=Object(D.c)((function(e){return e.realizapedido})).quarto,c=Object(D.b)();return Object(j.jsxs)("div",{id:"realiza-pedido",children:[Object(j.jsx)("div",{className:"realiza-pedido-titulo",children:Object(j.jsx)("h3",{children:"Pedido "})}),Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"item",children:"Fritas C/ Coca"}),Object(j.jsx)("li",{className:"preco",children:"R$ 15,00"}),Object(j.jsx)("li",{className:"item",children:"Combo Hamburguer"}),Object(j.jsx)("li",{className:"preco",children:"R$ 25,00"}),Object(j.jsx)("li",{className:"item",children:"Sobremesa Flocos"}),Object(j.jsx)("li",{className:"preco",children:"R$ 10,00"})]})}),Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"form-group col-md-2",children:[Object(j.jsx)("label",{className:"quarto",for:"inputZip",children:"Quarto: "}),Object(j.jsx)("input",{type:"number",className:"form-control",id:"inputZip",onChange:function(e){return c(Oe(+e.target.value))},value:r})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"total",children:"Total: R$ 50,00"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"botoes",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-primary",id:"pedir",onClick:function(){return t.push("/cardapio")},children:Object(j.jsx)("div",{className:"botao",children:"Pedir"})}),Object(j.jsxs)("button",{type:"button",className:"btn btn-danger",id:"cancela",onClick:function(){return t.push("/cardapio")},children:[" ",Object(j.jsx)("div",{className:"botao",children:"Cancela"})]})]})]})}var he=function(e){return Object(j.jsx)(b.a,{children:Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/",children:Object(j.jsx)(xe,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/registrar",children:Object(j.jsx)(v,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/realiza-pedido",children:Object(j.jsx)(xe,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/cardapio",children:Object(j.jsx)(H,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/pedidos-recebidos",children:Object(j.jsx)(be,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/cria-cardapio",children:Object(j.jsx)(V,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/cria-refeicao",children:Object(j.jsx)(te,{})})]})})},fe=Object(w.a)({reducer:{cardapio:Q,refeicao:ee,realizapedido:me,pedidosrecebidos:le}});var ve=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(D.a,{store:fe,children:[Object(j.jsx)(u,{}),Object(j.jsx)(he,{})]})})},ge=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,262)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ve,{})}),document.getElementById("root")),ge()}},[[231,1,2]]]);
//# sourceMappingURL=main.9be61bef.chunk.js.map