(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,o=Function.prototype,a=r.push,s=r.slice,u=r.concat,c=i.toString,l=i.hasOwnProperty,p=r.forEach,f=r.map,h=r.reduce,d=r.reduceRight,m=r.filter,g=r.every,v=r.some,y=r.indexOf,b=r.lastIndexOf,x=Array.isArray,w=Object.keys,C=o.bind,E=function(e){return e instanceof E?e:this instanceof E?void(this._wrapped=e):new E(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=E),exports._=E):e._=E,E.VERSION="1.4.4";var _=E.each=E.forEach=function(e,t,r){if(null!=e)if(p&&e.forEach===p)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,o=e.length;o>i;i++)if(t.call(r,e[i],i,e)===n)return}else for(var a in e)if(E.has(e,a)&&t.call(r,e[a],a,e)===n)return};E.map=E.collect=function(e,t,n){var r=[];return null==e?r:f&&e.map===f?e.map(t,n):(_(e,function(e,i,o){r[r.length]=t.call(n,e,i,o)}),r)};var S="Reduce of empty array with no initial value";E.reduce=E.foldl=E.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),h&&e.reduce===h)return r&&(t=E.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(_(e,function(e,o,a){i?n=t.call(r,n,e,o,a):(n=e,i=!0)}),!i)throw new TypeError(S);return n},E.reduceRight=E.foldr=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),d&&e.reduceRight===d)return r&&(t=E.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var o=e.length;if(o!==+o){var a=E.keys(e);o=a.length}if(_(e,function(s,u,c){u=a?a[--o]:--o,i?n=t.call(r,n,e[u],u,c):(n=e[u],i=!0)}),!i)throw new TypeError(S);return n},E.find=E.detect=function(e,t,n){var r;return T(e,function(e,i,o){return t.call(n,e,i,o)?(r=e,!0):void 0}),r},E.filter=E.select=function(e,t,n){var r=[];return null==e?r:m&&e.filter===m?e.filter(t,n):(_(e,function(e,i,o){t.call(n,e,i,o)&&(r[r.length]=e)}),r)},E.reject=function(e,t,n){return E.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},E.every=E.all=function(e,t,r){t||(t=E.identity);var i=!0;return null==e?i:g&&e.every===g?e.every(t,r):(_(e,function(e,o,a){return(i=i&&t.call(r,e,o,a))?void 0:n}),!!i)};var T=E.some=E.any=function(e,t,r){t||(t=E.identity);var i=!1;return null==e?i:v&&e.some===v?e.some(t,r):(_(e,function(e,o,a){return i||(i=t.call(r,e,o,a))?n:void 0}),!!i)};E.contains=E.include=function(e,t){return null!=e&&(y&&e.indexOf===y?e.indexOf(t)!=-1:T(e,function(e){return e===t}))},E.invoke=function(e,t){var n=s.call(arguments,2),r=E.isFunction(t);return E.map(e,function(e){return(r?t:e[t]).apply(e,n)})},E.pluck=function(e,t){return E.map(e,function(e){return e[t]})},E.where=function(e,t,n){return E.isEmpty(t)?n?null:[]:E[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},E.findWhere=function(e,t){return E.where(e,t,!0)},E.max=function(e,t,n){if(!t&&E.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.max.apply(Math,e);if(!t&&E.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return _(e,function(e,i,o){var a=t?t.call(n,e,i,o):e;a>=r.computed&&(r={value:e,computed:a})}),r.value},E.min=function(e,t,n){if(!t&&E.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.min.apply(Math,e);if(!t&&E.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return _(e,function(e,i,o){var a=t?t.call(n,e,i,o):e;r.computed>a&&(r={value:e,computed:a})}),r.value},E.shuffle=function(e){var t,n=0,r=[];return _(e,function(e){t=E.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return E.isFunction(e)?e:function(t){return t[e]}};E.sortBy=function(e,t,n){var r=k(t);return E.pluck(E.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index<t.index?-1:1}),"value")};var M=function(e,t,n,r){var i={},o=k(t||E.identity);return _(e,function(t,a){var s=o.call(n,t,a,e);r(i,s,t)}),i};E.groupBy=function(e,t,n){return M(e,t,n,function(e,t,n){(E.has(e,t)?e[t]:e[t]=[]).push(n)})},E.countBy=function(e,t,n){return M(e,t,n,function(e,t){E.has(e,t)||(e[t]=0),e[t]++})},E.sortedIndex=function(e,t,n,r){n=null==n?E.identity:k(n);for(var i=n.call(r,t),o=0,a=e.length;a>o;){var s=o+a>>>1;i>n.call(r,e[s])?o=s+1:a=s}return o},E.toArray=function(e){return e?E.isArray(e)?s.call(e):e.length===+e.length?E.map(e,E.identity):E.values(e):[]},E.size=function(e){return null==e?0:e.length===+e.length?e.length:E.keys(e).length},E.first=E.head=E.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:s.call(e,0,t)},E.initial=function(e,t,n){return s.call(e,0,e.length-(null==t||n?1:t))},E.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:s.call(e,Math.max(e.length-t,0))},E.rest=E.tail=E.drop=function(e,t,n){return s.call(e,null==t||n?1:t)},E.compact=function(e){return E.filter(e,E.identity)};var A=function(e,t,n){return _(e,function(e){E.isArray(e)?t?a.apply(n,e):A(e,t,n):n.push(e)}),n};E.flatten=function(e,t){return A(e,t,[])},E.without=function(e){return E.difference(e,s.call(arguments,1))},E.uniq=E.unique=function(e,t,n,r){E.isFunction(t)&&(r=n,n=t,t=!1);var i=n?E.map(e,n,r):e,o=[],a=[];return _(i,function(n,r){(t?r&&a[a.length-1]===n:E.contains(a,n))||(a.push(n),o.push(e[r]))}),o},E.union=function(){return E.uniq(u.apply(r,arguments))},E.intersection=function(e){var t=s.call(arguments,1);return E.filter(E.uniq(e),function(e){return E.every(t,function(t){return E.indexOf(t,e)>=0})})},E.difference=function(e){var t=u.apply(r,s.call(arguments,1));return E.filter(e,function(e){return!E.contains(t,e)})},E.zip=function(){for(var e=s.call(arguments),t=E.max(E.pluck(e,"length")),n=Array(t),r=0;t>r;r++)n[r]=E.pluck(e,""+r);return n},E.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},E.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=E.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;i>r;r++)if(e[r]===t)return r;return-1},E.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=r?n:e.length;i--;)if(e[i]===t)return i;return-1},E.range=function(e,t,n){1>=arguments.length&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=0,o=Array(r);r>i;)o[i++]=e,e+=n;return o},E.bind=function(e,t){if(e.bind===C&&C)return C.apply(e,s.call(arguments,1));var n=s.call(arguments,2);return function(){return e.apply(t,n.concat(s.call(arguments)))}},E.partial=function(e){var t=s.call(arguments,1);return function(){return e.apply(this,t.concat(s.call(arguments)))}},E.bindAll=function(e){var t=s.call(arguments,1);return 0===t.length&&(t=E.functions(e)),_(t,function(t){e[t]=E.bind(e[t],e)}),e},E.memoize=function(e,t){var n={};return t||(t=E.identity),function(){var r=t.apply(this,arguments);return E.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},E.delay=function(e,t){var n=s.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},E.defer=function(e){return E.delay.apply(E,[e,1].concat(s.call(arguments,1)))},E.throttle=function(e,t){var n,r,i,o,a=0,s=function(){a=new Date,i=null,o=e.apply(n,r)};return function(){var u=new Date,c=t-(u-a);return n=this,r=arguments,0>=c?(clearTimeout(i),i=null,a=u,o=e.apply(n,r)):i||(i=setTimeout(s,c)),o}},E.debounce=function(e,t,n){var r,i;return function(){var o=this,a=arguments,s=function(){r=null,n||(i=e.apply(o,a))},u=n&&!r;return clearTimeout(r),r=setTimeout(s,t),u&&(i=e.apply(o,a)),i}},E.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},E.wrap=function(e,t){return function(){var n=[e];return a.apply(n,arguments),t.apply(this,n)}},E.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},E.after=function(e,t){return 0>=e?t():function(){return 1>--e?t.apply(this,arguments):void 0}},E.keys=w||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)E.has(e,n)&&(t[t.length]=n);return t},E.values=function(e){var t=[];for(var n in e)E.has(e,n)&&t.push(e[n]);return t},E.pairs=function(e){var t=[];for(var n in e)E.has(e,n)&&t.push([n,e[n]]);return t},E.invert=function(e){var t={};for(var n in e)E.has(e,n)&&(t[e[n]]=n);return t},E.functions=E.methods=function(e){var t=[];for(var n in e)E.isFunction(e[n])&&t.push(n);return t.sort()},E.extend=function(e){return _(s.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},E.pick=function(e){var t={},n=u.apply(r,s.call(arguments,1));return _(n,function(n){n in e&&(t[n]=e[n])}),t},E.omit=function(e){var t={},n=u.apply(r,s.call(arguments,1));for(var i in e)E.contains(n,i)||(t[i]=e[i]);return t},E.defaults=function(e){return _(s.call(arguments,1),function(t){if(t)for(var n in t)null==e[n]&&(e[n]=t[n])}),e},E.clone=function(e){return E.isObject(e)?E.isArray(e)?e.slice():E.extend({},e):e},E.tap=function(e,t){return t(e),e};var D=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof E&&(e=e._wrapped),t instanceof E&&(t=t._wrapped);var i=c.call(e);if(i!=c.call(t))return!1;switch(i){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var o=n.length;o--;)if(n[o]==e)return r[o]==t;n.push(e),r.push(t);var a=0,s=!0;if("[object Array]"==i){if(a=e.length,s=a==t.length)for(;a--&&(s=D(e[a],t[a],n,r)););}else{var u=e.constructor,l=t.constructor;if(u!==l&&!(E.isFunction(u)&&u instanceof u&&E.isFunction(l)&&l instanceof l))return!1;for(var p in e)if(E.has(e,p)&&(a++,!(s=E.has(t,p)&&D(e[p],t[p],n,r))))break;if(s){for(p in t)if(E.has(t,p)&&!a--)break;s=!a}}return n.pop(),r.pop(),s};E.isEqual=function(e,t){return D(e,t,[],[])},E.isEmpty=function(e){if(null==e)return!0;if(E.isArray(e)||E.isString(e))return 0===e.length;for(var t in e)if(E.has(e,t))return!1;return!0},E.isElement=function(e){return!(!e||1!==e.nodeType)},E.isArray=x||function(e){return"[object Array]"==c.call(e)},E.isObject=function(e){return e===Object(e)},_(["Arguments","Function","String","Number","Date","RegExp"],function(e){E["is"+e]=function(t){return c.call(t)=="[object "+e+"]"}}),E.isArguments(arguments)||(E.isArguments=function(e){return!(!e||!E.has(e,"callee"))}),"function"!=typeof/./&&(E.isFunction=function(e){return"function"==typeof e}),E.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},E.isNaN=function(e){return E.isNumber(e)&&e!=+e},E.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==c.call(e)},E.isNull=function(e){return null===e},E.isUndefined=function(e){return void 0===e},E.has=function(e,t){return l.call(e,t)},E.noConflict=function(){return e._=t,this},E.identity=function(e){return e},E.times=function(e,t,n){for(var r=Array(e),i=0;e>i;i++)r[i]=t.call(n,i);return r},E.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=E.invert(I.escape);var R={escape:RegExp("["+E.keys(I.escape).join("")+"]","g"),unescape:RegExp("("+E.keys(I.unescape).join("|")+")","g")};E.each(["escape","unescape"],function(e){E[e]=function(t){return null==t?"":(""+t).replace(R[e],function(t){return I[e][t]})}}),E.result=function(e,t){if(null==e)return null;var n=e[t];return E.isFunction(n)?n.call(e):n},E.mixin=function(e){_(E.functions(e),function(t){var n=E[t]=e[t];E.prototype[t]=function(){var e=[this._wrapped];return a.apply(e,arguments),L.call(this,n.apply(E,e))}})};var O=0;E.uniqueId=function(e){var t=++O+"";return e?e+t:t},E.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var N=/(.)^/,P={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;E.template=function(e,t,n){var r;n=E.defaults({},n,E.templateSettings);var i=RegExp([(n.escape||N).source,(n.interpolate||N).source,(n.evaluate||N).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(i,function(t,n,r,i,s){return a+=e.slice(o,s).replace(j,function(e){return"\\"+P[e]}),n&&(a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(a+="';\n"+i+"\n__p+='"),o=s+t.length,t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=Function(n.variable||"obj","_",a)}catch(e){throw e.source=a,e}if(t)return r(t,E);var s=function(e){return r.call(this,e,E)};return s.source="function("+(n.variable||"obj")+"){\n"+a+"}",s},E.chain=function(e){return E(e).chain()};var L=function(e){return this._chain?E(e).chain():e};E.mixin(E),_(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];E.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],L.call(this,n)}}),_(["concat","join","slice"],function(e){var t=r[e];E.prototype[e]=function(){return L.call(this,t.apply(this._wrapped,arguments))}}),E.extend(E.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);