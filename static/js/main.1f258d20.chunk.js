(this["webpackJsonpcalculator-redux"]=this["webpackJsonpcalculator-redux"]||[]).push([[0],{15:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),u=n.n(c),s=n(4),l=n(10),o=n(11),m=n(14),i=n(13),p=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.call(this)}return Object(o.a)(n,[{key:"render",value:function(){var e=isNaN(this.props.answer)?"Please enter a number":this.props.answer;return r.a.createElement("div",{className:"container"},r.a.createElement("input",{className:"center",onChange:this.props.getNum1}),r.a.createElement("input",{className:"center",onChange:this.props.getNum2}),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"green btn",onClick:this.props.add},"ADD"),r.a.createElement("button",{className:"green btn",onClick:this.props.subtract},"SUBTRACT"),r.a.createElement("button",{className:"green btn",onClick:this.props.multiply},"MULTIPLY"),r.a.createElement("button",{className:"green btn",onClick:this.props.divide},"DIVIDE"),r.a.createElement("h1",null,e)))}}]),n}(a.Component),b=Object(s.b)((function(e){return{answer:e.calculatorReducer.answer,num1:e.calculatorReducer.num1,num2:e.calculatorReducer.num2}}),{add:function(){return{type:"ADD"}},subtract:function(){return{type:"SUBTRACT"}},multiply:function(){return{type:"MULTIPLY"}},divide:function(){return{type:"DIVIDE"}},getNum1:function(e){return{type:"GET_NUM1",payload:e.target.value}},getNum2:function(e){return{type:"GET_NUM2",payload:e.target.value}}})(p),d=n(2),E=n(12),N=n(1),h={num1:2,num2:2,answer:0},j=Object(d.c)({calculatorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NUM1":return Object(N.a)(Object(N.a)({},e),{},{num1:Number(t.payload)});case"GET_NUM2":return Object(N.a)(Object(N.a)({},e),{},{num2:Number(t.payload)});case"ADD":return Object(N.a)(Object(N.a)({},e),{},{answer:e.num1+e.num2});case"SUBTRACT":return Object(N.a)(Object(N.a)({},e),{},{answer:e.num1-e.num2});case"DIVIDE":return Object(N.a)(Object(N.a)({},e),{},{answer:e.num1/e.num2});case"MULTIPLY":return Object(N.a)(Object(N.a)({},e),{},{answer:e.num1*e.num2});default:return e}}}),O=[E.a],y=Object(d.d)(j,{},d.a.apply(void 0,O));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:y},r.a.createElement(b,null))),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1f258d20.chunk.js.map