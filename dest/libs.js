/* Zepto v1.1.3 - zepto event ajax form ie - zeptojs.com/license */

var Zepto=function(){function M(e){return e==null?String(e):x[T.call(e)]||"object"}function _(e){return M(e)=="function"}function D(e){return e!=null&&e==e.window}function P(e){return e!=null&&e.nodeType==e.DOCUMENT_NODE}function H(e){return M(e)=="object"}function B(e){return H(e)&&!D(e)&&Object.getPrototypeOf(e)==Object.prototype}function j(e){return typeof e.length=="number"}function F(e){return o.call(e,function(e){return e!=null})}function I(e){return e.length>0?n.fn.concat.apply([],e):e}function q(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function R(e){return e in f?f[e]:f[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function U(e,t){return typeof t=="number"&&!l[q(e)]?t+"px":t}function z(e){var t,n;return a[e]||(t=u.createElement(e),u.body.appendChild(t),n=getComputedStyle(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),a[e]=n),a[e]}function W(e){return"children"in e?s.call(e.children):n.map(e.childNodes,function(e){if(e.nodeType==1)return e})}function X(n,r,i){for(t in r)i&&(B(r[t])||O(r[t]))?(B(r[t])&&!B(n[t])&&(n[t]={}),O(r[t])&&!O(n[t])&&(n[t]=[]),X(n[t],r[t],i)):r[t]!==e&&(n[t]=r[t])}function V(e,t){return t==null?n(e):n(e).filter(t)}function $(e,t,n,r){return _(t)?t.call(e,n,r):t}function J(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function K(t,n){var r=t.className,i=r&&r.baseVal!==e;if(n===e)return i?r.baseVal:r;i?r.baseVal=n:t.className=n}function Q(e){var t;try{return e?e=="true"||(e=="false"?!1:e=="null"?null:!/^0/.test(e)&&!isNaN(t=Number(e))?t:/^[\[\{]/.test(e)?n.parseJSON(e):e):e}catch(r){return e}}function G(e,t){t(e);for(var n in e.childNodes)G(e.childNodes[n],t)}var e,t,n,r,i=[],s=i.slice,o=i.filter,u=window.document,a={},f={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},c=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/^(?:body|html)$/i,v=/([A-Z])/g,m=["val","css","html","text","data","width","height","offset"],g=["after","prepend","before","append"],y=u.createElement("table"),b=u.createElement("tr"),w={tr:u.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:b,th:b,"*":u.createElement("div")},E=/complete|loaded|interactive/,S=/^[\w-]*$/,x={},T=x.toString,N={},C,k,L=u.createElement("div"),A={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},O=Array.isArray||function(e){return e instanceof Array};return N.matches=function(e,t){if(!t||!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;return s&&(i=L).appendChild(e),r=~N.qsa(i,t).indexOf(e),s&&L.removeChild(e),r},C=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},k=function(e){return o.call(e,function(t,n){return e.indexOf(t)==n})},N.fragment=function(t,r,i){var o,a,f;return h.test(t)&&(o=n(u.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(p,"<$1></$2>")),r===e&&(r=c.test(t)&&RegExp.$1),r in w||(r="*"),f=w[r],f.innerHTML=""+t,o=n.each(s.call(f.childNodes),function(){f.removeChild(this)})),B(i)&&(a=n(o),n.each(i,function(e,t){m.indexOf(e)>-1?a[e](t):a.attr(e,t)})),o},N.Z=function(e,t){return e=e||[],e.__proto__=n.fn,e.selector=t||"",e},N.isZ=function(e){return e instanceof N.Z},N.init=function(t,r){var i;if(!t)return N.Z();if(typeof t=="string"){t=t.trim();if(t[0]=="<"&&c.test(t))i=N.fragment(t,RegExp.$1,r),t=null;else{if(r!==e)return n(r).find(t);i=N.qsa(u,t)}}else{if(_(t))return n(u).ready(t);if(N.isZ(t))return t;if(O(t))i=F(t);else if(H(t))i=[t],t=null;else if(c.test(t))i=N.fragment(t.trim(),RegExp.$1,r),t=null;else{if(r!==e)return n(r).find(t);i=N.qsa(u,t)}}return N.Z(i,t)},n=function(e,t){return N.init(e,t)},n.extend=function(e){var t,n=s.call(arguments,1);return typeof e=="boolean"&&(t=e,e=n.shift()),n.forEach(function(n){X(e,n,t)}),e},N.qsa=function(e,t){var n,r=t[0]=="#",i=!r&&t[0]==".",o=r||i?t.slice(1):t,u=S.test(o);return P(e)&&u&&r?(n=e.getElementById(o))?[n]:[]:e.nodeType!==1&&e.nodeType!==9?[]:s.call(u&&!r?i?e.getElementsByClassName(o):e.getElementsByTagName(t):e.querySelectorAll(t))},n.contains=function(e,t){return e!==t&&e.contains(t)},n.type=M,n.isFunction=_,n.isWindow=D,n.isArray=O,n.isPlainObject=B,n.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},n.inArray=function(e,t,n){return i.indexOf.call(t,e,n)},n.camelCase=C,n.trim=function(e){return e==null?"":String.prototype.trim.call(e)},n.uuid=0,n.support={},n.expr={},n.map=function(e,t){var n,r=[],i,s;if(j(e))for(i=0;i<e.length;i++)n=t(e[i],i),n!=null&&r.push(n);else for(s in e)n=t(e[s],s),n!=null&&r.push(n);return I(r)},n.each=function(e,t){var n,r;if(j(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},n.grep=function(e,t){return o.call(e,t)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){x["[object "+t+"]"]=t.toLowerCase()}),n.fn={forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,indexOf:i.indexOf,concat:i.concat,map:function(e){return n(n.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return n(s.apply(this,arguments))},ready:function(e){return E.test(u.readyState)&&u.body?e(n):u.addEventListener("DOMContentLoaded",function(){e(n)},!1),this},get:function(t){return t===e?s.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return i.every.call(this,function(t,n){return e.call(t,n,t)!==!1}),this},filter:function(e){return _(e)?this.not(this.not(e)):n(o.call(this,function(t){return N.matches(t,e)}))},add:function(e,t){return n(k(this.concat(n(e,t))))},is:function(e){return this.length>0&&N.matches(this[0],e)},not:function(t){var r=[];if(_(t)&&t.call!==e)this.each(function(e){t.call(this,e)||r.push(this)});else{var i=typeof t=="string"?this.filter(t):j(t)&&_(t.item)?s.call(t):n(t);this.forEach(function(e){i.indexOf(e)<0&&r.push(e)})}return n(r)},has:function(e){return this.filter(function(){return H(e)?n.contains(this,e):n(this).find(e).size()})},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!H(e)?e:n(e)},last:function(){var e=this[this.length-1];return e&&!H(e)?e:n(e)},find:function(e){var t,r=this;return typeof e=="object"?t=n(e).filter(function(){var e=this;return i.some.call(r,function(t){return n.contains(t,e)})}):this.length==1?t=n(N.qsa(this[0],e)):t=this.map(function(){return N.qsa(this,e)}),t},closest:function(e,t){var r=this[0],i=!1;typeof e=="object"&&(i=n(e));while(r&&!(i?i.indexOf(r)>=0:N.matches(r,e)))r=r!==t&&!P(r)&&r.parentNode;return n(r)},parents:function(e){var t=[],r=this;while(r.length>0)r=n.map(r,function(e){if((e=e.parentNode)&&!P(e)&&t.indexOf(e)<0)return t.push(e),e});return V(t,e)},parent:function(e){return V(k(this.pluck("parentNode")),e)},children:function(e){return V(this.map(function(){return W(this)}),e)},contents:function(){return this.map(function(){return s.call(this.childNodes)})},siblings:function(e){return V(this.map(function(e,t){return o.call(W(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return n.map(this,function(t){return t[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=""),getComputedStyle(this,"").getPropertyValue("display")=="none"&&(this.style.display=z(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var t=_(e);if(this[0]&&!t)var r=n(e).get(0),i=r.parentNode||this.length>1;return this.each(function(s){n(this).wrapAll(t?e.call(this,s):i?r.cloneNode(!0):r)})},wrapAll:function(e){if(this[0]){n(this[0]).before(e=n(e));var t;while((t=e.children()).length)e=t.first();n(e).append(this)}return this},wrapInner:function(e){var t=_(e);return this.each(function(r){var i=n(this),s=i.contents(),o=t?e.call(this,r):e;s.length?s.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var r=n(this);(t===e?r.css("display")=="none":t)?r.show():r.hide()})},prev:function(e){return n(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return n(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return arguments.length===0?this.length>0?this[0].innerHTML:null:this.each(function(t){var r=this.innerHTML;n(this).empty().append($(this,e,t,r))})},text:function(t){return arguments.length===0?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===e?"":""+t})},attr:function(n,r){var i;return typeof n=="string"&&r===e?this.length==0||this[0].nodeType!==1?e:n=="value"&&this[0].nodeName=="INPUT"?this.val():!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:this.each(function(e){if(this.nodeType!==1)return;if(H(n))for(t in n)J(this,t,n[t]);else J(this,n,$(this,r,e,this.getAttribute(n)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&J(this,e)})},prop:function(t,n){return t=A[t]||t,n===e?this[0]&&this[0][t]:this.each(function(e){this[t]=$(this,n,e,this[t])})},data:function(t,n){var r=this.attr("data-"+t.replace(v,"-$1").toLowerCase(),n);return r!==null?Q(r):e},val:function(e){return arguments.length===0?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=$(this,e,t,this.value)})},offset:function(e){if(e)return this.each(function(t){var r=n(this),i=$(this,e,t,r.offset()),s=r.offsetParent().offset(),o={top:i.top-s.top,left:i.left-s.left};r.css("position")=="static"&&(o.position="relative"),r.css(o)});if(this.length==0)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(e,r){if(arguments.length<2){var i=this[0],s=getComputedStyle(i,"");if(!i)return;if(typeof e=="string")return i.style[C(e)]||s.getPropertyValue(e);if(O(e)){var o={};return n.each(O(e)?e:[e],function(e,t){o[t]=i.style[C(t)]||s.getPropertyValue(t)}),o}}var u="";if(M(e)=="string")!r&&r!==0?this.each(function(){this.style.removeProperty(q(e))}):u=q(e)+":"+U(e,r);else for(t in e)!e[t]&&e[t]!==0?this.each(function(){this.style.removeProperty(q(t))}):u+=q(t)+":"+U(t,e[t])+";";return this.each(function(){this.style.cssText+=";"+u})},index:function(e){return e?this.indexOf(n(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return e?i.some.call(this,function(e){return this.test(K(e))},R(e)):!1},addClass:function(e){return e?this.each(function(t){r=[];var i=K(this),s=$(this,e,t,i);s.split(/\s+/g).forEach(function(e){n(this).hasClass(e)||r.push(e)},this),r.length&&K(this,i+(i?" ":"")+r.join(" "))}):this},removeClass:function(t){return this.each(function(n){if(t===e)return K(this,"");r=K(this),$(this,t,n,r).split(/\s+/g).forEach(function(e){r=r.replace(R(e)," ")}),K(this,r.trim())})},toggleClass:function(t,r){return t?this.each(function(i){var s=n(this),o=$(this,t,i,K(this));o.split(/\s+/g).forEach(function(t){(r===e?!s.hasClass(t):r)?s.addClass(t):s.removeClass(t)})}):this},scrollTop:function(t){if(!this.length)return;var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})},scrollLeft:function(t){if(!this.length)return;var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})},position:function(){if(!this.length)return;var e=this[0],t=this.offsetParent(),r=this.offset(),i=d.test(t[0].nodeName)?{top:0,left:0}:t.offset();return r.top-=parseFloat(n(e).css("margin-top"))||0,r.left-=parseFloat(n(e).css("margin-left"))||0,i.top+=parseFloat(n(t[0]).css("border-top-width"))||0,i.left+=parseFloat(n(t[0]).css("border-left-width"))||0,{top:r.top-i.top,left:r.left-i.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||u.body;while(e&&!d.test(e.nodeName)&&n(e).css("position")=="static")e=e.offsetParent;return e})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(t){var r=t.replace(/./,function(e){return e[0].toUpperCase()});n.fn[t]=function(i){var s,o=this[0];return i===e?D(o)?o["inner"+r]:P(o)?o.documentElement["scroll"+r]:(s=this.offset())&&s[t]:this.each(function(e){o=n(this),o.css(t,$(this,i,e,o[t]()))})}}),g.forEach(function(e,t){var r=t%2;n.fn[e]=function(){var e,i=n.map(arguments,function(t){return e=M(t),e=="object"||e=="array"||t==null?t:N.fragment(t)}),s,o=this.length>1;return i.length<1?this:this.each(function(e,u){s=r?u:u.parentNode,u=t==0?u.nextSibling:t==1?u.firstChild:t==2?u:null,i.forEach(function(e){if(o)e=e.cloneNode(!0);else if(!s)return n(e).remove();G(s.insertBefore(e,u),function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&!e.src&&window.eval.call(window,e.innerHTML)})})})},n.fn[r?e+"To":"insert"+(t?"Before":"After")]=function(t){return n(t)[e](this),this}}),N.Z.prototype=n.fn,N.uniq=k,N.deserializeValue=Q,n.zepto=N,n}();window.Zepto=Zepto,window.$===undefined&&(window.$=Zepto),function(e){function c(e){return e._zid||(e._zid=t++)}function h(e,t,n,r){t=p(t);if(t.ns)var i=d(t.ns);return(o[c(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!t.ns||i.test(e.ns))&&(!n||c(e.fn)===c(n))&&(!r||e.sel==r)})}function p(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function d(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function v(e,t){return e.del&&!a&&e.e in f||!!t}function m(e){return l[e]||a&&f[e]||e}function g(t,r,i,s,u,a,f){var h=c(t),d=o[h]||(o[h]=[]);r.split(/\s/).forEach(function(r){if(r=="ready")return e(document).ready(i);var o=p(r);o.fn=i,o.sel=u,o.e in l&&(i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return o.fn.apply(this,arguments)}),o.del=a;var c=a||i;o.proxy=function(e){e=x(e);if(e.isImmediatePropagationStopped())return;e.data=s;var r=c.apply(t,e._args==n?[e]:[e].concat(e._args));return r===!1&&(e.preventDefault(),e.stopPropagation()),r},o.i=d.length,d.push(o),"addEventListener"in t&&t.addEventListener(m(o.e),o.proxy,v(o,f))})}function y(e,t,n,r,i){var s=c(e);(t||"").split(/\s/).forEach(function(t){h(e,t,n,r).forEach(function(t){delete o[s][t.i],"removeEventListener"in e&&e.removeEventListener(m(t.e),t.proxy,v(t,i))})})}function x(t,r){if(r||!t.isDefaultPrevented){r||(r=t),e.each(S,function(e,n){var i=r[e];t[e]=function(){return this[n]=b,i&&i.apply(r,arguments)},t[n]=w});if(r.defaultPrevented!==n?r.defaultPrevented:"returnValue"in r?r.returnValue===!1:r.getPreventDefault&&r.getPreventDefault())t.isDefaultPrevented=b}return t}function T(e){var t,r={originalEvent:e};for(t in e)!E.test(t)&&e[t]!==n&&(r[t]=e[t]);return x(r,e)}var t=1,n,r=Array.prototype.slice,i=e.isFunction,s=function(e){return typeof e=="string"},o={},u={},a="onfocusin"in window,f={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:g,remove:y},e.proxy=function(t,n){if(i(t)){var r=function(){return t.apply(n,arguments)};return r._zid=c(t),r}if(s(n))return e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(e,t,n){return this.on(e,t,n)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.one=function(e,t,n,r){return this.on(e,t,n,r,1)};var b=function(){return!0},w=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,o,u,a,f){var l,c,h=this;if(t&&!s(t))return e.each(t,function(e,t){h.on(e,o,u,t,f)}),h;!s(o)&&!i(a)&&a!==!1&&(a=u,u=o,o=n);if(i(u)||u===!1)a=u,u=n;return a===!1&&(a=w),h.each(function(n,i){f&&(l=function(e){return y(i,e.type,a),a.apply(this,arguments)}),o&&(c=function(t){var n,s=e(t.target).closest(o,i).get(0);if(s&&s!==i)return n=e.extend(T(t),{currentTarget:s,liveFired:i}),(l||a).apply(s,[n].concat(r.call(arguments,1)))}),g(i,t,a,u,o,c||l)})},e.fn.off=function(t,r,o){var u=this;return t&&!s(t)?(e.each(t,function(e,t){u.off(e,r,t)}),u):(!s(r)&&!i(o)&&o!==!1&&(o=r,r=n),o===!1&&(o=w),u.each(function(){y(this,t,o,r)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):x(t),t._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,u){r=T(s(t)?e.Event(t):t),r._args=n,r.target=u,e.each(h(u,t.type||t),function(e,t){i=t.proxy(r);if(r.isImmediatePropagationStopped())return!1})}),i},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),e.Event=function(e,t){s(e)||(t=e,e=t.type);var n=document.createEvent(u[e]||"Events"),r=!0;if(t)for(var i in t)i=="bubbles"?r=!!t[i]:n[i]=t[i];return n.initEvent(e,r,!0),x(n)}}(Zepto),function($){function triggerAndReturn(e,t,n){var r=$.Event(t);return $(e).trigger(r,n),!r.isDefaultPrevented()}function triggerGlobal(e,t,n,r){if(e.global)return triggerAndReturn(t||document,n,r)}function ajaxStart(e){e.global&&$.active++===0&&triggerGlobal(e,null,"ajaxStart")}function ajaxStop(e){e.global&&!--$.active&&triggerGlobal(e,null,"ajaxStop")}function ajaxBeforeSend(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===!1||triggerGlobal(t,n,"ajaxBeforeSend",[e,t])===!1)return!1;triggerGlobal(t,n,"ajaxSend",[e,t])}function ajaxSuccess(e,t,n,r){var i=n.context,s="success";n.success.call(i,e,s,t),r&&r.resolveWith(i,[e,s,t]),triggerGlobal(n,i,"ajaxSuccess",[t,n,e]),ajaxComplete(s,t,n)}function ajaxError(e,t,n,r,i){var s=r.context;r.error.call(s,n,t,e),i&&i.rejectWith(s,[n,t,e]),triggerGlobal(r,s,"ajaxError",[n,r,e||t]),ajaxComplete(t,n,r)}function ajaxComplete(e,t,n){var r=n.context;n.complete.call(r,t,e),triggerGlobal(n,r,"ajaxComplete",[t,n]),ajaxStop(n)}function empty(){}function mimeToDataType(e){return e&&(e=e.split(";",2)[0]),e&&(e==htmlType?"html":e==jsonType?"json":scriptTypeRE.test(e)?"script":xmlTypeRE.test(e)&&"xml")||"text"}function appendQuery(e,t){return t==""?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function serializeData(e){e.processData&&e.data&&$.type(e.data)!="string"&&(e.data=$.param(e.data,e.traditional)),e.data&&(!e.type||e.type.toUpperCase()=="GET")&&(e.url=appendQuery(e.url,e.data),e.data=undefined)}function parseArguments(e,t,n,r){return $.isFunction(t)&&(r=n,n=t,t=undefined),$.isFunction(n)||(r=n,n=undefined),{url:e,data:t,success:n,dataType:r}}function serialize(e,t,n,r){var i,s=$.isArray(t),o=$.isPlainObject(t);$.each(t,function(t,u){i=$.type(u),r&&(t=n?r:r+"["+(o||i=="object"||i=="array"?t:"")+"]"),!r&&s?e.add(u.name,u.value):i=="array"||!n&&i=="object"?serialize(e,u,n,t):e.add(t,u)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(e,t){if("type"in e){var n=e.jsonpCallback,r=($.isFunction(n)?n():n)||"jsonp"+ ++jsonpID,i=document.createElement("script"),s=window[r],o,u=function(e){$(i).triggerHandler("error",e||"abort")},a={abort:u},f;return t&&t.promise(a),$(i).on("load error",function(n,u){clearTimeout(f),$(i).off().remove(),n.type=="error"||!o?ajaxError(null,u||"error",a,e,t):ajaxSuccess(o[0],a,e,t),window[r]=s,o&&$.isFunction(s)&&s(o[0]),s=o=undefined}),ajaxBeforeSend(a,e)===!1?(u("abort"),a):(window[r]=function(){o=arguments},i.src=e.url.replace(/\?(.+)=\?/,"?$1="+r),document.head.appendChild(i),e.timeout>0&&(f=setTimeout(function(){u("timeout")},e.timeout)),a)}return $.ajax(e)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{}),deferred=$.Deferred&&$.Deferred();for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/\?.+=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,settings.jsonp?settings.jsonp+"=?":settings.jsonp===!1?"":"callback=?")),$.ajaxJSONP(settings,deferred);var mime=settings.accepts[dataType],headers={},setHeader=function(e,t){headers[e.toLowerCase()]=[e,t]},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),nativeSetHeader=xhr.setRequestHeader,abortTimeout;deferred&&deferred.promise(xhr),settings.crossDomain||setHeader("X-Requested-With","XMLHttpRequest"),setHeader("Accept",mime||"*/*");if(mime=settings.mimeType||mime)mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime);(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")&&setHeader("Content-Type",settings.contentType||"application/x-www-form-urlencoded");if(settings.headers)for(name in settings.headers)setHeader(name,settings.headers[name]);xhr.setRequestHeader=setHeader,xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(settings.mimeType||xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings,deferred):ajaxSuccess(result,xhr,settings,deferred)}else ajaxError(xhr.statusText||null,xhr.status?"error":"abort",xhr,settings,deferred)}};if(ajaxBeforeSend(xhr,settings)===!1)return xhr.abort(),ajaxError(null,"abort",xhr,settings,deferred),xhr;if(settings.xhrFields)for(name in settings.xhrFields)xhr[name]=settings.xhrFields[name];var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async,settings.username,settings.password);for(name in headers)nativeSetHeader.apply(xhr,headers[name]);return settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings,deferred)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr},$.get=function(){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(){var e=parseArguments.apply(null,arguments);return e.dataType="json",$.ajax(e)},$.fn.load=function(e,t,n){if(!this.length)return this;var r=this,i=e.split(/\s/),s,o=parseArguments(e,t,n),u=o.success;return i.length>1&&(o.url=i[0],s=i[1]),o.success=function(e){r.html(s?$("<div>").html(e.replace(rscript,"")).find(s):e),u&&u.apply(r,arguments)},$.ajax(o),this};var escape=encodeURIComponent;$.param=function(e,t){var n=[];return n.add=function(e,t){this.push(escape(e)+"="+escape(t))},serialize(n,e,t),n.join("&").replace(/%20/g,"+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t=[],n;return e([].slice.call(this.get(0).elements)).each(function(){n=e(this);var r=n.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&r!="submit"&&r!="reset"&&r!="button"&&(r!="radio"&&r!="checkbox"||this.checked)&&t.push({name:n.attr("name"),value:n.val()})}),t},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(e){"__proto__"in{}||e.extend(e.zepto,{Z:function(t,n){return t=t||[],e.extend(t,e.fn),t.selector=n||"",t.__Z=!0,t},isZ:function(t){return e.type(t)==="array"&&"__Z"in t}});try{getComputedStyle(undefined)}catch(t){var n=getComputedStyle;window.getComputedStyle=function(e){try{return n(e)}catch(t){return null}}}}(Zepto),define("$",function(){});var underscore="underscore";define("_",function(){});var backbone="backbone";define("B",function(){});var test="test";define("Test",function(){});