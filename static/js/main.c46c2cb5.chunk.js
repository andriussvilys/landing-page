(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(6),i=t.n(n),c=(t(14),t(15),function(){return s.a.createElement("div",{className:"spinner-container"},s.a.createElement("div",{className:"circle-labels"},s.a.createElement("span",{className:"circle-label circle-label_1"},"IMAGINE"),s.a.createElement("span",{className:"circle-label circle-label_2"},"PLAN"),s.a.createElement("span",{className:"circle-label circle-label_3"},"BUILD")),s.a.createElement("div",{className:"circleBound"},s.a.createElement("div",{className:"innerCircle"},s.a.createElement("div",{className:"triangle-wrapper"},s.a.createElement("div",{className:"circle circle-1"},s.a.createElement("img",{src:"triangle/write-emoji.png",alt:"write emoji"})),s.a.createElement("div",{className:"circle circle-2"},s.a.createElement("img",{src:"triangle/plan-emoji.png",alt:"map emoji"})),s.a.createElement("div",{className:"circle circle-3"},s.a.createElement("img",{src:"triangle/lightbulb-emoji.png",alt:"lightbulb emoji"}))))))}),r=function(e){var a;return s.a.createElement("div",{className:"webExample-tools-container"},s.a.createElement("div",{className:"webExample-tools-headline"},"Toolbox:"),(a=e.data,console.log("render ALL"),console.log(a),a.map((function(e){return a=e.title,t=e.list,s.a.createElement("div",{className:"tools-wrapper"},s.a.createElement("div",{className:"tools-title"},s.a.createElement("span",null,a,":")),s.a.createElement("div",{className:"tools-items"},t.map((function(e){return s.a.createElement("div",{className:"details-badge",key:"".concat(a,"-badge-").concat(e.title)},s.a.createElement("img",{src:"badges/".concat(e.img),alt:e.title}))}))));var a,t}))))},m=t(8),o=t(7),d=t.n(o),g=(t(31),t(32),t(33),function(e){var a={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,lazyLoading:"progressive"};return s.a.createElement(d.a,a,e.imageList.map((function(a){return s.a.createElement("img",{src:"carousel/".concat(e.assetDir,"/").concat(a),alt:a,key:"slickCarousel-".concat(a)})})))}),u=(t(34),function(e){var a=s.a.useState(e.open),t=Object(m.a)(a,2),l=t[0],n=t[1];return s.a.createElement("article",{className:"webExample-container ".concat(l?"":"webExample-hide"),id:e.id},s.a.createElement("div",{className:"webExample-wrapper"},s.a.createElement("div",{onClick:function(a){a.stopPropagation();var t=document.querySelector("#".concat(e.id)),s=document.querySelector("#".concat(e.id," .webExample-content")).clientHeight;l&&(t.style="height: ".concat(s+50,"px")),n(!l),console.log("HEIGHT : ".concat(s))},className:"webExample-details-title"},s.a.createElement("h3",null,e.title)),s.a.createElement("div",{className:"webExample-content"},s.a.createElement("div",{className:"webExample-carousel-container"},s.a.createElement(g,{assetDir:e.assetDir,imageList:e.imageList}),s.a.createElement("div",{className:"webExample-carousel-sizeToggle",onClick:function(e){e.target.parentNode.classList.toggle("webExample-carousel_fullWidth")}})),s.a.createElement("div",{className:"webExample-details-container"},s.a.createElement("div",{className:"webExample-details-description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),s.a.createElement("div",{className:"webExample-details-tags"},s.a.createElement("div",{className:"webExample-details-badges"},e.badges.badges.map((function(a){return s.a.createElement("div",{title:a.title,className:"details-badge",key:"".concat(e.id,"-badge-").concat(a.title)},s.a.createElement("img",{src:"badges/".concat(a.img),alt:a.title}))}))),s.a.createElement("div",{className:"webExample-details-other"},function(a){return a.length>0?a.map((function(a){return s.a.createElement("div",{className:"details-badge_other",key:"".concat(e.id,"-tag-").concat(a)},s.a.createElement("span",null,a))})):null}(e.badges.other))),s.a.createElement("div",{className:"webExample-details-CTA"},s.a.createElement("button",{className:"details-CTA-button"},s.a.createElement("a",{href:e.href,target:"_blank"},"CLICK TO VISIT")))))))});var p=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("nav",{id:"nav",className:"nav-container"},s.a.createElement("div",{className:"nav-logo"},s.a.createElement("a",{href:"#kv"},"Andrius Svilys")),s.a.createElement("div",{className:"nav-links-container"},s.a.createElement("div",{className:"nav-links-hamburger",onClick:function(){document.querySelector(".nav-links-list").classList.toggle("links-list-display")}}),s.a.createElement("ul",{className:"nav-links-list"},s.a.createElement("li",{className:"nav-links-listItem"},s.a.createElement("a",{href:"#examples"},"Examples")),s.a.createElement("li",{className:"nav-links-listItem"},s.a.createElement("a",{href:"#tools"},"Tools")),s.a.createElement("li",{className:"nav-links-listItem"},s.a.createElement("a",{href:"#about"},"About"))))),s.a.createElement("main",null,s.a.createElement("section",{id:"kv",className:"kv-container"},s.a.createElement("div",{className:"kv-wrapper"},s.a.createElement("div",{className:"kv-text"},s.a.createElement("h1",null,"My name is Andrius."),s.a.createElement("h3",null,"I am a front-end developer."),s.a.createElement("button",{className:"CTA-contact"},"get in touch")),s.a.createElement("div",{className:"kv-image"},s.a.createElement(c,null))),s.a.createElement("div",{className:"CTA-seemore"},s.a.createElement("a",{href:"#examples",className:"CTA-seemore-text"},"See my work"),s.a.createElement("span",{className:"CTA-seemore-line"}))),s.a.createElement("section",{id:"examples"},s.a.createElement(u,{open:!0,id:"personal-website",title:"Personal website",assetDir:"andriussvilys",href:"https://andriussvilys.com",imageList:["personalWebsite-2.png","personalWebsite-3.png","personalWebsite-4.png","personalWebsite-5.png","personalWebsite-6.jpg","personalWebsite-7.jpg","personalWebsite-8.jpg","personalWebsite-9.jpg","personalWebsite-10.jpg"],badges:{badges:[{title:"React JS",img:"react.svg"},{title:"Sass",img:"sass.svg"}],other:["React-slick","filters"]}}),s.a.createElement(u,{open:!1,id:"image-search",title:"Image search API",assetDir:"image-search",href:"https://andriussvilys.github.io/image-search/",imageList:["Screenshot-desktop-1.png","Screenshot-mobile-1.jpg","Screenshot-mobile-2.jpg","Screenshot-mobile-3.jpg"],badges:{badges:[{title:"React JS",img:"react.svg"},{title:"Redux",img:"redux.svg"},{title:"Sass",img:"sass.svg"}],other:["unsplash-API"]}})),s.a.createElement("section",{id:"tools"},s.a.createElement(r,{data:[{title:"Front-end",list:[{title:"React JS",img:"react.svg"},{title:"Redux",img:"redux.svg"}]},{title:"Graphic design",list:[{title:"React JS",img:"react.svg"},{title:"Redux",img:"redux.svg"},{title:"React JS",img:"react.svg"},{title:"Redux",img:"redux.svg"}]}]})),s.a.createElement("section",{id:"about"})),s.a.createElement("footer",null))};i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root"))},9:function(e,a,t){e.exports=t(35)}},[[9,1,2]]]);
//# sourceMappingURL=main.c46c2cb5.chunk.js.map