(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Qetd:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},RNiq:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){return(c="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}function u(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?r(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.r(e),n.d(e,"__N_SSG",(function(){return d})),n.d(e,"default",(function(){return y}));var f=n("q1tI"),s=n.n(f).a.createElement;function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(y,t);var e,n,i,c,f=(e=y,function(){var t,n=a(e);if(p()){var o=a(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return u(this,t)});function y(){var t,e,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return t=f.call.apply(f,[this].concat(c)),e=r(t),o={},(n="state")in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,t}return n=y,(i=[{key:"componentDidMount",value:function(){var t=this.props.histogram,e=this.props.timestamp?this.props.timestamp:0;google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback((function(){var e=google.visualization.arrayToDataTable(t);new google.visualization.Histogram(document.getElementById("chart_div")).draw(e,{title:"Age of Empires II: Definitive Edition ELO (1v1 random map)",legend:{position:"none"}})})),document.getElementById("last_updated").textContent="Last updated: ".concat(new Date(e))}},{key:"render",value:function(){return s("html",null,s("head",null,s("script",{type:"text/javascript",src:"https://www.gstatic.com/charts/loader.js"})),s("body",null,s("div",{id:"chart_div",style:{width:"900px",height:"500px"}}),s("div",{id:"last_updated"})))}}])&&o(n.prototype,i),c&&o(n,c),y}(f.Component),d=!0},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);