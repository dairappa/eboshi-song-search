(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1676:function(e,t,n){"use strict";n.r(t),n.d(t,{Home:function(){return u},default:function(){return m}});var r=n(9008),a=n(7294),s=[{number:1,id:"ZY2Ndj0x6xs",songs:[{artist:"\u30c4\u30df\u30ad",songName:"\u30d5\u30a9\u30cb\u30a3",timeStart:"4:52"},{artist:"Ado",songName:"\u8e0a",timeStart:"9:40"},{artist:"Chinozo",songName:"\u30b0\u30c3\u30d0\u30a4\u5ba3\u8a00",timeStart:"16:23"},{artist:"DECO*27",songName:"\u30f4\u30a1\u30f3\u30d1\u30a4\u30a2",timeStart:"22:42"},{artist:"\u30ab\u30f3\u30b6\u30ad\u30a4\u30aa\u30ea",songName:"\u547d\u306b\u5acc\u308f\u308c\u3066\u3044\u308b\uff08\u4e09\u56de\u76ee\uff09",timeStart:2226},{artist:"DECO*27",songName:"\u30f4\u30a1\u30f3\u30d1\u30a4\u30a2",timeStart:2333},{artist:"n-buna",songName:"\u591c\u660e\u3051\u3068\u86cd",timeStart:"28:43"},{artist:"tamon",songName:"\u3042\u306a\u305f\u30af\u30e9\u30f3\u30b1\u30f3",timeStart:"38:32"}]}];function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,s=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);i=!0);}catch(o){l=!0,a=o}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=/^(\d{1,2}):(\d{1,2})$/,c=/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/,d=n(5893),u=function(){var e=(0,a.useState)(""),t=e[0],n=e[1],i=(0,a.useState)("newest"),u=i[0],m=i[1];function f(e){return function(e){if(c.test(e)){var t=l(c.exec(e),4),n=t[1],r=t[2],a=t[3];return 3600*parseInt(n)+60*parseInt(r)+parseInt(a)}if(o.test(e)){var s=l(o.exec(e),3),i=s[1],d=s[2];return 60*parseInt(i)+parseInt(d)}throw Error}(e)}var h=s.sort((function(e,t){return function(e,t){return(e.number-t.number)*("newest"==u?1:-1)}(t,e)})).flatMap((function(e){return e.songs.filter((function(e){return function(e){return!t||e.songName.includes(t)||e.artist.includes(t)}(e)})).map((function(t,n){var r="number"===typeof t.timeStart?t.timeStart:f(t.timeStart);return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"border-main",children:"#".concat(e.number)}),(0,d.jsx)("td",{className:"border-main",children:t.artist}),(0,d.jsx)("td",{className:"border-main",children:(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://youtu.be/".concat(e.id,"?&t=").concat(r,"s"),children:t.songName})})]},"".concat(e.id,"-").concat(n))}))}));return(0,d.jsxs)("div",{className:"misaki bg-sub font-main",children:[(0,d.jsxs)(r.default,{children:[(0,d.jsx)("title",{children:"EBOSHI song search"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)("div",{className:"container mx-auto items-center p-5 bg-subsub border-main border-4 m-0 md:m-5 md:mb-0",children:[(0,d.jsxs)("h1",{className:"text-4xl",children:[(0,d.jsx)("span",{className:"font-accent",children:"EBOSHI"})," Song Search"]}),(0,d.jsxs)("div",{className:"flex flex-col md:flex-row md:items-end",children:[(0,d.jsx)("div",{className:"nes-field flex-grow md:max-w-2xl",children:(0,d.jsx)("input",{type:"text",id:"name_field",className:"nes-input h-12 outline-main bg-subsub",placeholder:"\u66f2\u540d\u3001\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8",value:t,onChange:function(e){return n(e.target.value)}})}),(0,d.jsxs)("div",{className:"flex flex-row flex-grow",children:[(0,d.jsxs)("label",{className:"ml-3 text-lg md:text-xl",children:[(0,d.jsx)("input",{type:"radio",className:"nes-radio",name:"answer",checked:"newest"===u,onChange:function(e){return m(e.target.checked?"newest":"oldest")}}),(0,d.jsx)("span",{children:"\u65b0\u3057\u3044\u9806"})]}),(0,d.jsxs)("label",{className:"text-lg md:text-xl",children:[(0,d.jsx)("input",{type:"radio",className:"nes-radio",name:"answer",checked:"oldest"===u,onChange:function(e){return m(e.target.checked?"oldest":"newest")}}),(0,d.jsx)("span",{children:"\u53e4\u3044\u9806"})]}),(0,d.jsxs)("label",{className:"flex-grow md:text-xl text-right",children:[(0,d.jsx)("span",{children:"\u30d2\u30c3\u30c8\u6570:"}),(0,d.jsx)("span",{className:" md:text-3xl",children:h.length})]})]})]}),(0,d.jsx)("div",{className:"nes-table-responsive mt-5 pl-0 p-2",children:(0,d.jsxs)("table",{className:"nes-table outline-main bg-subsub is-bordered table-fixed w-auto md:w-full",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{className:"w-auto md:w-11 border-main",children:"#"}),(0,d.jsx)("th",{className:"w-1/2 md:w-1/3 border-main",children:"\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8"}),(0,d.jsx)("th",{className:"w-auto border-main",children:"\u66f2\u540d"})]})}),(0,d.jsx)("tbody",{children:h})]})})]}),(0,d.jsx)("footer",{className:"container flex flex-row-reverse items-end",children:(0,d.jsx)("a",{href:"https://twitter.com/dairappa",target:"_blank",rel:"noopener noreferrer",children:"Maintained by @dairappa"})})]})},m=u},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1676)}])},9008:function(e,t,n){e.exports=n(639)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);