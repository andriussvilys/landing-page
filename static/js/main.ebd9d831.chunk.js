(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{13:function(e,t,a){e.exports=a(43)},18:function(e,t,a){},2:function(e,t,a){e.exports={disableBodyScroll:"css_disableBodyScroll__1v3ux",showOverflow:"css_showOverflow__1rwho",smoothSlide:"css_smoothSlide__cqQaE",carousel:"css_carousel__1-1V_",container:"css_container__2Ugyg",arrowNext:"css_arrowNext__28fQd",arrowPrev:"css_arrowPrev__33M0h",slideContainer:"css_slideContainer__2hj7f",slide:"css_slide__3HQ1Q",imgContainer:"css_imgContainer__1zjYY",button_zoom:"css_button_zoom__3V3lb",zoomedIn:"css_zoomedIn__19vjW",dotContainer:"css_dotContainer__xYjeH",dotWrapper:"css_dotWrapper__2P9dZ",dotList:"css_dotList__3ZOhv",dot:"css_dot__1NNkW",dot_active:"css_dot_active__3n4l6"}},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),c=a.n(i),r=(a(18),a(1)),s=a(10),o=a.n(s),m=(a(21),function(e){var t=l.a.useState("Leave me a message"),a=Object(r.a)(t,2),n=a[0],i=a[1];return l.a.createElement("div",{id:"modal-container",className:"modal-container \n                    ".concat(e.triggered?e.showModal?"show-container":"hide-container":"","\n                ")},l.a.createElement("div",{id:"modal-wrapper",className:"modal-wrapper \n                    ".concat(e.triggered?e.showModal?"show-wrapper":"hide-wrapper":"","\n                ")},l.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var t=e.target;o.a.sendForm("default_service","template_tqknj9b",e.target,"user_JWcm4lveU05DWLfNas9iM").then((function(e){t.reset(),i("Thank you for the message \ud83d\ude09\ud83d\udc4d")}),(function(e){i("Missing information")}))}},l.a.createElement("button",{className:"modal-close",onClick:function(){e.close(),i("Let's get in touch :^)")}},l.a.createElement("span",null,"\u2716")),l.a.createElement("p",{className:"contact-greeting"},n),l.a.createElement("div",{className:"contact-item"},l.a.createElement("label",{className:"contact-label"},"Name"),l.a.createElement("input",{required:!0,className:"contact-input",type:"text",name:"name"})),l.a.createElement("div",{className:"contact-item"},l.a.createElement("label",{className:"contact-label"},"Email"),l.a.createElement("input",{required:!0,className:"contact-input",type:"email",name:"email"})),l.a.createElement("div",{className:"contact-item"},l.a.createElement("label",{className:"contact-label"},"Message"),l.a.createElement("textarea",{required:!0,className:"contact-input contact-input_textArea",name:"message"})),l.a.createElement("input",{className:"CTA-contact CTA",type:"submit",value:"Send"}))))}),u=(a(22),function(){return l.a.createElement("div",{className:"spinner-container"},l.a.createElement("div",{className:"circleBound",onClick:function(e){e.stopPropagation(),Array.from(document.querySelectorAll(".spinner-container *")).forEach((function(e){e.classList.toggle("anim-pause")}))}},l.a.createElement("div",{className:"innerCircle"},l.a.createElement("div",{className:"triangle-wrapper"},l.a.createElement("div",{className:"circle circle-1"},l.a.createElement("div",{className:"triangle-edge",id:"triangle-edge_1"}),l.a.createElement("div",{className:"circle-inner circle-inner_1"},l.a.createElement("div",{className:"circle-label-wrapper"},l.a.createElement("span",{className:"circle-label circle-label_1"},"IMAGINE")),l.a.createElement("img",{src:"triangle/lightbulb-emoji.png",alt:"lightbulb emoji"}))),l.a.createElement("div",{className:"circle circle-2"},l.a.createElement("div",{className:"triangle-edge",id:"triangle-edge_2"}),l.a.createElement("div",{className:"circle-inner circle-inner_2"},l.a.createElement("div",{className:"circle-label-wrapper"},l.a.createElement("span",{className:"circle-label circle-label_2"},"BUILD")),l.a.createElement("img",{src:"triangle/write-emoji.png",alt:"write emoji"}))),l.a.createElement("div",{className:"circle circle-3"},l.a.createElement("div",{className:"triangle-edge",id:"triangle-edge_3"}),l.a.createElement("div",{className:"circle-inner circle-inner_3"},l.a.createElement("div",{className:"circle-label-wrapper"},l.a.createElement("span",{className:"circle-label circle-label_3"},"PLAN")),l.a.createElement("img",{src:"triangle/plan-emoji.png",alt:"map emoji"})))))))}),d=function(e){var t=null,a=null;if(e.img){e.title;t=l.a.createElement("img",{src:"badges/".concat(e.img),alt:e.img})}return e.title&&(a=l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:"details-badge",key:"".concat(e.section,"-badge-").concat(e.title)},t,a)},p=function(e){return l.a.createElement("div",{className:"webExample-tools-container"},l.a.createElement("div",{className:"webExample-tools-wrapper"},e.data.map((function(e){return t=e.title,a=e.list,l.a.createElement("div",{key:"tools-".concat(t),className:"tools-wrapper"},l.a.createElement("div",{className:"tools-title"},l.a.createElement("span",null,t,":")),l.a.createElement("div",{className:"tools-items"},a.map((function(e,a){return l.a.createElement(d,{key:"tools-".concat(t,"-").concat(e.title,"-").concat(a),section:t,title:e.title,img:e.img})}))));var t,a}))))},g=(a(23),a(24),a(11)),E=a.n(g),v=(a(40),a(41),a(42),function(e){var t={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,lazyLoading:"progressive"};return l.a.createElement(E.a,t,e.imageList.map((function(t){return l.a.createElement("img",{src:"carousel/".concat(e.assetDir,"/").concat(t),alt:t,key:"slickCarousel-".concat(t)})})))}),f=function(e){var t=l.a.useState(!1),a=Object(r.a)(t,2),n=a[0];a[1];return l.a.createElement("div",{className:"webExample-wrapper",id:e.id},l.a.createElement("div",{className:"webExample-content"},l.a.createElement("div",{className:"webExample-details-container"},l.a.createElement("h3",{className:"webExample-title"},e.title),l.a.createElement("div",{className:"webExample-details-description"},e.description||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),l.a.createElement("div",{className:"webExample-details-tags"},l.a.createElement("div",{className:"webExample-details-badges"},e.badges.badges.map((function(t,a){return l.a.createElement(d,{key:"websiteExample-".concat(e.id,"-").concat(a),section:e.id,title:t.title,img:t.img})}))),l.a.createElement("div",{className:"webExample-details-other"},function(t){return t.length>0?t.map((function(t){return l.a.createElement("div",{className:"details-badge_other",key:"".concat(e.id,"-tag-").concat(t)},l.a.createElement("span",null,t))})):null}(e.badges.other))),l.a.createElement("div",{className:"webExample-details-CTA"},l.a.createElement("button",{className:"details-CTA-button CTA"},l.a.createElement("a",{href:e.href,target:"_blank"},"CLICK TO VISIT")))),l.a.createElement("div",{className:"webExample-carousel-container ".concat(n?"webExample-carousel_fullWidth":"")},l.a.createElement(v,{assetDir:e.assetDir,imageList:e.imageList}))))},b=a(3),N=a(12),h=a(2),_=a.n(h),w=function(e){var t=l.a.useRef(),a=l.a.useRef(),i=l.a.useRef(),c=l.a.useRef(),s=l.a.useRef(),o=Object(n.useState)(!(window.document.body.getBoundingClientRect().width>720)),m=Object(r.a)(o,2),u=m[0],d=m[1];window.onresize=function(){d(!(window.document.body.getBoundingClientRect().width>720))};var p=Object(n.useState)({file:e.file,swiped:!1,smooth:!0,currentSlide:e.currentSlide,prevTransform:e.initialTransform,currentTransform:e.initialTransform}),g=Object(r.a)(p,2),E=g[0],v=g[1],f=function(t){var a=t;a<0?a=e.content.length-1:a>e.content.length-1&&(a=0);var n=-100/e.content.length*a;v(Object(b.a)(Object(b.a)({},E),{},{smooth:!0,file:null,currentSlide:a,currentTransform:n,prevTransform:n}))},h=function(){if(!u&&!(e.content&&e.content.length<2))return l.a.createElement("button",{className:_.a.arrowNext,onClick:function(){f(E.currentSlide+1)}})},w=function(){if(!u&&!(e.content&&e.content.length<2))return l.a.createElement("button",{className:_.a.arrowPrev,onClick:function(){f(E.currentSlide-1)}})},k={domTarget:s,filterTaps:!0,lockDirection:!0,eventOptions:{passive:!1}},C=Object(N.a)({},Object(b.a)({},k));return Object(n.useEffect)((function(){f(e.currentSlide)}),[e.counter]),Object(n.useEffect)((function(){!function(){if(a&&a.current){var e=a.current.getBoundingClientRect().width,t=E.currentSlide*e-e/2;i.current.scroll(t,0)}}()}),[E]),Object(n.useEffect)(C,[C]),l.a.createElement("div",{className:_.a.carousel,ref:t},function(e){var t=e.map((function(e,t){return l.a.createElement("li",{onClick:function(){f(t)},ref:t===E.currentSlide?a:null,key:"".concat(e,"-").concat(t),className:"".concat(_.a.dot," ").concat(t===E.currentSlide?_.a.dot_active:"")},l.a.createElement("img",{src:e,alt:"Click this thumbnail to scroll to slide ".concat(t)}))}));return l.a.createElement("div",{className:_.a.dotContainer},w(),l.a.createElement("div",{className:_.a.dotWrapper,ref:i},e.length<2?null:l.a.createElement("ul",{ref:c,className:_.a.dotList},t)),h())}(e.thumbnails),l.a.createElement("div",{id:"container_main",className:_.a.container},l.a.createElement("div",{id:"slideContainer",className:"".concat(_.a.slideContainer," ").concat(E.smooth?_.a.smoothSlide:""),ref:s,style:{width:"".concat(100*e.content.length,"%"),transform:"translateX(".concat(E.currentTransform,"%)")}},function(t){if(t&&t.length>0)return t.map((function(t,a){return l.a.createElement("div",{id:"SLIDE-".concat(a),className:_.a.slide,key:"slideContent-".concat(a),style:{width:"".concat(100/e.content.length,"%")}},t)}))}(e.content))))},k=function(e){var t=l.a.useState(null),a=Object(r.a)(t,2),n=a[0],i=a[1],c=l.a.useState(null),s=Object(r.a)(c,2),o=(s[0],s[1]);return l.a.useEffect((function(){null==n&&fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.json().then((function(e){i(e);var t=[];e.forEach((function(e){t.push({src:""})})),o([])}))}))}),[]),l.a.useEffect((function(){})),l.a.createElement("div",{className:"WebsiteSlider_container"},n&&n.length>0?l.a.createElement(w,{currentSlide:0,thumbnails:e.thumbnails,content:n.map((function(e,t){return l.a.createElement(f,{key:"websiteExample-".concat(t),id:e.id,title:e.title,assetDir:e.assetDir,href:e.href,imageList:e.imageList,badges:e.badges})}))}):null)};var C=function(){document.querySelector(".nav-links-list");var e=l.a.useState(null),t=Object(r.a)(e,2),a=t[0],n=t[1],i=l.a.useState(null),c=Object(r.a)(i,2),s=c[0],o=c[1],d=function(){var e=document.querySelector(".nav-links-list");a&&g(),setTimeout((function(){e.classList.toggle("links-list-display")}),200)},g=function(){var e=0,t=document.querySelector(".nav-links-list");t.classList.contains("links-list-display")&&(t.classList.remove("links-list-display"),e=200),setTimeout((function(){o(!0),n(!a)}),e)};return l.a.createElement("div",{className:"App"},l.a.createElement(m,{close:n,showModal:a,triggered:s}),l.a.createElement("nav",{id:"nav",className:"nav-container"},l.a.createElement("div",{className:"nav-logo"},l.a.createElement("a",{onClick:function(){a&&g()},href:"#kv"},"Andrius Svilys")),l.a.createElement("div",{className:"nav-links-container"},l.a.createElement("div",{className:"nav-links-hamburger",onClick:function(){d()}},l.a.createElement("img",{src:"icons/burger.svg",alt:"hamburger menu icon"})),l.a.createElement("ul",{className:"nav-links-list"},l.a.createElement("li",{className:"nav-links-listItem"},l.a.createElement("a",{onClick:function(){return d()},href:"#examples"},"Examples")),l.a.createElement("li",{className:"nav-links-listItem"},l.a.createElement("a",{onClick:function(){return d()},href:"#tools"},"Toolbox")),l.a.createElement("li",{className:"nav-links-listItem"},l.a.createElement("a",{onClick:function(){return d()},href:"#about"},"About")),l.a.createElement("li",{className:"nav-links-listItem"},l.a.createElement("button",{onClick:function(){g()}},"Contact"))))),l.a.createElement("main",null,l.a.createElement("section",{id:"kv",className:"kv-container"},l.a.createElement("div",{className:"kv-wrapper"},l.a.createElement("div",{className:"kv-text"},l.a.createElement("h1",null,"My name is Andrius."),l.a.createElement("h3",null,"I am a front-end developer."),l.a.createElement("button",{className:"CTA-contact CTA",onClick:function(){g()}},"get in touch")),l.a.createElement("div",{className:"kv-image"},l.a.createElement(u,null)))),l.a.createElement("section",null,l.a.createElement("h1",{className:"headline"},"EXAMPLES"),l.a.createElement("div",{id:"examples",className:"section-wrapper"},l.a.createElement(k,{thumbnails:["carousel/andriussvilys/personalWebsite-2.png","carousel/admin/admin-1.png","carousel/image-search/Screenshot-desktop-1.png","carousel/devChallenge/dev-challenge-1.png","carousel/responsive/responsive-eg-1.jpg","carousel/t-pose/t-pose-desktop-1.png"]}))),l.a.createElement("section",null,l.a.createElement("h1",{className:"headline"},"Toolbox"),l.a.createElement("div",{id:"tools",className:"section-wrapper"},l.a.createElement(p,{data:[{title:"Front-end",list:[{title:"HTML5",img:"HTML5.png"},{title:"JavaScript",img:"js.png"},{title:"React JS",img:"react.svg"},{title:"Redux",img:"redux.svg"},{title:"CSS3",img:"CSS3.png"},{title:null,img:"sass.svg"}]},{title:"Back-end",list:[{title:null,img:"node-js.svg"},{title:"Postman",img:"postman.png"},{title:"express.js"}]},{title:"Graphic design",list:[{title:"PhotoShop",img:"photoshop.png"},{title:"Illustrator",img:"illustrator.png"},{title:"Figma",img:"figma.png"}]},{title:"Other",list:[{title:null,img:"git.png"},{title:null,img:"npm.png"},{title:null,img:"mongodb.png"},{title:"Digital Ocean",img:"digital-ocean.png"},{title:"AEM",img:"AEM.png"},{title:"VSCode",img:"vscode.png"},{title:null,img:"jira.png"}]}]}))),l.a.createElement("section",{className:"about-container"},l.a.createElement("h1",{className:"headline"},"ABOUT"),l.a.createElement("div",{id:"about",className:"section-wrapper"},l.a.createElement("div",{className:"about-wrapper"},l.a.createElement("div",{className:"about-image-wrapper"},l.a.createElement("img",{className:"about-image",alt:"portrait"})),l.a.createElement("div",{className:"about-description"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),l.a.createElement("button",{className:"CTA-contact CTA",onClick:function(){g()}},"get in touch"))))),l.a.createElement("footer",null)))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.ebd9d831.chunk.js.map