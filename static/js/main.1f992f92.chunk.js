(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),s=t.n(o),c=(t(14),t(6)),l=t(3),i=t(4),m=t(7),u=t(5),p=t(8),h=(t(15),t(16),function(e){return r.a.createElement("div",{className:"Person"},r.a.createElement("p",{onClick:e.click},"i am ",e.name," my age is ",e.age,"."),r.a.createElement("p",null,e.children),r.a.createElement("input",{type:"text",onChange:e.changed,value:e.name}))}),d=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={persons:[{id:1,name:"raju",age:30},{id:2,name:"ram",age:32}],showPersons:!1},t.switchNameHandler=function(e){t.setState({persons:[{name:e,age:30},{name:"ram",age:32}]})},t.deletePersonHandler=function(e){var n=Object(c.a)(t.state.persons);n.splice(e,1),t.setState({persons:n})},t.nameChangeHandler=function(e){t.setState({persons:[{name:"ram",age:32},{name:e.target.value,age:30}]})},t.togglePersonsHandler=function(){var e=t.state.showPersons;t.setState({showPersons:!e})},t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this,n=null;this.state.showPersons&&(n=r.a.createElement("diV",null,this.state.persons.map((function(n,t){return r.a.createElement(h,{click:function(){return e.deletePersonHandler(t)},name:n.name,age:n.age,key:n.id})}))));var t=[];return this.state.persons.length<=2&&t.push("red"),this.state.persons.length<=1&&t.push("bold"),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hi Welcome"),r.a.createElement("p",{className:t},"Now change the style! "),r.a.createElement("button",{style:{backgroundColor:"blue",font:"inherit",border:"1px solid blue",padding:"8px",cursor:"pointer"},onClick:this.togglePersonsHandler},"Switch Name"),n)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1f992f92.chunk.js.map