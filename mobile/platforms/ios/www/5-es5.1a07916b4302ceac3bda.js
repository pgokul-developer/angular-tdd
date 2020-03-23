function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lCCV:function(e,t,o){"use strict";o.r(t);var n=o("ZAI4"),r=o("kt0X"),c=Object(r.n)("[Todo] Load Todos"),i=Object(r.n)("[Todo] Load Todos Success",Object(r.s)()),a=Object(r.n)("[Todo] Load Todos Failure",Object(r.s)()),s=Object(r.n)("[Todo] Reset Error"),u=Object(r.n)("[Todo] Create Todo",Object(r.s)()),d=Object(r.n)("[Todo] Create Todo Success",Object(r.s)()),l=Object(r.n)("[Todo] Create Todo Failure",Object(r.s)()),b=Object(r.n)("[Todo] Complete Todo",Object(r.s)()),p=Object(r.n)("[Todo] Complete Todo Success",Object(r.s)()),f=Object(r.n)("[Todo] Complete Todo Failure",Object(r.s)()),m=Object(r.p)({todos:[],error:""},Object(r.r)(c,(function(e){return e})),Object(r.r)(i,(function(e,t){return e})),Object(r.r)(a,(function(e,t){return e})),Object(r.r)(s,(function(e){return Object.assign(Object.assign({},e),{error:""})})),Object(r.r)(d,(function(e,t){var o=t.todo;return Object.assign(Object.assign({},e),{todos:[].concat(_toConsumableArray(e.todos),[o])})})),Object(r.r)(l,(function(e,t){var o=t.error;return Object.assign(Object.assign({},e),{error:o})})),Object(r.r)(p,(function(e,t){var o=t.todo;return Object.assign(Object.assign({},e),{todos:e.todos.map((function(e){return e.id===o.id?o:e}))})})),Object(r.r)(f,(function(e,t){var o=t.error;return Object.assign(Object.assign({},e),{error:o})})));function O(e,t){return m(e,t)}var j=Object(r.o)("todo"),h=Object(r.q)(j,(function(e){return e.todos}));Object(r.q)(j,(function(e){return e.error}));var T,y,C,v=o("fXoL"),g=((T=function(){function e(t){_classCallCheck(this,e),this.store=t,this.todos$=this.store.pipe(Object(r.t)(h))}return _createClass(e,[{key:"createTodo",value:function(e){this.store.dispatch(u({description:e}))}},{key:"completeTodo",value:function(e){this.store.dispatch(b({todo:e}))}}]),e}()).\u0275fac=function(e){return new(e||T)(v.Ub(r.h))},T.\u0275prov=v.Hb({token:T,factory:T.\u0275fac}),T),k=o("kmnG"),w=o("qFsG"),_=o("3Pt+"),P=o("bTqV"),A=((y=function(){function e(){_classCallCheck(this,e),this.newTodo="",this.createTodo=new v.n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onKeyEnterCreateTodo",value:function(e){alert("keydown.enter"),console.log("$event",e),this.emitCreateTodo(e.target.value),e.target.value=""}},{key:"emitCreateTodo",value:function(e){this.createTodo.emit(e)}},{key:"keyPress",value:function(e){var t=String.fromCharCode(e.charCode);console.log("keyPress",t),/[0-9]/.test(t)||e.preventDefault()}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=v.Fb({type:y,selectors:[["app-todo-input"]],outputs:{createTodo:"createTodo"},decls:6,vars:1,consts:[["matInput","","type","text","placeholder","Add Todo item",3,"ngModel","ngModelChange","keydown.enter"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(v.Qb(0,"mat-form-field"),v.Qb(1,"mat-label"),v.oc(2,"Add Todo item"),v.Pb(),v.Qb(3,"input",0),v.Yb("ngModelChange",(function(e){return t.newTodo=e}))("keydown.enter",(function(e){return t.onKeyEnterCreateTodo(e)})),v.Pb(),v.Pb(),v.Qb(4,"button",1),v.Yb("click",(function(){return t.emitCreateTodo(t.newTodo)})),v.oc(5,"Create"),v.Pb()),2&e&&(v.Bb(3),v.fc("ngModel",t.newTodo))},directives:[k.a,k.d,w.a,_.a,_.e,_.g,P.a],styles:[""]}),y),F=o("ofXK"),Q=function(e){return{completed:e}},I=((C=function(){function e(){_classCallCheck(this,e),this.complete=new v.n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"emitCompleteTodo",value:function(){this.complete.emit(this.todo)}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=v.Fb({type:C,selectors:[["app-todo-list-item"]],inputs:{todo:"todo"},outputs:{complete:"complete"},decls:9,vars:4,consts:[[1,"todo-list-item"],[1,"complete",3,"ngClass","click"],[1,"material-icons"],[1,"description"],[1,"remove"]],template:function(e,t){1&e&&(v.Qb(0,"div",0),v.Qb(1,"div",1),v.Yb("click",(function(){return t.emitCompleteTodo()})),v.Qb(2,"span",2),v.oc(3," check_circle_outline "),v.Pb(),v.Pb(),v.Qb(4,"div",3),v.oc(5),v.Pb(),v.Qb(6,"div",4),v.Qb(7,"span",2),v.oc(8," clear "),v.Pb(),v.Pb(),v.Pb()),2&e&&(v.Bb(1),v.fc("ngClass",v.gc(2,Q,t.todo.completed)),v.Bb(4),v.pc(t.todo.description))},directives:[F.i],styles:[".todo-list-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.complete[_ngcontent-%COMP%]{color:#d3d3d3}.complete.completed[_ngcontent-%COMP%]{color:green}"]}),C);function $(e,t){if(1&e){var o=v.Rb();v.Qb(0,"app-todo-list-item",5),v.Yb("complete",(function(e){return v.ic(o),v.ac().completeTodo(e)})),v.Pb()}2&e&&v.fc("todo",t.$implicit)}var M,S,E,J,L=((M=function(){function e(t){_classCallCheck(this,e),this.todoFacade=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"createTodo",value:function(e){this.todoFacade.createTodo(e)}},{key:"completeTodo",value:function(e){console.log(e),this.todoFacade.completeTodo(e)}}]),e}()).\u0275fac=function(e){return new(e||M)(v.Lb(g))},M.\u0275cmp=v.Fb({type:M,selectors:[["app-todo-container"]],decls:6,vars:3,consts:[[1,"todo-container"],[1,"todo-wrapper"],[3,"createTodo"],[1,"todo-list"],[3,"todo","complete",4,"ngFor","ngForOf"],[3,"todo","complete"]],template:function(e,t){1&e&&(v.Qb(0,"div",0),v.Qb(1,"div",1),v.Qb(2,"app-todo-input",2),v.Yb("createTodo",(function(e){return t.createTodo(e)})),v.Pb(),v.Qb(3,"div",3),v.nc(4,$,1,1,"app-todo-list-item",4),v.bc(5,"async"),v.Pb(),v.Pb(),v.Pb()),2&e&&(v.Bb(4),v.fc("ngForOf",v.cc(5,1,t.todoFacade.todos$)))},directives:[A,F.j,I],pipes:[F.b],styles:[".todo-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),M),Y=o("tyNb"),H=[{path:"",component:L}],q=((S=function e(){_classCallCheck(this,e)}).\u0275mod=v.Jb({type:S}),S.\u0275inj=v.Ib({factory:function(e){return new(e||S)},imports:[[Y.f.forChild(H)],Y.f]}),S),x=o("snw9"),B=o("bOdf"),U=o("lJxs"),K=o("JIr8"),R=o("eIep"),X=o("EY2u"),G=o("LRne"),V=o("tk/3"),W=((J=function(){function e(t){_classCallCheck(this,e),this.httpClient=t,this.id=0}return _createClass(e,[{key:"generateTodo",value:function(e){return{description:e.description,id:++this.id,completed:!1}}},{key:"createTodoApi",value:function(e){return Object(G.a)(this.generateTodo(e))}},{key:"completeTodoApi",value:function(e){var t=Object.assign({},e);return t.completed=!0,Object(G.a)(t)}}]),e}()).\u0275fac=function(e){return new(e||J)(v.Ub(V.a))},J.\u0275prov=v.Hb({token:J,factory:J.\u0275fac}),J),D=((E=function e(t,o){var n=this;_classCallCheck(this,e),this.actions$=t,this.todoApi=o,this.mockTodo={description:"todo 1",id:1,completed:!1},this.loadTodos$=Object(x.c)((function(){return n.actions$.pipe(Object(x.d)(c),Object(B.a)((function(){return X.a.pipe(Object(U.a)((function(e){return i({data:e})})),Object(K.a)((function(e){return Object(G.a)(a({error:e}))})))})))})),this.createTodo$=Object(x.c)((function(){return function(){return n.actions$.pipe(Object(x.d)(u),Object(R.a)((function(e){return n.todoApi.createTodoApi(e).pipe(Object(U.a)((function(e){return d({todo:e})})),Object(K.a)((function(e){return Object(G.a)(l({error:e}))})))})))}})),this.completeTodo$=Object(x.c)((function(){return function(){return n.actions$.pipe(Object(x.d)(b),Object(R.a)((function(e){return n.todoApi.completeTodoApi(e.todo).pipe(Object(U.a)((function(e){return p({todo:e})})),Object(K.a)((function(e){return Object(G.a)(f({error:e}))})))})))}}))}).\u0275fac=function(e){return new(e||E)(v.Ub(x.a),v.Ub(W))},E.\u0275prov=v.Hb({token:E,factory:E.\u0275fac}),E);o.d(t,"TodoModule",(function(){return Z}));var N,Z=((N=function e(){_classCallCheck(this,e)}).\u0275mod=v.Jb({type:N}),N.\u0275inj=v.Ib({factory:function(e){return new(e||N)},providers:[W,g],imports:[[F.c,r.j.forFeature("todo",O),x.b.forFeature([D]),V.b,q,n.b,_.c]]}),N)}}]);