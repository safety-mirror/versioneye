/* ==========================================================
 * bootstrap-maxlength.js v1.3.7
 * 
 * Copyright (c) 2013 Maurizio Napoleoni; 
 *
 * Licensed under the terms of the MIT license.
 * See: https://github.com/mimo84/bootstrap-maxlength/blob/master/LICENSE
 * ========================================================== */
(function(){!function(t){"use strict";t.fn.extend({maxlength:function(e,n){function i(t){var e=t.val(),n=e.match(/\n/g),i=n?n.length:0;return t.val().length+i}function r(t,n,r){var o=!0;return!e.alwaysShow&&r-i(t)>n&&(o=!1),o}function o(t,e){var n=e-i(t);return n}function s(t){t.css({display:"block"})}function a(t){t.css({display:"none"})}function l(t,n){var i="";return e.preText&&(i+=e.preText),e.showMaxLength?i=i+n+e.separator+t:i+=n,e.postText&&(i+=e.postText),i}function u(t,n,i,o){o.html(l(i,t)),t>0?r(n,e.threshold,i)?s(o.removeClass(e.limitReachedClass).addClass(e.warningClass)):a(o):s(o.removeClass(e.warningClass).addClass(e.limitReachedClass))}function c(e){var n=e[0];return t.extend({},"function"==typeof n.getBoundingClientRect?n.getBoundingClientRect():{width:n.offsetWidth,height:n.offsetHeight},e.offset())}function h(t,n){var i=c(t),r=t.outerWidth(),o=n.outerWidth(),s=n.width(),a=n.height();switch(e.placement){case"bottom":n.css({top:i.top+i.height,left:i.left+i.width/2-s/2});break;case"top":n.css({top:i.top-a,left:i.left+i.width/2-s/2});break;case"left":n.css({top:i.top+i.height/2-a/2,left:i.left-s});break;case"right":n.css({top:i.top+i.height/2-a/2,left:i.left+i.width});break;case"bottom-right":n.css({top:i.top+i.height,left:i.left+i.width});break;case"top-right":n.css({top:i.top-a,left:i.left+r});break;case"top-left":n.css({top:i.top-a,left:i.left-o});break;case"bottom-left":n.css({top:i.top+t.outerHeight(),left:i.left-o});break;case"centered-right":n.css({top:i.top+a/2,left:i.left+r-o-3})}}function d(t){return t.attr("maxlength")||t.attr("size")}var p=t("body"),f={alwaysShow:!1,threshold:10,warningClass:"badge badge-success",limitReachedClass:"badge badge-important",separator:" / ",preText:"",postText:"",showMaxLength:!0,placement:"bottom",validate:!1};return t.isFunction(e)&&!n&&(n=e,e={}),e=t.extend(f,e),this.each(function(){var n=t(this),i=d(n),r=t("<span></span>").css({display:"none",position:"absolute",whiteSpace:"nowrap",zIndex:999}).html(l(i,"0"));n.is("textarea")&&(n.data("maxlenghtsizex",n.outerWidth()),n.data("maxlenghtsizey",n.outerHeight()),n.mouseup(function(){(n.outerWidth()!==n.data("maxlenghtsizex")||n.outerHeight()!==n.data("maxlenghtsizey"))&&h(n,r),n.data("maxlenghtsizex",n.outerWidth()),n.data("maxlenghtsizey",n.outerHeight())})),p.append(r),n.focus(function(){var t=o(n,d(n));u(t,n,i,r),h(n,r)}),n.blur(function(){r.css("display","none")}),n.keyup(function(){var t=o(n,d(n)),s=!0;return e.validate&&0>t?s=!1:u(t,n,i,r),s}),n.keydown(function(t){var e=o(n,d(n));return 0>=e&&46!==t.keyCode&&8!==t.keyCode?!1:void 0})})}})}(jQuery)}).call(this);