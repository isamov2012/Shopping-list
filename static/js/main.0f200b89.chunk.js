(this["webpackJsonpshopping-list-practice"]=this["webpackJsonpshopping-list-practice"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=(n(14),n(6)),u=n(5),l=n(1),i=n(2),m=n(4),p=n(3),h=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("span",{style:{display:"inline-block",width:"50px",textAlign:"center"},className:this.classes()},this.countFormat()),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"m-2 btn-lg btn-secondary"},"+"),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"m-2 btn-lg btn-secondary"},"-"),r.a.createElement("button",{onClick:function(){return e.props.del(e.props.counter.id)},className:"btn btn-danger"},"Del"))}},{key:"countFormat",value:function(){return 0===this.props.counter.value?"Zero":this.props.counter.value}},{key:"classes",value:function(){var e="m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary",e}}]),n}(a.Component),d=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onIncrement,n=e.onDecrement,a=e.onDelete,c=e.onReset,o=e.counters;return r.a.createElement("div",null,r.a.createElement("button",{onClick:c},"Reset"),o.map((function(e){return r.a.createElement(h,{onIncrement:t,onDecrement:n,del:a,counter:e,key:e.id})})))}}]),n}(a.Component),v=function(e){var t=e.numOfCounters;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"http://google.com"},r.a.createElement("span",{class:"badge badge-secondary"},t),"Counters"))},b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:1,value:0},{id:2,value:5},{id:3,value:0},{id:4,value:0},{id:5,value:0}]},e.numOfCounters=function(){return e.state.counters.length},e.handleDelete=function(t){return e.setState({counters:e.state.counters.filter((function(e){return e.id!==t}))})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleDecrement=function(t){var n=e.state.counters.indexOf(t);if(e.state.counters[n].value>0){var a=Object(u.a)(e.state.counters);a[n]=Object(s.a)({},t),a[n].value--,e.setState({counters:a})}},e.handleIncrement=function(t){var n=Object(u.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},t),n[a].value++,e.setState({counters:n})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{numOfCounters:this.state.counters.filter((function(e){return e.value>0})).length}),r.a.createElement("main",{className:"container"},r.a.createElement(d,{onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,counters:this.state.counters})))}}]),n}(a.Component);o.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0f200b89.chunk.js.map