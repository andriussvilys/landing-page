(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var l=t(0),i=t.n(l),n=t(6),s=t.n(n),c=(t(14),t(15),function(){return i.a.createElement("div",{className:"spinner-container"},i.a.createElement("div",{className:"circle-labels"},i.a.createElement("span",{className:"circle-label circle-label_1"},"IMAGINE"),i.a.createElement("span",{className:"circle-label circle-label_2"},"PLAN"),i.a.createElement("span",{className:"circle-label circle-label_3"},"BUILD")),i.a.createElement("div",{className:"circleBound"},i.a.createElement("div",{className:"innerCircle"},i.a.createElement("div",{className:"triangle-wrapper"},i.a.createElement("div",{className:"circle circle-1"},i.a.createElement("img",{src:"triangle/write-emoji.png",alt:"write emoji"})),i.a.createElement("div",{className:"circle circle-2"},i.a.createElement("img",{src:"triangle/plan-emoji.png",alt:"map emoji"})),i.a.createElement("div",{className:"circle circle-3"},i.a.createElement("img",{src:"triangle/lightbulb-emoji.png",alt:"lightbulb emoji"}))))))}),r=function(e){return e.img?e.title?i.a.createElement("div",{className:"details-badge",key:"".concat(e.section,"-badge-").concat(e.title)},i.a.createElement("img",{src:"badges/".concat(e.img),alt:e.title}),i.a.createElement("span",null,e.title)):i.a.createElement("div",{className:"details-badge",key:"".concat(e.section,"-badge-").concat(e.title)},i.a.createElement("img",{className:"details-badge-fullWidth",src:"badges/".concat(e.img),alt:e.img})):i.a.createElement("div",{className:"details-badge",key:"".concat(e.section,"-badge-").concat(e.title)},i.a.createElement("span",null,e.title))},m=function(e){return i.a.createElement("div",{className:"webExample-tools-container"},i.a.createElement("h1",{className:"headline"},"Toolbox:"),i.a.createElement("div",{className:"webExample-tools-wrapper"},e.data.map((function(e){return a=e.title,t=e.list,i.a.createElement("div",{className:"tools-wrapper"},i.a.createElement("div",{className:"tools-title"},i.a.createElement("span",null,a,":")),i.a.createElement("div",{className:"tools-items"},t.map((function(e){return i.a.createElement(r,{section:a,title:e.title,img:e.img})}))));var a,t}))))},o=t(8),g=t(7),d=t.n(g),p=(t(31),t(32),t(33),function(e){var a={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,lazyLoading:"progressive"};return i.a.createElement(d.a,a,e.imageList.map((function(a){return i.a.createElement("img",{src:"carousel/".concat(e.assetDir,"/").concat(a),alt:a,key:"slickCarousel-".concat(a)})})))}),u=(t(34),function(e){var a=i.a.useState(e.open),t=Object(o.a)(a,2),l=t[0],n=t[1];return i.a.createElement("article",{className:"webExample-container ".concat(l?"":"webExample-hide"),id:e.id},i.a.createElement("div",{className:"webExample-wrapper"},i.a.createElement("div",{onClick:function(a){a.stopPropagation();var t=document.querySelector("#".concat(e.id)),i=document.querySelector("#".concat(e.id," .webExample-content")).clientHeight;l&&(t.style="height: ".concat(i+50,"px")),n(!l),console.log("HEIGHT : ".concat(i))},className:"webExample-details-title"},i.a.createElement("h3",null,e.title)),i.a.createElement("div",{className:"webExample-content"},i.a.createElement("div",{className:"webExample-carousel-container"},i.a.createElement(p,{assetDir:e.assetDir,imageList:e.imageList}),i.a.createElement("div",{className:"webExample-carousel-sizeToggle",onClick:function(e){e.target.parentNode.classList.toggle("webExample-carousel_fullWidth")}})),i.a.createElement("div",{className:"webExample-details-container"},i.a.createElement("div",{className:"webExample-details-description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),i.a.createElement("div",{className:"webExample-details-tags"},i.a.createElement("div",{className:"webExample-details-badges"},e.badges.badges.map((function(a){return i.a.createElement(r,{section:e.id,title:a.title,img:a.img})}))),i.a.createElement("div",{className:"webExample-details-other"},function(a){return a.length>0?a.map((function(a){return i.a.createElement("div",{className:"details-badge_other",key:"".concat(e.id,"-tag-").concat(a)},i.a.createElement("span",null,a))})):null}(e.badges.other))),i.a.createElement("div",{className:"webExample-details-CTA"},i.a.createElement("button",{className:"details-CTA-button"},i.a.createElement("a",{href:e.href,target:"_blank"},"CLICK TO VISIT")))))))});var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("nav",{id:"nav",className:"nav-container"},i.a.createElement("div",{className:"nav-logo"},i.a.createElement("a",{href:"#kv"},"Andrius Svilys")),i.a.createElement("div",{className:"nav-links-container"},i.a.createElement("div",{className:"nav-links-hamburger",onClick:function(){document.querySelector(".nav-links-list").classList.toggle("links-list-display")}}),i.a.createElement("ul",{className:"nav-links-list"},i.a.createElement("li",{className:"nav-links-listItem"},i.a.createElement("a",{href:"#examples"},"Examples")),i.a.createElement("li",{className:"nav-links-listItem"},i.a.createElement("a",{href:"#tools"},"Tools")),i.a.createElement("li",{className:"nav-links-listItem"},i.a.createElement("a",{href:"#about"},"About"))))),i.a.createElement("main",null,i.a.createElement("section",{id:"kv",className:"kv-container"},i.a.createElement("div",{className:"kv-wrapper"},i.a.createElement("div",{className:"kv-text"},i.a.createElement("h1",null,"My name is Andrius."),i.a.createElement("h3",null,"I am a front-end developer."),i.a.createElement("a",{href:"#about",className:"CTA-contact"},"get in touch")),i.a.createElement("div",{className:"kv-image"},i.a.createElement(c,null))),i.a.createElement("div",{className:"CTA-seemore"},i.a.createElement("a",{href:"#examples",className:"CTA-seemore-text"},"See my work"),i.a.createElement("span",{className:"CTA-seemore-line"}))),i.a.createElement("section",{id:"examples"},i.a.createElement(u,{open:!0,id:"personal-website",title:"Image archive",assetDir:"andriussvilys",href:"https://andriussvilys.com",imageList:["personalWebsite-2.png","personalWebsite-3.png","personalWebsite-4.png","personalWebsite-5.png","personalWebsite-6.jpg","personalWebsite-7.jpg","personalWebsite-8.jpg","personalWebsite-9.jpg","personalWebsite-10.jpg"],badges:{badges:[{title:"React JS",img:"react.svg"},{title:null,img:"sass.svg"},{title:"Digital Ocean",img:"digital-ocean.png"}],other:["React-slick","filters","Tags","Related images"]}}),i.a.createElement(u,{open:!1,id:"personal-website-admin",title:"Image archive (admin page)",assetDir:"admin",href:"https://andriussvilys.com/admin",imageList:["admin-1.png","admin-2.png","admin-3.png","admin-4.png"],badges:{badges:[{title:"React JS",img:"react.svg"},{title:null,img:"node-js.svg"},{title:null,img:"mongodb.png"},{title:null,img:"sass.svg"}],other:["Image upload","CRUD","Authorization","Modals","Progress bar"]}}),i.a.createElement(u,{open:!1,id:"image-search",title:"Image search API",assetDir:"image-search",href:"https://andriussvilys.github.io/image-search/",imageList:["Screenshot-desktop-1.png","Screenshot-mobile-1.jpg","Screenshot-mobile-2.jpg","Screenshot-mobile-3.jpg"],badges:{badges:[{title:"React JS",img:"react.svg"},{title:"Redux",img:"redux.svg"},{title:null,img:"sass.svg"}],other:["unsplash-API"]}}),i.a.createElement(u,{open:!1,id:"dev-challenge",title:"Built from a mockup",assetDir:"devChallenge",href:"https://andriussvilys.github.io/bmb-challenge/",imageList:["dev-challenge-1.png","dev-challenge-3.png","dev-challenge-2.png","dev-challenge-1-mob.jpg","dev-challenge-3-mob.png","dev-challenge-2-mob.png"],badges:{badges:[{title:"HTML5",img:"HTML5.png"},{title:null,img:"sass.svg"},{title:"Parcel compiler",img:"parcel-og.png"}],other:["Responsvie design","Semantic HTML","Google Maps API"]}}),i.a.createElement(u,{open:!1,id:"responsive",title:"Responsive design",assetDir:"responsive",href:"https://andriussvilys.github.io/responsive-eg1/",imageList:["responsive-eg-1.jpg","responsive-eg-2.jpg"],badges:{badges:[{title:"HTML5",img:"HTML5.png"},{title:null,img:"sass.svg"}],other:["Responsive design","Semantic HTML"]}}),i.a.createElement(u,{open:!1,id:"t-pose",title:"T-Pose",assetDir:"t-pose",href:"https://andriussvilys.github.io/t-pose/",imageList:["t-pose-desktop-1.png","t-pose-desktop-2.png","t-pose-mob.png"],badges:{badges:[{title:"React",img:"react.svg"},{title:null,img:"sass.svg"}],other:[]}})),i.a.createElement("section",{id:"tools"},i.a.createElement(m,{data:[{title:"Front-end",list:[{title:"HTML5",img:"HTML5.png"},{title:"JavaScript",img:"js.png"},{title:"React JS",img:"react.svg"},{title:"Redux",img:"redux.svg"},{title:"CSS3",img:"CSS3.png"},{title:null,img:"sass.svg"}]},{title:"Back-end",list:[{title:null,img:"node-js.svg"},{title:"Postman",img:"postman.png"},{title:"express.js"}]},{title:"Graphic design",list:[{title:"PhotoShop",img:"photoshop.png"},{title:"Illustrator",img:"illustrator.png"},{title:"Figma",img:"figma.png"}]},{title:"Other",list:[{title:null,img:"git.png"},{title:null,img:"npm.png"},{title:null,img:"mongodb.png"},{title:"Digital Ocean",img:"digital-ocean.png"},{title:"AEM",img:"AEM.png"},{title:"VSCode",img:"vscode.png"},{title:null,img:"jira.png"}]}]})),i.a.createElement("section",{id:"about"},i.a.createElement("h1",{className:"headline"},"ABOUT:"),i.a.createElement("div",{className:"about-wrapper"},i.a.createElement("div",{className:"about-image-wrapper"},i.a.createElement("img",{className:"about-image",alt:"portrait"})),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))),i.a.createElement("div",{className:"footer"})),i.a.createElement("footer",null))};s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root"))},9:function(e,a,t){e.exports=t(35)}},[[9,1,2]]]);
//# sourceMappingURL=main.34e2cd3b.chunk.js.map