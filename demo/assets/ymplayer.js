!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("YMPlayer",[],e):"object"==typeof exports?exports.YMPlayer=e():t.YMPlayer=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/assets/",e(e.s=6)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}/**
 * YMPlayer: Just a simple and diligent HTML5 audio player made with love.
 *
 * @package  ymplayer
 * @author   kirainmoe
 * @version  4.0
 * @link     https://github.com/kirainmoe/ymplayer
 * @license  MIT
 */
Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(3);var l=function(){function t(){r(this,t),this.icons={pause:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z"/></svg>',play:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"/></svg>',stop:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 192v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>',loop:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/></svg>',list:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm-1536-1152v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"/></svg>',lyric:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1596 476q14 14 28 36h-472v-472q22 14 36 28zm-476 164h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544q0 40 28 68t68 28zm160 736v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23z"/></svg>',volume:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1088 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z"/></svg>',mute:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1280 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z"/></svg>',angleUp:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>',angleDown:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>',fullscreen:'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>'},this.balloonState=!0,this.fullscreenState=!1}return o(t,[{key:"init",value:function(){if(!document.querySelectorAll)throw"YMPlayer requires Internet Explorer 10 or higher version.";var t=document.querySelectorAll("ymplayer, .ymplayer");if(0!=t.length)for(var e in t)t[e]instanceof HTMLElement&&this.serialize(t[e]);return this}},{key:"serialize",value:function(t){var e=this;if(!document.createElement("audio").play)return t.innerHTML='<div class="yp-upgradeBrowser">It seems that your browser does not support HTML 5 Audio.</div>',!1;if(!t.querySelector("audio")){t.setAttribute("box","inactive"),t.oncontextmenu=function(t){return t.preventDefault()},this.resizer(t),window.addEventListener("resize",function(){return e.resizer(t)});for(var n=void 0,r=t.querySelectorAll("song"),i=[],o=this,l=0;l<r.length;l++){var s=this.make("single",{index:l,src:r[l].attributes.src.value,title:r[l].attributes.title.value,artist:r[l].attributes.artist.value,cover:r[l].attributes.cover.value},[this.make("span","class=yp-listNumber",String(l+1)),this.make("span","class=yp-listTitle",r[l].attributes.title.value),this.make("span","class=yp-listArtist",r[l].attributes.artist.value)],{click:function(){o.change(t,this,!0)}});i.push(s),0===l&&(s.classList.add("yp-currentSingle"),n=s)}var a=this.make("div","class=yp-progressBar",[this.make("div","class=yp-progressBar__outside",this.make("div","class=yp-progressBar__inner",[this.make("span","class=yp-circle|for=progressBar",null,{mousedown:function(){t.setAttribute("drag","progressDragging"),o.mouseEvent=document.body.onmousemove,document.body.onmousemove=function(e){var n=this;o.changeProgress(t,e),this.onmouseup=function(){return n.onmousemove=o.mouseEvent}}}}),this.make("div","class=yp-lyricBalloon|inactive=yes|empty=true",'<p></p><span class="yp-tail"></span>',{click:function(t){t.preventDefault(),t.stopPropagation()}})]),{click:function(e){t.setAttribute("drag","progress"),o.changeProgress(t,e)}})]),p=this.make("div","class=yp-controller",[this.make("div","class=yp-singleInfo",[this.make("div",{className:"yp-albumImg",style:"background-image: url();"}),this.make("div","class=yp-singleDetail",[this.make("p","class=yp-singleTitle",null),this.make("p","class=yp-singleArtist",null)])]),this.make("div","class=yp-toggler",[this.make("i","class=yp-button__play",this.icons.play,{click:function(){return e.togglePlay(t)}}),this.make("i","class=yp-button__stop",this.icons.stop,{click:function(){return e.stop(t)}}),this.make("i","class=yp-button__loop",this.icons.loop,{click:function(){return e.toggleLoop(t)}}),this.make("i","class=yp-button__list",this.icons.list,{click:function(){return e.toggleBox(t)}}),this.make("i","class=yp-button__fullscreen",this.icons.fullscreen,{click:function(){return e.requestFullscreen(t)}}),this.make("div","class=yp-volumeBar",[this.make("div","class=yp-volumeBar__inner",[this.make("span","class=yp-circle")])],{click:function(e){o.changeVolume(t,e)}})])]),c=this.make("div","class=yp-extendBox",[this.make("div","class=yp-lyricBox",[this.make("div","class=yp-lyricContainer"),this.make("div","class=yp-lrcFixer|disabled=disabled",[this.make("span","class=yp-fixButton__slower|title=将歌词延后 0.5s",this.icons.angleUp,{click:function(n){e.parentNode.getAttribute("disabled")||(n.preventDefault(),n.stopPropagation(),t.setAttribute("current-lrc-timeoffset",Number(t.getAttribute("current-lrc-timeoffset"))-.5),o.syncLyric(t))}}),this.make("span","class=yp-fixButton__faster|title=将歌词提前 0.5s",this.icons.angleDown,{click:function(n){e.parentNode.getAttribute("disabled")||(n.preventDefault(),n.stopPropagation(),t.setAttribute("current-lrc-timeoffset",Number(t.getAttribute("current-lrc-timeoffset"))+.5),o.syncLyric(t))}})])],{click:function(){return o.toggleFixer(t)}}),this.make("div","class=yp-playList",i)]),u=this.make("audio","preload=no",null,{play:function(){return t.setAttribute("playing","playing")},pause:function(){return t.removeAttribute("playing")},error:function(){var e=t.querySelector(".yp-currentSingle");if(e){var n=e.nextSibling;n&&o.change(t,n,!0)}},ended:function(){t.removeAttribute("playing");var e=t.querySelector(".yp-currentSingle");"true"==t.getAttribute("loop")?o.change(t,e,!0):e.nextSibling&&o.change(t,e.nextSibling,!0)},volumechange:function(){return t.querySelector(".yp-volumeBar__inner").style.width=String(100*e.volume)+"%"},timeupdate:function(){var e=this.currentTime/this.duration;t.querySelector(".yp-progressBar__inner").style.width=String(100*e)+"%",o.syncLyric(t,this.currentTime)}}),y=this.make("div","class=yp-container",[a,p,c,u]);return t.appendChild(y),n&&this.change(t,n,!1),this}}},{key:"togglePlay",value:function(t){var e=t.querySelector("audio"),n=t.querySelector(".yp-button__play");return!1!==e.paused?(n.innerHTML=this.icons.pause,e.play(),"inactive"==t.getAttribute("box")&&t.querySelector(".yp-lyricBalloon").setAttribute("inactive","no"),this.balloonState&&this.changeBalloonPosition(t)):(n.innerHTML=this.icons.play,e.pause(),t.querySelector(".yp-lyricBalloon").setAttribute("inactive","yes")),this}},{key:"stop",value:function(t){var e=t.querySelector("audio"),n=t.querySelector(".yp-lyricBalloon");return t.setAttribute("playing","stoped"),t.querySelector(".yp-button__play").innerHTML=this.icons.play,e.pause(),e.currentTime=0,n.setAttribute("inactive","yes"),n.setAttribute("empty","true"),this}},{key:"toggleLoop",value:function(t){var e=t.getAttribute("loop"),n=t.querySelector(".yp-button__loop > svg > path");return"true"==e?(t.setAttribute("loop","false"),n.style.fill="#FFF"):(t.setAttribute("loop","true"),n.style.fill="#B3E5FC"),this}},{key:"syncLyric",value:function(t,e){if(t.getAttribute("current-lrc")){var n=void 0==e?t.querySelector("audio").currentTime:e,r=t.querySelectorAll(".yp-lyricContainer > lyric"),i=void 0;n+=Number(t.getAttribute("current-lrc-timeoffset"));for(var o=0;o<r.length-1;o++){var l=Number(r[o].getAttribute("timeline")),s=Number(r[o+1].getAttribute("timeline"));o<=0&&n<l?i=-1:o==r.length-2&&n>s?i=o+1:n<s&&n>=l&&(i=o)}void 0===i&&(i=-1),t.setAttribute("current-lrc",i);for(var a=t.querySelectorAll(".yp-currentLyric"),p=t.querySelector(".yp-lyricBox"),c=t.querySelector(".yp-lyricContainer"),u=0;u<a.length;u++)a[u].classList.remove("yp-currentLyric");if(i<0)c.setAttribute("style","transform: translateY(0px)");else{if(r[i].classList.add("yp-currentLyric"),-1!=i){var y=r[i].querySelector(".yp-lyricContent"),h=t.querySelector(".yp-lyricBalloon > p"),d=r[i].getElementsByTagName("p")[0];y&&(y=y.innerHTML),void 0!==d&&(h.parentNode.style.width=d.offsetWidth+"px",this.balloonState&&this.changeBalloonPosition(t)),h.innerHTML=y,null==y?h.parentNode.setAttribute("empty","true"):h.parentNode.hasAttribute("empty")&&h.parentNode.removeAttribute("empty")}var f=this.fullscreenState?document.body.offsetHeight-60:p.offsetHeight,m=r[i].offsetTop-Math.abs(f-r[i].offsetHeight)/2;m<0&&(m=0);var g=String(-m);c.setAttribute("style","transform: translateY("+g+"px);-webkit-transform: translateY("+g+"px);-moz-transform: translateY("+g+"px);-ms-transform: translateY("+g+"px);")}return this}}},{key:"toggleFixer",value:function(t){if(t.hasAttribute("current-lrc")){var e=t.querySelector(".yp-lrcFixer");e.getAttribute("disabled")?e.removeAttribute("disabled"):e.setAttribute("disabled","disabled")}return this}},{key:"changeBalloonPosition",value:function(t){var e=this.getRect(t.querySelector('.yp-circle[for="progressBar"]')).left-this.getRect(t).left+8,n=t.querySelector(".yp-lyricBalloon");return n.style.left=String(Math.round(e)-n.offsetWidth/2)+"px",this}},{key:"changeProgress",value:function(t,e){var n=t.querySelector("audio"),r=t.querySelector(".yp-progressBar"),i=this.getRect(r);return isNaN(n.duration)||(n.currentTime=n.duration*(e.clientX-i.left)/r.offsetWidth),this}},{key:"changeVolume",value:function(t,e){var n=t.querySelector("audio"),r=t.querySelector(".yp-volumeBar"),i=this.getRect(r),o=(e.clientX-i.left)/r.offsetWidth;return n.volume=o,r.querySelector(".yp-volumeBar__inner").style.width=100*o+"%",this}},{key:"parseLrc",value:function(t,e){t.removeAttribute("current-lrc"),t.removeAttribute("current-lrc-timeoffset");var n=t.getElementsByClassName("yp-lyricContainer"),r=t.querySelectorAll("song")[e].querySelector("lyric"),i=[];n[0].innerHTML="";var o=void 0;if(r?o=r.innerHTML.replace(/\\n/g,"\n").replace(/\\r/g,"\r"):(n[0].innerHTML='<div class="yp-nolyric" style="text-align: center;"><p>没有找到这首歌的歌词 OvO 请欣赏。</p></div>',n[0].style.transform="translateY(0px)"),!o)return!1;for(var l=String(o).split("\n"),s=0;s<l.length;s++){var a=l[s].replace(/(^\s*)|(\s*$)/g,"");if(a&&!a.match(/\[(ti:|ar:|al:|by:)/g)){var p=[],c=/^(\[\d+:\d+(.\d+)?\])(.*)/g.exec(a);if(!c)break;p.push(c[1]),a=c[c.length-1].replace(/(^\s*)|(\s*$)/g,"");for(var u=0;u<p.length;u++){var y=/^\[(\d{1,2}):(\d|[0-5]\d)(\.(\d+))?\]$/g.exec(p[u]);y&&i.push({timestamp:60*Number(y[1])+Number(y[2])+(y[4]?Number("0."+y[4]):0),text:a})}}}i.sort(function(t,e){return t.timestamp>e.timestamp?1:-1});var h=t.querySelectorAll("song")[e].querySelectorAll("translation"),d=[],f=!1;if(h.length>0){h=h[0].innerHTML.replace(/\\n/g,"\n").replace(/\\r/g,"\r").split("\n"),f=!0;for(var m=0;m<h.length;m++)d.push(h[m])}if(i.length>0){for(var g=0;g<i.length;g++){var v=this.make("lyric",{timeline:i[g].timestamp},i[g].text?'<p><span class="yp-lyricContent">'+i[g].text+"</span>"+(f?'<br><span class="yp-translation">'+d[g]:"</span>")+"</p>":"");n[0].appendChild(v)}t.setAttribute("current-lrc",-1),t.setAttribute("current-lrc-timeoffset",0)}return this}},{key:"toggleBox",value:function(t){return"active"==t.getAttribute("box")?(t.setAttribute("box","inactive"),t.classList.remove("yp-boxActived"),this.balloonState&&t.querySelector(".yp-lyricBalloon").setAttribute("inactive","no")):(t.setAttribute("box","active"),t.classList.add("yp-boxActived"),t.querySelector(".yp-lyricBalloon").setAttribute("inactive","yes")),this}},{key:"resizer",value:function(t){var e=t.offsetWidth;if(e<=640){this.balloonState=!1;var n=t.querySelector(".yp-lyricBalloon");n&&n.setAttribute("inactive","yes"),e<=500?t.classList.add("yp-responsive__500px"):t.classList.add("yp-responsive__640px")}else this.balloonState=!0,t.classList.toggle("yp-responsive__640px",!1),t.classList.toggle("yp-responsive__500px",!1);return this}},{key:"change",value:function(t,e,n){var r=t.querySelector("audio");return t.removeAttribute("playing"),t.querySelector(".yp-singleTitle").innerHTML=e.getAttribute("title"),t.querySelector(".yp-singleArtist").innerHTML=e.getAttribute("artist"),t.querySelector(".yp-albumImg").setAttribute("style","background-image: url("+e.getAttribute("cover")+");"),t.querySelectorAll("single.yp-currentSingle")[0].classList.remove("yp-currentSingle"),e.classList.add("yp-currentSingle"),r.setAttribute("src",e.getAttribute("src")),this.parseLrc(t,e.getAttribute("index")),n&&this.stop(t).togglePlay(t),this}},{key:"getRect",value:function(t){var e=t.getBoundingClientRect(),n=document.documentElement.clientTop,r=document.documentElement.clientLeft;return{top:e.top-n,bottom:e.bottom-n,left:e.left-r,right:e.right-r}}},{key:"inRect",value:function(t,e,n){return e>=t.left&&e<=t.right&&n>=t.top&&n<=t.bottom}},{key:"requestFullscreen",value:function(t){if(function(){return!!document.fullscreenElement||(!!document.webkitFullscreenElement||!!document.mozFullscreenElement)}())document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozExitFullscreen&&document.mozExitFullscreen(),this.fullscreenState=!1,t.setAttribute("box","inactive"),t.classList.toggle("yp-boxActived",!1);else{if(!(t.requestFFullscreenElementullscreen?t.requestFullscreen()||!0:t.webkitRequestFullscreen?t.webkitRequestFullscreen()||!0:!!t.mozRequestFullscreen&&(t.mozRequestFullscreen()||!0)))throw"Microsoft 家的 Internet Explorer 暂时不支持（以后也不会支持） HTML5 fullscreen API.";this.fullscreenState=!0,t.setAttribute("box","active")}return this}},{key:"make",value:function(t,e,n,r){var o=document.createElement(t);if(e&&null!=e)switch(void 0===e?"undefined":i(e)){case"string":e.split("|").forEach(function(t){var e=t.split("=");o.setAttribute(e[0],e[1])});break;case"object":var l=void 0;for(var s in e)l="className"==s?"class":s,o.setAttribute(l,e[s])}if(n&&null!=n)switch(void 0===n?"undefined":i(n)){case"object":n instanceof HTMLElement?o.appendChild(n):n instanceof Array&&n.forEach(function(t){o.appendChild(t)});break;case"string":o.innerHTML=n}if(r&&null!=r)for(var a in r)o.addEventListener(a,r[a]);if(e&&e.stringify){var p=document.createElement("div");return p.appendChild(o),p.innerHTML}return o}},{key:"render",value:function(t,e){var n=this,r=[];t.forEach(function(t){var e=t.title,i=t.artist,o=t.cover,l=t.src,s=t.lyric,a=t.translation?t.translation:void 0,p=[n.make("lyric",null,s)];void 0==a||p.push(n.make("translation",null,a));var c=n.make("song",{title:e,artist:i,cover:o,src:l},p);r.push(c)});var i=this.make("ymplayer",null,r);return e.appendChild(i),this.serialize(i),i}}]),t}();e.default=l},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],e))}else{for(var l=[],o=0;o<r.parts.length;o++)l.push(c(r.parts[o],e));d[r.id]={id:r.id,refs:1,parts:l}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],l=e.base?o[0]+e.base:o[0],s=o[1],a=o[2],p=o[3],c={css:s,media:a,sourceMap:p};r[l]?r[l].parts.push(c):n.push(r[l]={id:l,parts:[c]})}return n}function o(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function l(t){t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",p(e,t.attrs),o(t,e),e}function a(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",p(e,t.attrs),o(t,e),e}function p(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function c(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var p=v++;n=g||(g=s(e)),r=u.bind(null,n,p,!1),i=u.bind(null,n,p,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(e),r=h.bind(null,n,e),i=function(){l(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=y.bind(null,n),i=function(){l(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function u(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(o,l[e]):t.appendChild(o)}}function y(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=b(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var l=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(l),s&&URL.revokeObjectURL(s)}var d={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,v=0,x=[],b=n(2);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},void 0===e.singleton&&(e.singleton=f()),void 0===e.insertInto&&(e.insertInto="head"),void 0===e.insertAt&&(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],l=0;l<n.length;l++){var s=n[l],a=d[s.id];a.refs--,o.push(a)}if(t){r(i(t,e),e)}for(var l=0;l<o.length;l++){var a=o[l];if(0===a.refs){for(var p=0;p<a.parts.length;p++)a.parts[p]();delete d[a.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(1)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(5)(void 0),e.push([t.i,"/**\n * YMPlayer 4 / SCSS style file\n *\n * @author  kirainmoe\n * @version 4.0\n * @link    https://github.com/kirainmoe/ymplayer\n * \n * Copyright 2016  | The MIT Lincense\n */\nymplayer {\n  width: 100%;\n  height: 60px;\n  display: block;\n  color: #fff;\n  background: #34bdcf;\n  margin-top: 55px;\n  /* for progress bar */\n  position: relative;\n  transition: 0.3s all ease-in-out;\n  -ms-transition: 0.3s all ease-in-out;\n  -moz-transition: 0.3s all ease-in-out;\n  -webkit-transition: 0.3s all ease-in-out;\n}\n\nymplayer, ymplayer * {\n  box-sizing: border-box;\n}\n\nymplayer svg {\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px;\n  cursor: pointer;\n  transition: 0.2s all;\n  -ms-transition: 0.2s all;\n  -moz-transition: 0.2s all;\n  -webkit-transition: 0.2s all;\n}\n\nymplayer svg path {\n  fill: #fff;\n  transition: 0.2s all;\n  -ms-transition: 0.2s all;\n  -moz-transition: 0.2s all;\n  -webkit-transition: 0.2s all;\n}\n\nymplayer song lyric, ymplayer song translation {\n  display: none;\n}\n\nymplayer.yp-boxActived {\n  margin-top: 0px;\n  height: 400px;\n}\n\nymplayer .yp-circle {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  background: #ceffff;\n  border: 2px solid #fff;\n  border-radius: 360px;\n  cursor: pointer;\n  transition: 0.3s all;\n  -ms-transition: 0.3s all;\n  -moz-transition: 0.3s all;\n  -webkit-transition: 0.3s all;\n}\n\nymplayer .yp-circle:hover {\n  width: 13px;\n  height: 13px;\n  top: -5px;\n}\n\nymplayer .yp-progressBar {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: -4px;\n  cursor: pointer;\n  background: #81e0f2;\n}\n\nymplayer .yp-progressBar .yp-progressBar__outside {\n  width: 100%;\n  height: 100%;\n}\n\nymplayer .yp-progressBar .yp-progressBar__inner {\n  position: relative;\n  width: 0%;\n  height: 100%;\n  background-color: #B3E5FC;\n  transition: 0.3s all ease-in-out;\n  -ms-transition: 0.3s all ease-in-out;\n  -moz-transition: 0.3s all ease-in-out;\n  -webkit-transition: 0.3s all ease-in-out;\n}\n\nymplayer .yp-progressBar .yp-lyricBalloon {\n  width: auto;\n  height: 35px;\n  font-size: 14px;\n  background: #000;\n  opacity: 0.7;\n  min-width: 100px;\n  padding: 0px 15px;\n  line-height: 35px;\n  text-align: center;\n  position: absolute;\n  top: -50px;\n}\n\nymplayer .yp-progressBar .yp-lyricBalloon[empty='true'], ymplayer .yp-progressBar .yp-lyricBalloon[inactive='yes'] {\n  display: none;\n}\n\nymplayer .yp-progressBar .yp-lyricBalloon p {\n  margin: 0px;\n}\n\nymplayer .yp-progressBar .yp-lyricBalloon .yp-tail {\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  bottom: -10px;\n  right: -moz-calc(50% - 4px);\n  right: -webkit-calc(50% - 5px);\n  right: calc(50% - 4px);\n  border-width: 4px 0px 4px 13px;\n  border-style: solid;\n  border-color: transparent transparent transparent #000;\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n}\n\nymplayer[drag='progressDragging'] .yp-progressBar__inner {\n  transition: 0s all;\n  -ms-transition: 0s all;\n  -moz-transition: 0s all;\n  -webkit-transition: 0s all;\n}\n\nymplayer .yp-controller {\n  width: 100%;\n  height: 60px;\n}\n\nymplayer .yp-controller .yp-singleInfo {\n  width: 60%;\n  padding: 5px 5px;\n  display: inline-block;\n  float: left;\n}\n\nymplayer .yp-controller .yp-singleInfo .yp-albumImg {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  float: left;\n  background-size: cover;\n  background-position: center;\n  transition: 0.3s all;\n  -ms-transition: 0.3s all;\n  -moz-transition: 0.3s all;\n  -webkit-transition: 0.3s all;\n}\n\nymplayer .yp-controller .yp-singleInfo .yp-singleDetail {\n  display: inline-block;\n  margin-left: 10px;\n}\n\nymplayer .yp-controller .yp-singleInfo .yp-singleDetail .yp-singleTitle, ymplayer .yp-controller .yp-singleInfo .yp-singleDetail .yp-singleArtist {\n  margin: 0px 0px 5px 0px;\n}\n\nymplayer .yp-controller .yp-singleInfo .yp-singleDetail .yp-singleTitle {\n  font-size: 18px;\n}\n\nymplayer .yp-controller .yp-singleInfo .yp-singleDetail .yp-singleArtist {\n  font-size: 12px;\n}\n\nymplayer .yp-controller .yp-toggler {\n  width: 40%;\n  height: 60px;\n  display: -moz-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  line-height: 70px;\n  position: relative;\n}\n\nymplayer .yp-controller .yp-toggler .yp-volumeBar {\n  width: -moz-calc(100% - 220px);\n  width: -webkit-calc(100% - 220px);\n  width: calc(100% - 220px);\n  height: 3px;\n  background: #fff;\n  display: inline-block;\n  margin: auto;\n  cursor: pointer;\n}\n\nymplayer .yp-controller .yp-toggler .yp-volumeBar .yp-volumeBar__inner {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #B3E5FC;\n  transition: 0.2s all;\n  -ms-transition: 0.2s all;\n  -moz-transition: 0.2s all;\n  -webkit-transition: 0.2s all;\n}\n\nymplayer .yp-controller .yp-button__fullscreen svg {\n  width: 24px;\n  height: 24px;\n  transform: translateY(1px);\n  -ms-transform: translateY(1px);\n  -moz-transform: translateY(1px);\n  -webkit-transform: translateY(1px);\n}\n\nymplayer .yp-extendBox {\n  width: 100%;\n  height: 0px;\n  overflow: hidden;\n  transition: 0.3s all ease-in-out;\n  -ms-transition: 0.3s all ease-in-out;\n  -moz-transition: 0.3s all ease-in-out;\n  -webkit-transition: 0.3s all ease-in-out;\n}\n\nymplayer .yp-extendBox .yp-lyricBox, ymplayer .yp-extendBox .yp-playList {\n  height: 100%;\n  display: inline-block;\n}\n\nymplayer .yp-extendBox .yp-lyricBox {\n  width: 60%;\n}\n\nymplayer .yp-extendBox .yp-playList {\n  width: 40%;\n}\n\nymplayer .yp-extendBox .yp-lyricBox {\n  float: left;\n  position: relative;\n  overflow: hidden;\n  border-right: 1px solid rgba(51, 51, 51, 0.05);\n}\n\nymplayer .yp-extendBox .yp-lyricBox .yp-currentLyric {\n  font-size: 20px;\n  font-weight: bold;\n}\n\nymplayer .yp-extendBox .yp-playList {\n  overflow: auto;\n}\n\nymplayer .yp-extendBox .yp-playList single {\n  width: 100%;\n  height: 35px;\n  line-height: 35px;\n  display: block;\n  font-size: 14px;\n  padding: 0px 10px;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s all;\n  -ms-transition: 0.2s all;\n  -moz-transition: 0.2s all;\n  -webkit-transition: 0.2s all;\n}\n\nymplayer .yp-extendBox .yp-playList single:hover {\n  background: rgba(51, 51, 51, 0.1);\n}\n\nymplayer .yp-extendBox .yp-playList single .yp-listNumber {\n  color: #dedede;\n}\n\nymplayer .yp-extendBox .yp-playList single .yp-listTitle {\n  margin-left: 10px;\n}\n\nymplayer .yp-extendBox .yp-playList single .yp-listArtist {\n  position: absolute;\n  right: 10px;\n}\n\nymplayer .yp-extendBox .yp-playList .yp-currentSingle {\n  background: rgba(51, 51, 51, 0.1);\n  border-left: 4px solid #2196f3;\n}\n\nymplayer .yp-extendBox .yp-lyricContainer {\n  width: 100%;\n  height: 100%;\n  padding: 0px 10px;\n  transition: 0.8s ease-in-out all;\n  -ms-transition: 0.8s ease-in-out all;\n  -moz-transition: 0.8s ease-in-out all;\n  -webkit-transition: 0.8s ease-in-out all;\n}\n\nymplayer .yp-extendBox .yp-lyricContainer lyric {\n  display: block;\n  width: 100%;\n  margin: 0px 0px 10px 0px;\n  padding: 10px 0px 0px 0px;\n  text-align: center;\n}\n\nymplayer .yp-extendBox .yp-lyricContainer lyric p {\n  display: inline-block;\n  margin: 0px;\n}\n\nymplayer .yp-extendBox .yp-lyricContainer .yp-translation {\n  font-size: 13px;\n}\n\nymplayer .yp-extendBox .yp-lrcFixer {\n  width: 40px;\n  height: 60px;\n  position: absolute;\n  display: inline-block;\n  top: -moz-calc(50% - 30px);\n  top: -webkit-calc(50% - 30px);\n  top: calc(50% - 30px);\n  left: 0px;\n  opacity: 1;\n  padding: 8px 0px;\n  background: rgba(51, 51, 51, 0.1);\n  transition: 0.2s all;\n  -ms-transition: 0.2s all;\n  -moz-transition: 0.2s all;\n  -webkit-transition: 0.2s all;\n}\n\nymplayer .yp-extendBox .yp-lrcFixer[disabled='disabled'] {\n  opacity: 0;\n}\n\nymplayer[box='active'] .yp-extendBox {\n  width: 100%;\n  height: 340px;\n  border-top: 1px solid rgba(51, 51, 51, 0.05);\n}\n\nymplayer.yp-responsive__640px .yp-lyricBox, ymplayer.yp-responsive__640px .yp-playList, ymplayer.yp-responsive__500px .yp-lyricBox, ymplayer.yp-responsive__500px .yp-playList {\n  width: 100%;\n  display: inline;\n  float: left;\n}\n\nymplayer.yp-responsive__640px[box='active'] .yp-playList, ymplayer.yp-responsive__500px[box='active'] .yp-playList {\n  position: absolute;\n  left: 100%;\n}\n\nymplayer.yp-responsive__640px[box='active'] .yp-extendBox, ymplayer.yp-responsive__500px[box='active'] .yp-extendBox {\n  width: 100%;\n  position: relative;\n  overflow: auto;\n}\n\nymplayer.yp-responsive__640px .yp-singleInfo, ymplayer.yp-responsive__640px .yp-toggler {\n  width: 50%;\n}\n\nymplayer.yp-responsive__500px .yp-singleInfo {\n  display: none;\n}\n\nymplayer.yp-responsive__500px .yp-toggler {\n  width: 100%;\n}\n\nymplayer.yp-responsive__500px .yp-button__fullscreen {\n  display: none;\n}\n\nymplayer.yp-responsive__500px .yp-volumeBar {\n  width: -moz-calc(100% - 180px) !important;\n  width: -webkit-calc(100% - 180px) !important;\n  width: calc(100% - 180px) !important;\n}\n\nymplayer:full-screen {\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  margin-top: 5px;\n}\n\nymplayer:full-screen .yp-extendBox {\n  height: -moz-calc(100% - 60px);\n  height: -webkit-calc(100% - 60px);\n  height: calc(100% - 60px);\n}\n\nymplayer:-webkit-full-screen {\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  margin-top: 5px;\n}\n\nymplayer:-webkit-full-screen .yp-extendBox {\n  height: -moz-calc(100% - 60px);\n  height: -webkit-calc(100% - 60px);\n  height: calc(100% - 60px);\n}\n\nymplayer:-moz-full-screen {\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  margin-top: 5px;\n}\n\nymplayer:-moz-full-screen .yp-extendBox {\n  height: -moz-calc(100% - 60px);\n  height: -webkit-calc(100% - 60px);\n  height: calc(100% - 60px);\n}\n",""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var l=t[i];"number"==typeof l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},function(t,e,n){"use strict";var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports=new i.default}])});