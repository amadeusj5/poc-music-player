(function(t){function e(e){for(var r,o,a=e[0],l=e[1],u=e[2],d=0,g=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&g.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(g.length)g.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,a=1;a<s.length;a++){var l=s[a];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/poc-music-player/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container mx-auto my-5"},[s("div",{staticClass:"w-full"},[s("div",{staticClass:"h-2 bg-red-light"}),s("div",{staticClass:"flex items-center justify-center h-screen bg-red-lightest"},[s("div",{staticClass:"bg-white shadow-lg rounded-lg",staticStyle:{width:"45rem !important"}},[s("div",{staticClass:"flex"},[t._m(0),s("div",{staticClass:"w-full p-8"},[s("div",{staticClass:"flex justify-between"},[t._m(1),s("div",{staticClass:"text-red-lighter"},[s("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"}})])])]),s("div",{staticClass:"flex justify-between items-center mt-8"},[s("div",{staticClass:"text-grey-darker"},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"}})])]),s("div",{staticClass:"text-grey-darker"},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"}})])]),s("button",{staticClass:"text-white p-8 rounded-full bg-red-700 shadow-lg focus:outline-none",on:{click:t.toggleSong}},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M5 4h3v12H5V4zm7 0h3v12h-3V4z"}})])]),s("div",{staticClass:"text-grey-darker"},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"}})])]),s("div",{staticClass:"text-grey-darker"},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"}})])])])])]),s("div",{staticClass:"mx-8 py-4"},[s("div",{staticClass:"flex justify-between text-sm text-grey-darker"},[s("p",[t._v(t._s(t.timer))]),s("p",[t._v(t._s(t.duration))])]),s("div",{ref:"progress-content",staticClass:"py-2 group",on:{click:t.moveTo,mousedown:t.startDragging}},[s("div",{staticClass:"h-2 bg-gray-500 rounded-full relative"},[s("div",{class:["h-2 bg-black group-hover:bg-red-700 rounded-full",{"bg-red-700":t.isDragging}],style:{width:t.progress+"%"}}),s("button",{class:["-mt-2 -translate-x-1/2 -translate-y-1 absolute bg-red-700 focus:outline-none focus:block group-hover:block h-5 left-0 rounded-full shadow top-0 transform w-5",t.isDragging?"block":"hidden"],style:{left:t.progress+"%"}})])])])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{staticClass:"w-full rounded hidden md:block",attrs:{src:"https://tailwindcss.com/img/card-top.jpg",alt:"Album Pic"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{staticClass:"text-2xl text-grey-darkest font-medium"},[t._v(" A Sky Full of Stars ")]),s("p",{staticClass:"text-sm text-grey mt-1"},[t._v("Ghost Stories")])])}],o=s("1e5c"),a={name:"App",data:function(){return{sound:null,timer:"0:00",progress:0,isDragging:!1}},computed:{duration:function(){return this.sound?this.formatTime(Math.round(this.sound.duration())):0}},created:function(){var t=this;this.sound=new o["Howl"]({src:["/poc-music-player/mp3/yann_tiersen.mp3"],onplay:function(){requestAnimationFrame(t.step)},volume:this.currentVolume})},methods:{toggleSong:function(){this.sound.playing()?this.sound.pause():this.sound.play()},formatTime:function(t){var e=Math.floor(t/60)||0,s=t-60*e||0;return e+":"+(s<10?"0":"")+s},step:function(){var t=this.sound.seek()||0;this.isDragging||this.updateTimerProgress(t),this.sound.playing()&&requestAnimationFrame(this.step)},updateTimerProgress:function(t){this.timer=this.formatTime(Math.round(t)),this.progress=t/this.sound.duration()*100||0},moveTo:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=t.currentTarget;s&&(r=s);var n=t.pageX,i=r.getBoundingClientRect().left,o=r.offsetWidth,a=(n-i)/o,l=this.sound.duration()*a;l<0||l>this.sound.duration()||(this.isDragging?window.requestAnimationFrame((function(){return e.updateTimerProgress(l)})):this.sound.seek(l),this.sound.playing()||this.step())},startDragging:function(t){this.isDragging=!0,this.moveTo(t),document.querySelector("body").classList.add("select-none"),window.addEventListener("mousemove",this.draggPointer,!0),window.addEventListener("mouseup",this.stopDragging,!0)},draggPointer:function(t){this.moveTo(t,this.$refs["progress-content"])},stopDragging:function(){this.isDragging=!1,this.moveTo(event,this.$refs["progress-content"]),document.querySelector("body").classList.remove("select-none"),window.removeEventListener("mousemove",this.draggPointer,!0),window.removeEventListener("mouseup",this.stopDragging,!0)}}},l=a,u=(s("034f"),s("2877")),c=Object(u["a"])(l,n,i,!1,null,null,null),d=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.1a288a5d.js.map