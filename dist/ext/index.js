!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=66)}({0:function(t,e,n){"use strict";var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.isMd=function(){return $("#cnblogs_post_body").hasClass("cnblogs-markdown")},e.randomImgurl=function(){var t=Math.floor(78*Math.random());return"".concat(i.animeImages,"/").concat(t,".jpg")},e.randomNum=function(t,e){return parseInt(Math.random()*(t-e+1)+e,10),Math.floor(Math.random()*(t-e+1)+e)},e.pageName=function(){if($("#post_detail").length>0)return"post";if($(".day").length>0)return"index";if($("#taglist_main").length>0)return"tag";if($(".entrylistPosttitle").length>0)return"list";if($("#myposts").length>0)return"tag"},e.userAgent=function(){return $(window).width()>768?"pc":"phone"},e.getClientRect=function(t){var e=t.getBoundingClientRect(),n=e.top,r=e.bottom,o=e.left,a=e.right,i=e.height,c=e.width;return{top:n,bottom:r,left:o,right:a,height:i||r-n,width:c||a-o}},e.hasPostTitle=function(){return 0!==$("#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4").length},e.poll=function(t,e){if(t)e();else var n=1,r=setInterval((function(){t&&(e(),clearInterval(r)),10===n&&clearInterval(r),n++}),800)},e.unpass=function(t){if(t){var e=document.body;e.style.position="";var n=e.style.top;document.body.scrollTop=document.documentElement.scrollTop=-parseInt(n),e.style.top=""}else{var r=document.body.scrollTop||document.documentElement.scrollTop;document.body.style.cssText+="position:fixed;width:100%;top:-"+r+"px;"}},e.randomArrayElements=function(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=t.slice(0),a=t.length,i=a-r;for(;a-- >i;)n=Math.floor((a+1)*Math.random()),e=o[n],o[n]=o[a],o[a]=e;return o.slice(i)},e.getData=function(t,e,n){$.ajax({url:t,type:e,dataType:"jsonp",success:function(t){n(t)},error:function(t){console.log("error",t)}})},e.getDate=function(){var t=new Date,e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),r=("0"+t.getDate()).slice(-2);return"".concat(e,"-").concat(n,"-").concat(r)},e.prettyLog=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ffb3cc";console.log("%c  ".concat(t),"color: ".concat(e,"; font-weight: bold;"))},e.cacheScript=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};$.ajax({type:"GET",dataType:"script",cache:!0,url:t,success:function(){e()}})},e.sleep=function(t){return c.apply(this,arguments)},e.addCss=function(t){$("head").append("<link>"),$("head").children(":last").attr({rel:"stylesheet",type:"text/css",href:t})},e.throttle=e.debounce=e.randomColor=e.randomProperty=void 0;var o=r(n(3)),a=r(n(4)),i=n(2);function c(){return(c=(0,a.default)(o.default.mark((function t(e){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.debounce=function(t,e,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||t.apply(o,a)},c=n&&!r;clearTimeout(r),r=setTimeout(i,e),c&&t.apply(o,a)}};e.throttle=function(t,e,n){var r,o=new Date;return function(){var a=this,i=arguments,c=new Date;clearTimeout(r),c-o>=n?(t.apply(a,i),o=c):r=setTimeout(t,e)}};e.randomProperty=function(t){var e,n=0;for(var r in t)Math.random()<1/++n&&(e=r);return e};e.randomColor=function(t){var e="";if("rgba"===t){var n=Math.floor(256*Math.random()),r=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());e="rgba(".concat(n,",").concat(r,",").concat(o,",").concat(.6,")")}else if("16"===t)e="#"+Math.floor(16777215*Math.random()).toString(16);else{var a=t||["#FE0302","#FF7204","#FFAA02","#FFD302","#FFFF00","#A0EE00","#00CD00","#019899","#4266BE","#89D5FF","#CC0273","#CC0273"];e=a[Math.floor(Math.random()*a.length)]}return e}},1:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},10:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return _()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function l(){}function h(){}function f(){}var p={};p[o]=function(){return this};var g=Object.getPrototypeOf,d=g&&g(g(F([])));d&&d!==e&&n.call(d,o)&&(p=d);var m=f.prototype=l.prototype=Object.create(p);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function F(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=m.constructor=f,f.constructor=h,f[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[a]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new y(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(m),m[i]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=F,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={theme:{name:"reacg",color:"#FFB3CC",title:"",avatar:"//pic.cnblogs.com/avatar/1501373/20200119190802.png",favicon:"https://guangzan.gitee.io/imagehost/awescnb/favicon.png",headerBackground:"https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg"},signature:{enable:!1,contents:[]},qrcode:{enable:!1,img:"",desc:""},notice:{enable:!1,text:[]},indexListImg:{enable:!1,imgs:[]},postTopimage:{enable:!0,imgs:[],position:"top"},emoji:{enable:!0,showRecents:!0,recentsCount:20,showPreview:!0,showSearch:!0},highLight:{type:"atomOneDark"},imagebox:{enable:!0},lineNumbers:{enable:!0},catalog:{enable:!0,position:"left"},back2top:{enable:!0,type:"complex"},tools:{enable:!0,initialOpen:!0,draggable:!1},live2d:{enable:!0,page:"all",agent:"pc",model:"haru-01",width:150,height:200,position:"left",gap:"default"},github:{enable:!0,color:"#ffb3cc",url:"https://github.com/guangzan/awescnb"},gitee:{enable:!0,color:"#C71D23",url:"https://gitee.com/guangzan/awescnb"},click:{enable:!0,auto:!1,colors:["#FF1461","#18FF92","#5A87FF","#FBF38C"],size:30,maxCount:50},topProgress:{enable:!1,page:"all",agent:"pc",background:"#FFB3CC",height:"5px"},postSignature:{enable:!1,content:[],licenseLink:""},musicPlayer:{enable:!0,page:"all",agent:"pc",autoplay:!1,audio:[{name:"イニシャル",artist:"Poppin'Party",url:"https://guangzan.gitee.io/imagehost/awescnb/music/demo1.mp3",cover:"//p2.music.126.net/ww7gcJ_erzPa8jgZesmTOA==/109951163271403502.jpg?param=90y90"}]},bodyBackground:{enable:!1,type:"img",value:"https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg",opacity:1,repeat:!1},barrage:{enable:!1,opacity:.6,colors:["#FE0302","#FF7204","#FFAA02","#FFD302","#FFFF00","#A0EE00","#00CD00","#019899","#4266BE","#89D5FF","#CC0273","#CC0273"],barrages:[],indexBarrages:[],postPageBarrages:[]},charts:{enable:!1,pie:{title:"My skills",data:{labels:["JavaScript","css","Vue","React","wechat"],values:[40,30,20,10,20]}}},lock:{enable:!0,background:"",strings:["<i>Powered by</i> webpack.","&amp; Theme in awescnb","快去自定义你的个性签名吧~"]},links:[{name:"awescnb",link:"https://gitee.com/guangzan/awescnb"}]};e.default=r},2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.jqueryui=e.linenumbersjs=e.viz=e.materialize=e.live2djs=e.randomAva=e.dummyimage=e.randomImage=e.aplayerjs=e.emojijs=e.live2d=e.animeImages=e.themeRepository=void 0;e.themeRepository="https://guangzan.gitee.io/awescnb";e.animeImages="https://guangzan.gitee.io/imagehost/awescnb/images/anime";e.live2d={url:"https://cdn.jsdelivr.net/gh/github923665892/awesCnb-live2dModels",version:"1.7"};e.emojijs="https://guangzan.gitee.io/imagehost/awescnb/js/emoji.min.js";e.aplayerjs="https://guangzan.gitee.io/imagehost/awescnb/js/APlayer.min.js";e.randomImage="https://api.mz-moe.cn/img.php";e.dummyimage="https://www.dummyimage.com/50";e.randomAva="https://i.pravatar.cc/125?image=3";e.live2djs="https://guangzan.gitee.io/imagehost/awescnb/js/live2d.min.js";e.materialize="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js";e.viz="https://guangzan.gitee.io/imagehost/awescnb/js/rough-viz.js";e.linenumbersjs="https://cdn.bootcss.com/highlightjs-line-numbers.js/2.7.0/highlightjs-line-numbers.min.js";e.jqueryui="https://code.jquery.com/ui/1.12.0/jquery-ui.js"},3:function(t,e,n){t.exports=n(10)},4:function(t,e){function n(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},66:function(t,e,n){"use strict";(0,n(1)(n(67)).default)()},67:function(t,e,n){"use strict";var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(0),a=r(n(11)),i=n(2);var c=function(){$.extend({awesCnb:function(t){t&&$.extend(!0,a.default,t),window.opts=a.default,function(){var t=window.opts.theme.name;"light"===t&&(t="reacg");var e="".concat(i.themeRepository,"/").concat(t,".js");(0,o.cacheScript)(e)}()}})};e.default=c}});