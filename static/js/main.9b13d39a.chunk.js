(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{13:function(e,a,t){e.exports=t(43)},18:function(e,a,t){},2:function(e,a,t){e.exports={disableBodyScroll:"css_disableBodyScroll__1v3ux",showOverflow:"css_showOverflow__1rwho",smoothSlide:"css_smoothSlide__cqQaE",carousel:"css_carousel__1-1V_",container:"css_container__2Ugyg",arrowNext:"css_arrowNext__28fQd",arrowPrev:"css_arrowPrev__33M0h",slideContainer:"css_slideContainer__2hj7f",slide:"css_slide__3HQ1Q",imgContainer:"css_imgContainer__1zjYY",button_zoom:"css_button_zoom__3V3lb",zoomedIn:"css_zoomedIn__19vjW",dotContainer:"css_dotContainer__xYjeH",dotWrapper:"css_dotWrapper__2P9dZ",dotList:"css_dotList__3ZOhv",dot:"css_dot__1NNkW",dot_active:"css_dot_active__3n4l6"}},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(9),i=t.n(c),r=(t(18),t(1)),s=t(10),o=t.n(s),m=(t(21),function(e){var a={default:l.a.createElement("div",null),sending:l.a.createElement("div",null,l.a.createElement("p",null,"Please stand by."),l.a.createElement("p",null,"Your message is being sent",l.a.createElement("span",{role:"img","aria-label":"runner"}," \ud83c\udfc3"),l.a.createElement("span",{role:"img","aria-label":"incoming envelope"},"\ud83d\udce8"))),success:l.a.createElement("div",null,l.a.createElement("p",null,"Your message has been received."),l.a.createElement("p",null,"Thank you",l.a.createElement("span",{role:"img","aria-label":"wink face"}," \ud83d\ude09"),l.a.createElement("span",{role:"img","aria-label":"thumbs up"}," \ud83d\udc4d"))),error:l.a.createElement("div",null,l.a.createElement("p",null,"Something went wrong",l.a.createElement("span",{role:"img","aria-label":"person gesturing no"},"\ud83d\ude45"),l.a.createElement("span",{role:"img","aria-label":"cross mark"},"\u274c")),l.a.createElement("p",null,l.a.createElement("span",{className:"modal-alternative_text"},"You can send a message from your email client by",l.a.createElement("a",{href:"mailto: andriussvilys@gmail.com"}," clicking here"))))},t=l.a.useState(null),n=Object(r.a)(t,2),c=n[0],i=n[1];return l.a.useEffect((function(){e.showModal||i(null)}),[e.showModal]),l.a.createElement("div",{id:"modal-container",className:"modal-container \n                    ".concat(e.triggered?e.showModal?"show-container":"hide-container":"","\n                ")},l.a.createElement("div",{id:"modal-wrapper",className:"modal-wrapper \n                    ".concat(e.triggered?e.showModal?"show-wrapper":"hide-wrapper":"","\n                ")},l.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var a=e.target;i("sending"),o.a.sendForm("default_service","template_tqknj9b",a,"user_JWcm4lveU05DWLfNas9iM").then((function(e){a.reset(),i("success")}),(function(e){i("error")}))}},l.a.createElement("p",{className:"contact-greeting"},"Let's get in touch",l.a.createElement("span",{role:"img","aria-label":"frog face"}," \ud83d\udc38")),l.a.createElement("div",{className:"form-container"},l.a.createElement("div",{className:"contact-item"},l.a.createElement("label",{className:"contact-label"},"Name"),l.a.createElement("input",{required:!0,className:"contact-input",type:"text",name:"name"})),l.a.createElement("div",{className:"contact-item"},l.a.createElement("label",{className:"contact-label"},"Email"),l.a.createElement("input",{required:!0,className:"contact-input",type:"email",name:"email"})),l.a.createElement("div",{className:"contact-item"},l.a.createElement("label",{className:"contact-label"},"Message"),l.a.createElement("textarea",{required:!0,className:"contact-input contact-input_textArea",name:"message"})),l.a.createElement("div",{className:"submitResponse \n                            ".concat(c?"submitResponse-show":null,"\n                            ").concat(c?"show-container_white":"hide-container_white","\n                            ")},l.a.createElement("div",{className:"\n                                    submitResponse_wrapper \n                                    ".concat(c?"show-wrapper":"hide-wrapper","\n                                ")},c?a[c]:null))),l.a.createElement("div",{className:"modal-buttons"},l.a.createElement("button",{className:"CTA-contact CTA ".concat(c?"CTA_disabled":"")},l.a.createElement("input",{type:"submit",value:""}),l.a.createElement("span",null,"send")),l.a.createElement("button",{className:"CTA_secondary",onClick:function(a){a.preventDefault(),e.close(),i(null)}},l.a.createElement("span",null,c?"Close":"Cancel"))),l.a.createElement("div",{className:"modal-alternative"},l.a.createElement("span",{className:"modal-alternative_text"},"Use your email client by",l.a.createElement("a",{href:"mailto: andriussvilys@gmail.com"}," clicking here"))))))}),u=(t(22),function(){return l.a.createElement("div",{className:"spinner-container"},l.a.createElement("div",{className:"circleBound",onClick:function(e){e.stopPropagation(),Array.from(document.querySelectorAll(".spinner-container *")).forEach((function(e){e.classList.toggle("anim-pause")}))}},l.a.createElement("div",{className:"innerCircle"},l.a.createElement("div",{className:"triangle-wrapper"},l.a.createElement("div",{className:"circle circle-1"},l.a.createElement("div",{className:"triangle-edge",id:"triangle-edge_1"}),l.a.createElement("div",{className:"circle-inner circle-inner_1"},l.a.createElement("div",{className:"circle-label-wrapper"},l.a.createElement("span",{className:"circle-label circle-label_1"},"IMAGINE")),l.a.createElement("img",{src:"triangle/lightbulb-emoji.png",alt:"lightbulb emoji"}))),l.a.createElement("div",{className:"circle circle-2"},l.a.createElement("div",{className:"triangle-edge",id:"triangle-edge_2"}),l.a.createElement("div",{className:"circle-inner circle-inner_2"},l.a.createElement("div",{className:"circle-label-wrapper"},l.a.createElement("span",{className:"circle-label circle-label_2"},"BUILD")),l.a.createElement("img",{src:"triangle/write-emoji.png",alt:"write emoji"}))),l.a.createElement("div",{className:"circle circle-3"},l.a.createElement("div",{className:"triangle-edge",id:"triangle-edge_3"}),l.a.createElement("div",{className:"circle-inner circle-inner_3"},l.a.createElement("div",{className:"circle-label-wrapper"},l.a.createElement("span",{className:"circle-label circle-label_3"},"PLAN")),l.a.createElement("img",{src:"triangle/plan-emoji.png",alt:"map emoji"})))))))}),d=function(e){var a=null,t=null;if(e.img){e.title;a=l.a.createElement("img",{src:"badges/".concat(e.img),alt:e.img})}return e.title&&(t=l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:"details-badge",key:"".concat(e.section,"-badge-").concat(e.title)},a,t)},p=function(e){return l.a.createElement("div",{className:"webExample-tools-container"},l.a.createElement("div",{className:"webExample-tools-wrapper"},e.data.map((function(e){return a=e.title,t=e.list,l.a.createElement("div",{key:"tools-".concat(a),className:"tools-wrapper"},l.a.createElement("div",{className:"tools-title"},l.a.createElement("span",null,a,":")),l.a.createElement("div",{className:"tools-items"},t.map((function(e,t){return l.a.createElement(d,{key:"tools-".concat(a,"-").concat(e.title,"-").concat(t),section:a,title:e.title,img:e.img})}))));var a,t}))))},g=(t(23),t(24),t(11)),E=t.n(g),v=(t(40),t(41),t(42),function(e){var a={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,lazyLoading:"progressive"};return l.a.createElement(E.a,a,e.imageList.map((function(a){return l.a.createElement("img",{src:"carousel/".concat(e.assetDir,"/").concat(a),alt:a,key:"slickCarousel-".concat(a)})})))}),f=function(e){var a=l.a.useState(!1),t=Object(r.a)(a,1)[0];return l.a.createElement("div",{className:"webExample-wrapper",id:e.id},l.a.createElement("div",{className:"webExample-content"},l.a.createElement("div",{className:"webExample-details-container"},l.a.createElement("h3",{className:"webExample-title"},e.title),l.a.createElement("div",{className:"webExample-details-description"},e.description?e.description.map((function(e){return l.a.createElement("p",null,e,l.a.createElement("br",null),l.a.createElement("br",null))})):"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),l.a.createElement("div",{className:"webExample-details-tags"},l.a.createElement("div",{className:"webExample-details-badges"},e.badges.badges.map((function(a,t){return l.a.createElement(d,{key:"websiteExample-".concat(e.id,"-").concat(t),section:e.id,title:a.title,img:a.img})}))),l.a.createElement("div",{className:"webExample-details-other"},function(a){return a.length>0?a.map((function(a){return l.a.createElement("div",{className:"details-badge_other",key:"".concat(e.id,"-tag-").concat(a)},l.a.createElement("span",null,a))})):null}(e.badges.other))),l.a.createElement("div",{className:"webExample-details-CTA"},l.a.createElement("button",{className:"details-CTA-button CTA"},l.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},"live site")),e.gh_link?l.a.createElement("button",{className:"CTA-secondary"},l.a.createElement("a",{href:e.gh_link,target:"_blank",rel:"noopener noreferrer"},"GH repository")):null)),l.a.createElement("div",{className:"webExample-carousel-container ".concat(t?"webExample-carousel_fullWidth":"")},l.a.createElement(v,{assetDir:e.assetDir,imageList:e.imageList}))))},b=t(5),h=t(12),N=t(2),w=t.n(N),_=function(e){var a=l.a.useRef(),t=l.a.useRef(),c=l.a.useRef(),i=l.a.useRef(),s=l.a.useRef(),o=Object(n.useState)(!(window.document.body.getBoundingClientRect().width>720)),m=Object(r.a)(o,2),u=m[0],d=m[1];window.onresize=function(){d(!(window.document.body.getBoundingClientRect().width>720))};var p=Object(n.useState)({file:e.file,swiped:!1,smooth:!0,currentSlide:e.currentSlide,prevTransform:e.initialTransform,currentTransform:e.initialTransform}),g=Object(r.a)(p,2),E=g[0],v=g[1],f=function(a){var t=a;t<0?t=e.content.length-1:t>e.content.length-1&&(t=0);var n=-100/e.content.length*t;document.querySelector("#slideContainer").scrollIntoView(),v(Object(b.a)(Object(b.a)({},E),{},{smooth:!0,file:null,currentSlide:t,currentTransform:n,prevTransform:n}))},N=function(){if(!u&&!(e.content&&e.content.length<2))return l.a.createElement("button",{className:w.a.arrowNext,onClick:function(){f(E.currentSlide+1)}})},_=function(){if(!u&&!(e.content&&e.content.length<2))return l.a.createElement("button",{className:w.a.arrowPrev,onClick:function(){f(E.currentSlide-1)}})},k={domTarget:s,filterTaps:!0,lockDirection:!0,eventOptions:{passive:!1}};Object(h.a)({},Object(b.a)({},k));return Object(n.useEffect)((function(){f(e.currentSlide)}),[e.counter]),Object(n.useEffect)((function(){!function(){if(t&&t.current){var e=t.current.getBoundingClientRect().width,a=E.currentSlide*e-e/2;c.current.scroll(a,0),setTimeout((function(){}),200)}}()}),[E]),l.a.createElement("div",{className:w.a.carousel,ref:a},function(e){var a=e.map((function(e,a){return l.a.createElement("li",{onClick:function(){f(a)},ref:a===E.currentSlide?t:null,key:"".concat(e,"-").concat(a),className:"".concat(w.a.dot," ").concat(a===E.currentSlide?w.a.dot_active:"")},l.a.createElement("img",{src:e,alt:"Click this thumbnail to scroll to slide ".concat(a)}))}));return l.a.createElement("div",{className:w.a.dotContainer},_(),l.a.createElement("div",{className:w.a.dotWrapper,ref:c},e.length<2?null:l.a.createElement("ul",{ref:i,className:w.a.dotList},a)),N())}(e.thumbnails),l.a.createElement("div",{id:"container_main",className:w.a.container},l.a.createElement("div",{id:"slideContainer",className:"".concat(w.a.slideContainer," ").concat(E.smooth?w.a.smoothSlide:""),ref:s,style:{width:"".concat(100*e.content.length,"%"),transform:"translateX(".concat(E.currentTransform,"%)")}},function(a){if(a&&a.length>0)return a.map((function(a,t){return l.a.createElement("div",{id:"SLIDE-".concat(t),className:w.a.slide,key:"slideContent-".concat(t),style:{width:"".concat(100/e.content.length,"%")}},a)}))}(e.content))))},k=function(e){var a=l.a.useState(null),t=Object(r.a)(a,2),n=t[0],c=t[1],i=l.a.useState(null),s=Object(r.a)(i,2),o=(s[0],s[1]);return l.a.useEffect((function(){null==n&&fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.json().then((function(e){c(e);var a=[];e.forEach((function(e){a.push({src:""})})),o([])}))}))}),[]),l.a.useEffect((function(){})),l.a.createElement("div",{className:"WebsiteSlider_container"},n&&n.length>0?l.a.createElement(_,{currentSlide:0,thumbnails:e.thumbnails,content:n.map((function(e,a){return l.a.createElement(f,{key:"websiteExample-".concat(a),id:e.id,title:e.title,description:e.description,assetDir:e.assetDir,href:e.href,imageList:e.imageList,badges:e.badges,gh_link:e.gh_link})}))}):null)};var y=function(){var e=l.a.useState(null),a=Object(r.a)(e,2),t=a[0],n=a[1],c=l.a.useState(null),i=Object(r.a)(c,2),s=i[0],o=i[1],d=function(e){var a=document.querySelector(".nav-links-list"),n=t?200:0;t&&g(),setTimeout((function(){e&&!0===e.onlyClose?a.classList.remove("links-list-display"):a.classList.toggle("links-list-display")}),n)},g=function(){var e=0,a=document.querySelector(".nav-links-list");a.classList.contains("links-list-display")&&(a.classList.remove("links-list-display"),e=200),setTimeout((function(){o(!0),n(!t)}),e)};return l.a.createElement("div",{className:"App"},l.a.createElement(m,{close:n,showModal:t,triggered:s}),l.a.createElement("nav",{id:"nav",className:"nav-container"},l.a.createElement("div",{className:"nav-logo"},l.a.createElement("a",{onClick:function(){d({onlyClose:!0})},href:"#kv"},"Andrius Svilys")),l.a.createElement("div",{className:"nav-links-container"},l.a.createElement("div",{className:"nav-links-hamburger",onClick:function(){d()}},l.a.createElement("img",{src:"icons/burger.svg",alt:"hamburger menu icon"})),l.a.createElement("ul",{className:"nav-links-list"},l.a.createElement("li",{className:"nav-links-listItem"},l.a.createElement("a",{onClick:function(){return d({onlyClose:!0})},href:"#projects"},"Projects")),l.a.createElement("li",{className:"nav-links-listItem"},l.a.createElement("a",{onClick:function(){return d({onlyClose:!0})},href:"#tools"},"Toolbox")),l.a.createElement("li",{className:"nav-links-listItem"},l.a.createElement("a",{onClick:function(){return d({onlyClose:!0})},href:"#about"},"About")),l.a.createElement("li",{className:"nav-links-listItem"},l.a.createElement("button",{onClick:function(){g()}},l.a.createElement("span",null,"Contact")))))),l.a.createElement("main",null,l.a.createElement("section",{id:"kv",className:"kv-container"},l.a.createElement("div",{className:"kv-wrapper"},l.a.createElement("div",{className:"kv-text"},l.a.createElement("h1",null,"My name is Andrius."),l.a.createElement("h3",null,"I am a web developer."),l.a.createElement("div",{className:"kv-buttons"},l.a.createElement("button",{className:"CTA_secondary"},l.a.createElement("a",{href:"#projects"},"see my work")),l.a.createElement("button",{className:"CTA-contact CTA",onClick:function(){g()}},l.a.createElement("span",null,"get in touch")))),l.a.createElement("div",{className:"kv-image"},l.a.createElement(u,null)))),l.a.createElement("section",null,l.a.createElement("h1",{className:"headline"},"projects"),l.a.createElement("div",{id:"projects",className:"section-wrapper"},l.a.createElement(k,{thumbnails:["carousel/andriussvilys/personalWebsite-2.png","carousel/admin/admin-1.png","carousel/image-search/Screenshot-desktop-1.png","carousel/devChallenge/dev-challenge-1.png","carousel/responsive/responsive-eg-1.jpg","carousel/t-pose/t-pose-desktop-1.png"]}))),l.a.createElement("section",null,l.a.createElement("h1",{className:"headline"},"Toolbox"),l.a.createElement("div",{id:"tools",className:"section-wrapper"},l.a.createElement(p,{data:[{title:"Front-end",list:[{title:"HTML5",img:"HTML5.png"},{title:"JavaScript",img:"js.png"},{title:"React JS",img:"react.svg"},{title:"Redux",img:"redux.svg"},{title:"CSS3",img:"CSS3.png"},{title:null,img:"sass.svg"}]},{title:"Back-end",list:[{title:null,img:"nodejs.png"},{title:"Postman",img:"postman.png"},{title:"express.js"}]},{title:"Graphic design",list:[{title:"PhotoShop",img:"photoshop.png"},{title:"Illustrator",img:"illustrator.png"},{title:"Figma",img:"figma.png"}]},{title:"Other",list:[{title:null,img:"git.png"},{title:null,img:"npm.png"},{title:null,img:"mongodb.png"},{title:"Digital Ocean",img:"digital-ocean.png"},{title:"AEM",img:"AEM.png"},{title:"VSCode",img:"vscode.png"},{title:null,img:"jira.png"}]}]}))),l.a.createElement("section",{className:"about-container"},l.a.createElement("h1",{className:"headline"},"ABOUT"),l.a.createElement("div",{id:"about",className:"section-wrapper"},l.a.createElement("div",{className:"about-wrapper"},l.a.createElement("div",{className:"about-image-wrapper"},l.a.createElement("img",{className:"about-image",alt:"portrait",src:"20201208_010458.jpg"})),l.a.createElement("div",{className:"about-description"},l.a.createElement("p",null,"I've first become interested in web development in 2018. Since then, I have completed an introductory course to digital design (2018) and worked at an international marketing agency in Warsaw (2019 - 2020). During my free time I kept on learning and trained my skills on a number of personal web projects. Finally I decided that I have to dive deeper into this discipline and in 2020 joined a computer science course in Vilnius University!",l.a.createElement("br",null),l.a.createElement("br",null),"Before all this, I lived a handful of years in London, where I earned a bachelor's degree in Fine Art. In fact, my interest in digital development began with a simple wish to make a website for my artwork.",l.a.createElement("br",null),l.a.createElement("br",null),"Please feel free to get in touch for collaborations or job offers."),l.a.createElement("button",{className:"CTA-contact CTA",onClick:function(){g()}},l.a.createElement("span",null,"get in touch")))))),l.a.createElement("footer",null)))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9b13d39a.chunk.js.map