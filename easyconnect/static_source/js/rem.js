/**
 * Module: rem - v1.2.4
 * Description: A polyfill to parse CSS links and rewrite pixel equivalents into head for non supporting browsers
 * Date Built: 2014-06-21
 * Copyright (c) 2014  | Chuck Carpenter <chuck.carpenter@me.com>,Lucas Serven <lserven@gmail.com>;
**/
!function(a){"use strict";var b=function(){var a=document.createElement("div");return a.style.cssText="font-size: 1rem;",/rem/.test(a.style.fontSize)},c=function(){for(var a=document.getElementsByTagName("link"),b=[],c=0;c<a.length;c++)"stylesheet"===a[c].rel.toLowerCase()&&null===a[c].getAttribute("data-norem")&&b.push(a[c].href);return b},d=function(){0===p.length&&(p=c());for(var a=0;a<p.length;a++)j(p[a],e,p[a],a)},e=function(a,b){if(t.push(a.responseText),u.push(b),u.length===p.length){for(var c=0;c<u.length;c++)f(t[c],u[c]);(p=q.slice(0)).length>0?(u=[],t=[],q=[],d()):g()}},f=function(a,b){for(var c,d=k(m(a)),e=/[\w\d\s\-\/\\\[\]:,.'"*()<>+~%#^$_=|@]+\{[\w\d\s\-\/\\%#:!;,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!;,.'"*()]*\}/g,f=d.match(e),g=/\d*\.?\d+rem/g,h=d.match(g),i=/(.*\/)/,j=i.exec(b)[0],l=/@import (?:url\()?['"]?([^'\)"]*)['"]?\)?[^;]*/gm;null!==(c=l.exec(a));)q.push(j+c[1]);null!==f&&0!==f.length&&(r=r.concat(f),s=s.concat(h))},g=function(){for(var a=/[\w\d\s\-\/\\%#:,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!,.'"*()]*[;}]/g,b=0;b<r.length;b++){o+=r[b].substr(0,r[b].indexOf("{")+1);for(var c=r[b].match(a),d=0;d<c.length;d++)o+=c[d],d===c.length-1&&"}"!==o[o.length-1]&&(o+="\n}")}h()},h=function(){for(var a=0;a<s.length;a++)v[a]=Math.round(parseFloat(s[a].substr(0,s[a].length-3)*w))+"px";i()},i=function(){for(var a=0;a<v.length;a++)v[a]&&(o=o.replace(s[a],v[a]));var b=document.createElement("style");b.setAttribute("type","text/css"),b.id="remReplace",document.getElementsByTagName("head")[0].appendChild(b),b.styleSheet?b.styleSheet.cssText=o:b.appendChild(document.createTextNode(o))},j=function(b,c,d){try{var e=n(),f=document.all;e.open("GET",b,!0),e.send(null),e.onreadystatechange=!f||f&&a.XMLHttpRequest?function(){4===e.readyState&&c(e,d)}:new function(){4===e.readyState&&c(e,d)}}catch(g){if(a.XDomainRequest){var h=new XDomainRequest;h.open("get",b),h.onload=function(){c(h,d)},h.onerror=function(){return!1},h.send()}}},k=function(a){for(var b=a.search(/\/\*/),c=a.search(/\*\//);b>-1&&c>b;)a=a.substring(0,b)+a.substring(c+2),b=a.search(/\/\*/),c=a.search(/\*\//);return a},l=function(){return a.matchMedia||a.msMatchMedia?!0:!1},m=function(a){return l()||(a=a.replace(/@media[\s\S]*?\}\s*\}/g,"")),a},n=function(){if(a.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP")}catch(b){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}};if(!b()){var o="",p=[],q=[],r=[],s=[],t=[],u=[],v=[],w="";w=function(){var a,b=document,c=b.documentElement,d=b.body||b.createElement("body"),e=!b.body,f=b.createElement("div"),g=d.style.fontSize;return e&&c.appendChild(d),f.style.cssText="width:1em; position:absolute; visibility:hidden; padding: 0;",d.style.fontSize="1em",d.appendChild(f),a=f.offsetWidth,e?c.removeChild(d):(d.removeChild(f),d.style.fontSize=g),a}(),d()}}(window);