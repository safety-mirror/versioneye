(function(){var e,t=this,i=t.Backbone,n=[],a=n.push,r=n.slice,s=n.splice;e="undefined"!=typeof exports?exports:t.Backbone={},e.VERSION="1.0.0";var o=t._;o||"undefined"==typeof require||(o=require("underscore")),e.$=t.jQuery||t.Zepto||t.ender||t.$,e.noConflict=function(){return t.Backbone=i,this},e.emulateHTTP=!1,e.emulateJSON=!1;var l=e.Events={on:function(e,t,i){if(!h(this,"on",e,[t,i])||!t)return this;this._events||(this._events={});var n=this._events[e]||(this._events[e]=[]);return n.push({callback:t,context:i,ctx:i||this}),this},once:function(e,t,i){if(!h(this,"once",e,[t,i])||!t)return this;var n=this,a=o.once(function(){n.off(e,a),t.apply(this,arguments)});return a._callback=t,this.on(e,a,i)},off:function(e,t,i){var n,a,r,s,l,c,u,f;if(!this._events||!h(this,"off",e,[t,i]))return this;if(!e&&!t&&!i)return this._events={},this;for(s=e?[e]:o.keys(this._events),l=0,c=s.length;c>l;l++)if(e=s[l],r=this._events[e]){if(this._events[e]=n=[],t||i)for(u=0,f=r.length;f>u;u++)a=r[u],(t&&t!==a.callback&&t!==a.callback._callback||i&&i!==a.context)&&n.push(a);n.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var t=r.call(arguments,1);if(!h(this,"trigger",e,t))return this;var i=this._events[e],n=this._events.all;return i&&u(i,t),n&&u(n,arguments),this},stopListening:function(e,t,i){var n=this._listeners;if(!n)return this;var a=!t&&!i;"object"==typeof t&&(i=this),e&&((n={})[e._listenerId]=e);for(var r in n)n[r].off(t,i,this),a&&delete this._listeners[r];return this}},c=/\s+/,h=function(e,t,i,n){if(!i)return!0;if("object"==typeof i){for(var a in i)e[t].apply(e,[a,i[a]].concat(n));return!1}if(c.test(i)){for(var r=i.split(c),s=0,o=r.length;o>s;s++)e[t].apply(e,[r[s]].concat(n));return!1}return!0},u=function(e,t){var i,n=-1,a=e.length,r=t[0],s=t[1],o=t[2];switch(t.length){case 0:for(;++n<a;)(i=e[n]).callback.call(i.ctx);return;case 1:for(;++n<a;)(i=e[n]).callback.call(i.ctx,r);return;case 2:for(;++n<a;)(i=e[n]).callback.call(i.ctx,r,s);return;case 3:for(;++n<a;)(i=e[n]).callback.call(i.ctx,r,s,o);return;default:for(;++n<a;)(i=e[n]).callback.apply(i.ctx,t)}},f={listenTo:"on",listenToOnce:"once"};o.each(f,function(e,t){l[t]=function(t,i,n){var a=this._listeners||(this._listeners={}),r=t._listenerId||(t._listenerId=o.uniqueId("l"));return a[r]=t,"object"==typeof i&&(n=this),t[e](i,n,this),this}}),l.bind=l.on,l.unbind=l.off,o.extend(e,l);var d=e.Model=function(e,t){var i,n=e||{};t||(t={}),this.cid=o.uniqueId("c"),this.attributes={},o.extend(this,o.pick(t,p)),t.parse&&(n=this.parse(n,t)||{}),(i=o.result(this,"defaults"))&&(n=o.defaults({},n,i)),this.set(n,t),this.changed={},this.initialize.apply(this,arguments)},p=["url","urlRoot","collection"];o.extend(d.prototype,l,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return o.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return o.escape(this.get(e))},has:function(e){return null!=this.get(e)},set:function(e,t,i){var n,a,r,s,l,c,h,u;if(null==e)return this;if("object"==typeof e?(a=e,i=t):(a={})[e]=t,i||(i={}),!this._validate(a,i))return!1;r=i.unset,l=i.silent,s=[],c=this._changing,this._changing=!0,c||(this._previousAttributes=o.clone(this.attributes),this.changed={}),u=this.attributes,h=this._previousAttributes,this.idAttribute in a&&(this.id=a[this.idAttribute]);for(n in a)t=a[n],o.isEqual(u[n],t)||s.push(n),o.isEqual(h[n],t)?delete this.changed[n]:this.changed[n]=t,r?delete u[n]:u[n]=t;if(!l){s.length&&(this._pending=!0);for(var f=0,d=s.length;d>f;f++)this.trigger("change:"+s[f],this,u[s[f]],i)}if(c)return this;if(!l)for(;this._pending;)this._pending=!1,this.trigger("change",this,i);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,o.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var i in this.attributes)t[i]=void 0;return this.set(t,o.extend({},e,{unset:!0}))},hasChanged:function(e){return null==e?!o.isEmpty(this.changed):o.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?o.clone(this.changed):!1;var t,i=!1,n=this._changing?this._previousAttributes:this.attributes;for(var a in e)o.isEqual(n[a],t=e[a])||((i||(i={}))[a]=t);return i},previous:function(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null},previousAttributes:function(){return o.clone(this._previousAttributes)},fetch:function(e){e=e?o.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=this,i=e.success;return e.success=function(n){return t.set(t.parse(n,e),e)?(i&&i(t,n,e),void t.trigger("sync",t,n,e)):!1},Q(this,e),this.sync("read",this,e)},save:function(e,t,i){var n,a,r,s=this.attributes;if(null==e||"object"==typeof e?(n=e,i=t):(n={})[e]=t,!(!n||i&&i.wait||this.set(n,i)))return!1;if(i=o.extend({validate:!0},i),!this._validate(n,i))return!1;n&&i.wait&&(this.attributes=o.extend({},s,n)),void 0===i.parse&&(i.parse=!0);var l=this,c=i.success;return i.success=function(e){l.attributes=s;var t=l.parse(e,i);return i.wait&&(t=o.extend(n||{},t)),o.isObject(t)&&!l.set(t,i)?!1:(c&&c(l,e,i),void l.trigger("sync",l,e,i))},Q(this,i),a=this.isNew()?"create":i.patch?"patch":"update","patch"===a&&(i.attrs=n),r=this.sync(a,this,i),n&&i.wait&&(this.attributes=s),r},destroy:function(e){e=e?o.clone(e):{};var t=this,i=e.success,n=function(){t.trigger("destroy",t,t.collection,e)};if(e.success=function(a){(e.wait||t.isNew())&&n(),i&&i(t,a,e),t.isNew()||t.trigger("sync",t,a,e)},this.isNew())return e.success(),!1;Q(this,e);var a=this.sync("delete",this,e);return e.wait||n(),a},url:function(){var e=o.result(this,"urlRoot")||o.result(this.collection,"url")||L();return this.isNew()?e:e+("/"===e.charAt(e.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(e){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(e){return this._validate({},o.extend(e||{},{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=o.extend({},this.attributes,e);var i=this.validationError=this.validate(e,t)||null;return i?(this.trigger("invalid",this,i,o.extend(t||{},{validationError:i})),!1):!0}});var m=["keys","values","pairs","invert","pick","omit"];o.each(m,function(e){d.prototype[e]=function(){var t=r.call(arguments);return t.unshift(this.attributes),o[e].apply(o,t)}});var g=e.Collection=function(e,t){t||(t={}),t.url&&(this.url=t.url),t.model&&(this.model=t.model),void 0!==t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,o.extend({silent:!0},t))},b={add:!0,remove:!0,merge:!0},v={add:!0,merge:!1,remove:!1};o.extend(g.prototype,l,{model:d,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return e.sync.apply(this,arguments)},add:function(e,t){return this.set(e,o.defaults(t||{},v))},remove:function(e,t){e=o.isArray(e)?e.slice():[e],t||(t={});var i,n,a,r;for(i=0,n=e.length;n>i;i++)r=this.get(e[i]),r&&(delete this._byId[r.id],delete this._byId[r.cid],a=this.indexOf(r),this.models.splice(a,1),this.length--,t.silent||(t.index=a,r.trigger("remove",r,this,t)),this._removeReference(r));return this},set:function(e,t){t=o.defaults(t||{},b),t.parse&&(e=this.parse(e,t)),o.isArray(e)||(e=e?[e]:[]);var i,n,r,l,c,h=t.at,u=this.comparator&&null==h&&t.sort!==!1,f=o.isString(this.comparator)?this.comparator:null,d=[],p=[],m={};for(i=0,n=e.length;n>i;i++)(r=this._prepareModel(e[i],t))&&((l=this.get(r))?(t.remove&&(m[l.cid]=!0),t.merge&&(l.set(r.attributes,t),u&&!c&&l.hasChanged(f)&&(c=!0))):t.add&&(d.push(r),r.on("all",this._onModelEvent,this),this._byId[r.cid]=r,null!=r.id&&(this._byId[r.id]=r)));if(t.remove){for(i=0,n=this.length;n>i;++i)m[(r=this.models[i]).cid]||p.push(r);p.length&&this.remove(p,t)}if(d.length&&(u&&(c=!0),this.length+=d.length,null!=h?s.apply(this.models,[h,0].concat(d)):a.apply(this.models,d)),c&&this.sort({silent:!0}),t.silent)return this;for(i=0,n=d.length;n>i;i++)(r=d[i]).trigger("add",r,this,t);return c&&this.trigger("sort",this,t),this},reset:function(e,t){t||(t={});for(var i=0,n=this.models.length;n>i;i++)this._removeReference(this.models[i]);return t.previousModels=this.models,this._reset(),this.add(e,o.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,o.extend({at:this.length},t)),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,o.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(e,t){return this.models.slice(e,t)},get:function(e){return null==e?void 0:this._byId[null!=e.id?e.id:e.cid||e]},at:function(e){return this.models[e]},where:function(e,t){return o.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var i in e)if(e[i]!==t.get(i))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),o.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(o.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},sortedIndex:function(e,t,i){t||(t=this.comparator);var n=o.isFunction(t)?t:function(e){return e.get(t)};return o.sortedIndex(this.models,e,n,i)},pluck:function(e){return o.invoke(this.models,"get",e)},fetch:function(e){e=e?o.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=e.success,i=this;return e.success=function(n){var a=e.reset?"reset":"set";i[a](n,e),t&&t(i,n,e),i.trigger("sync",i,n,e)},Q(this,e),this.sync("read",this,e)},create:function(e,t){if(t=t?o.clone(t):{},!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var i=this,n=t.success;return t.success=function(a){t.wait&&i.add(e,t),n&&n(e,a,t)},e.save(null,t),e},parse:function(e){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof d)return e.collection||(e.collection=this),e;t||(t={}),t.collection=this;var i=new this.model(e,t);return i._validate(e,t)?i:(this.trigger("invalid",this,e,t),!1)},_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,i,n){("add"!==e&&"remove"!==e||i===this)&&("destroy"===e&&this.remove(t,n),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],null!=t.id&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments))}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];o.each(y,function(e){g.prototype[e]=function(){var t=r.call(arguments);return t.unshift(this.models),o[e].apply(o,t)}});var w=["groupBy","countBy","sortBy"];o.each(w,function(e){g.prototype[e]=function(t,i){var n=o.isFunction(t)?t:function(e){return e.get(t)};return o[e](this.models,n,i)}});var _=e.View=function(e){this.cid=o.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},k=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];o.extend(_.prototype,l,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,i){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],i!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=o.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var i=e[t];if(o.isFunction(i)||(i=this[e[t]]),i){var n=t.match(k),a=n[1],r=n[2];i=o.bind(i,this),a+=".delegateEvents"+this.cid,""===r?this.$el.on(a,i):this.$el.on(a,r,i)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(e){this.options&&(e=o.extend({},o.result(this,"options"),e)),o.extend(this,o.pick(e,x)),this.options=e},_ensureElement:function(){if(this.el)this.setElement(o.result(this,"el"),!1);else{var t=o.extend({},o.result(this,"attributes"));this.id&&(t.id=o.result(this,"id")),this.className&&(t["class"]=o.result(this,"className"));var i=e.$("<"+o.result(this,"tagName")+">").attr(t);this.setElement(i,!1)}}}),e.sync=function(t,i,n){var a=C[t];o.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var r={type:a,dataType:"json"};if(n.url||(r.url=o.result(i,"url")||L()),null!=n.data||!i||"create"!==t&&"update"!==t&&"patch"!==t||(r.contentType="application/json",r.data=JSON.stringify(n.attrs||i.toJSON(n))),n.emulateJSON&&(r.contentType="application/x-www-form-urlencoded",r.data=r.data?{model:r.data}:{}),n.emulateHTTP&&("PUT"===a||"DELETE"===a||"PATCH"===a)){r.type="POST",n.emulateJSON&&(r.data._method=a);var s=n.beforeSend;n.beforeSend=function(e){return e.setRequestHeader("X-HTTP-Method-Override",a),s?s.apply(this,arguments):void 0}}"GET"===r.type||n.emulateJSON||(r.processData=!1),"PATCH"!==r.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(r.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var l=n.xhr=e.ajax(o.extend(r,n));return i.trigger("request",i,l,n),l};var C={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var j=e.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},F=/\((.*?)\)/g,S=/(\(\?)?:\w+/g,B=/\*\w+/g,E=/[\-{}\[\]+?.,\\\^$|#\s]/g;o.extend(j.prototype,l,{initialize:function(){},route:function(t,i,n){o.isRegExp(t)||(t=this._routeToRegExp(t)),o.isFunction(i)&&(n=i,i=""),n||(n=this[i]);var a=this;return e.history.route(t,function(r){var s=a._extractParameters(t,r);n&&n.apply(a,s),a.trigger.apply(a,["route:"+i].concat(s)),a.trigger("route",i,s),e.history.trigger("route",a,i,s)}),this},navigate:function(t,i){return e.history.navigate(t,i),this},_bindRoutes:function(){if(this.routes){this.routes=o.result(this,"routes");for(var e,t=o.keys(this.routes);null!=(e=t.pop());)this.route(e,this.routes[e])}},_routeToRegExp:function(e){return e=e.replace(E,"\\$&").replace(F,"(?:$1)?").replace(S,function(e,t){return t?e:"([^/]+)"}).replace(B,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){var i=e.exec(t).slice(1);return o.map(i,function(e){return e?decodeURIComponent(e):null})}});var T=e.History=function(){this.handlers=[],o.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},A=/^[#\/]|\s+$/g,q=/^\/+|\/+$/g,D=/msie [\w.]+/,M=/\/$/;T.started=!1,o.extend(T.prototype,l,{interval:50,getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(null==e)if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var i=this.root.replace(M,"");e.indexOf(i)||(e=e.substr(i.length))}else e=this.getHash();return e.replace(A,"")},start:function(t){if(T.started)throw new Error("Backbone.history has already been started");T.started=!0,this.options=o.extend({},{root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var i=this.getFragment(),n=document.documentMode,a=D.exec(navigator.userAgent.toLowerCase())&&(!n||7>=n);this.root=("/"+this.root+"/").replace(q,"/"),a&&this._wantsHashChange&&(this.iframe=e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(i)),this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!a?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=i;var r=this.location,s=r.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!s?(this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&s&&r.hash&&(this.fragment=this.getHash().replace(A,""),this.history.replaceState({},document.title,this.root+this.fragment+r.search)),this.options.silent?void 0:this.loadUrl())},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),T.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(){var e=this.getFragment();return e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e===this.fragment?!1:(this.iframe&&this.navigate(e),void(this.loadUrl()||this.loadUrl(this.getHash())))},loadUrl:function(e){var t=this.fragment=this.getFragment(e),i=o.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0});return i},navigate:function(e,t){if(!T.started)return!1;if(t&&t!==!0||(t={trigger:t}),e=this.getFragment(e||""),this.fragment!==e){this.fragment=e;var i=this.root+e;if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}t.trigger&&this.loadUrl(e)}},_updateHash:function(e,t,i){if(i){var n=e.href.replace(/(javascript:|#).*$/,"");e.replace(n+"#"+t)}else e.hash="#"+t}}),e.history=new T;var P=function(e,t){var i,n=this;i=e&&o.has(e,"constructor")?e.constructor:function(){return n.apply(this,arguments)},o.extend(i,n,t);var a=function(){this.constructor=i};return a.prototype=n.prototype,i.prototype=new a,e&&o.extend(i.prototype,e),i.__super__=n.prototype,i};d.extend=g.extend=j.extend=_.extend=T.extend=P;var L=function(){throw new Error('A "url" property or function must be specified')},Q=function(e,t){var i=t.error;t.error=function(n){i&&i(e,n,t),e.trigger("error",e,n,t)}}}).call(this);