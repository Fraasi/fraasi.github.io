(this["webpackJsonpfraasi.github.io"]=this["webpackJsonpfraasi.github.io"]||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/spinner.d059232c.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/code.23a2f1cd.svg"},,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(5),l=a.n(i),o=(a(16),a(6)),s=a(7),c=a(2),h=a(10),p=a(9);function m(){var e=this;fetch("https://api.github.com/users/fraasi/repos").then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){var a=t.filter((function(e){return!e.name.includes("repo")&&!e.fork}));a.sort((function(e,t){return new Date(t.created_at)-new Date(e.created_at)})),e.setState({repos:a})})).catch((function(e){console.log(e),document.querySelector(".dropdown-content").innerHTML="".concat(e.message,"<br/>Try reloading page")}))}function u(){var e=Math.floor(72*Math.random())+1;return" https://raw.githubusercontent.com/Fraasi/Phyllotaxis-leaf-arrangement/gh-pages/images/phyllotaxis".concat(e,".png")}function d(){var e=this;function t(){this.setState({dailyQuote:{quote:"Tax his tobacco, Tax his drink, Tax him if he Tries to think. Tax his cigars, Tax his beers, If he cries Tax his tears. ",author:"Charlie Reese"}})}fetch("https://cors-anywhere.herokuapp.com/https://ms-rq-api.herokuapp.com/").then((function(a){return 200!==a.status?(setTimeout(t.bind(e),4e4),a):a.json()})).then((function(t){var a=Object.keys(t)[0];e.setState({dailyQuote:{quote:t.statusText||t[a],author:t.status||a}})})).catch((function(a){console.log("err",a),e.setState({dailyQuote:{quote:"".concat(a),author:"ms-rq-api"}}),setTimeout(t.bind(e),4e4)}))}var f=["https://t00.deviantart.net/lKk0vs1o7swbzXiI1Ibv85URpI4=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/7096/th/pre/f/2009/183/2/f/krtek_by_doofassi.jpg","https://t00.deviantart.net/jCb5J0JkqMpiqpS0h_ju0im9TsE=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/e139/th/pre/f/2009/225/e/8/re_l_mayer_by_doofassi.jpg","https://t00.deviantart.net/1uO9u8--VRuVJ4TYAoYWu_Txg9U=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/a771/th/pre/f/2010/262/8/a/sunset_at_midsummer_night_by_doofassi-d2z2c8d.jpg","https://t00.deviantart.net/UvlR9bNFgN4_acuxS5GX4tJcNMM=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/2ca9/th/pre/f/2009/203/e/f/betty_the_goji_berry_plant_by_doofassi.jpg","https://t00.deviantart.net/9L03KQed9PcS4tHWcGPDHCyI490=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/3ad1/th/pre/f/2009/247/1/9/chekist_by_doofassi.jpg","https://t00.deviantart.net/2TKoP8NsYGsa6vhszqp-hL9QqUA=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/87ab/th/pre/f/2010/169/f/6/fat_tree_sparrow_fledgling_by_doofassi.jpg","https://t00.deviantart.net/-YmA_lfwikxBqsAlZ-SJcm2Iw7Y=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/0032/th/pre/f/2009/342/8/a/fluctifracus_by_doofassi.jpg","https://t00.deviantart.net/56XJmgHOrMKDTF8sp1QdG1CLHP4=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/17fd/th/pre/f/2009/163/a/d/sunsetshadowman_by_doofassi.jpg","https://t00.deviantart.net/AFllHOxCe7u5dkNOnrB3HoPbrsA=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/4761/th/pre/f/2009/176/d/6/fuzzball_by_doofassi.jpg","https://orig00.deviantart.net/44d2/f/2009/194/8/3/dead_planets_by_doofassi.jpg","https://t00.deviantart.net/8bxxAzRobSKe-hmTIYPuRI7qzwc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/6d5f/th/pre/f/2009/188/6/1/burtonesque_by_doofassi.jpg","https://t00.deviantart.net/iDzct_7nEciwzwm31kU7eCwj7K8=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/7904/th/pre/f/2009/177/a/a/nell_by_doofassi.jpg","https://t00.deviantart.net/kmDfJwBzf_nVXwFiHGtof4Mlquo=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/d814/th/pre/f/2009/221/3/3/skull_no5_by_doofassi.jpg","https://t00.deviantart.net/KnkXpTHzayAWky1h13tfha7u8Xo=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/3ab1/th/pre/f/2012/251/d/5/ishmael_by_doofassi-d5e06vu.jpg","https://t00.deviantart.net/tA9n79AguhBV8W6-chPTMJOFPzs=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/43fb/th/pre/f/2009/174/4/7/hoodie_by_doofassi.jpg","https://t00.deviantart.net/cKMO8tUVU00AtRzZj8U53asL7_Q=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/ec0f/th/pre/f/2009/234/5/b/moonbathing_by_doofassi.jpg","https://t00.deviantart.net/VkLHz0L-lK8cBsIpmmbOezzVxpc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/7c1c/th/pre/f/2009/176/b/8/apo_12_by_doofassi.jpg","https://t00.deviantart.net/hBxh57bC_af7i2KQfGn417efoJc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/d291/th/pre/f/2009/290/3/4/pot_marigold_petals_by_doofassi.jpg","https://t00.deviantart.net/HPkhKHfXoyAxpWZqH_3aepALmA0=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/8cc0/th/pre/f/2010/197/c/4/julie_by_doofassi.jpg","https://t00.deviantart.net/Yft5d2AeuOuPIrQjt3SGcs2Bok8=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/3f54/th/pre/f/2009/311/f/b/frozen_siberian_tea_leaf_by_doofassi.jpg","https://t00.deviantart.net/t9DK3i_iT1CpubkhxKs54wyESP8=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/f922/th/pre/f/2009/196/2/8/bill_hicks_quick_sketch_by_doofassi.jpg"];function g(){var e=Math.floor(Math.random()*f.length);return f[e]}var b=a(3),_=a.n(b),E=(a(17),{mainSkills:["Javascript","Node","React","Electron","HTML5","CSS3"],libraries:["Leaflet.js","p5.js","d3.js","Markdown.js","fullcalendar.js","Cheeriojs","node-commander","node-express","node-mongodb"],other:["git & github","npm","Heroku","Photoshop"],quickLinks:[{link:"https://github.com/Fraasi/pispalan-tapahtumat",name:"Pispalan-tapahtumat",description:"(local happenings all in one nice little pwa website)"},{link:"https://github.com/Fraasi/Saeae",name:"Saeae (S\xe4\xe4)",description:"(electron desktop app to show weather temperature in the notification area/system tray)"},{link:"https://github.com/Fraasi/Phyllotaxis-leaf-arrangement",name:"Phyllotaxis",description:"(little mathematical graphics app)"},{link:"https://github.com/Fraasi/teetoes",name:"Teetoes",description:"(electron desktop text to speech app with google cloud voices)"},{link:"http://github.com/Fraasi/Rogue-like-fcc",name:"Alien adventure",description:"(a little rogue like game)"},{link:"https://github.com/Fraasi/nasijarven-jaat-chart",name:"N\xe4sij\xe4rven j\xe4\xe4t chart",description:"(d3.js chart showing dates N\xe4sij\xe4rvi lake froze & unfroze between 1975-2019)"}]});function v(){return n.a.createElement("div",{className:"body-right"},n.a.createElement("h3",null,"About Fra A.S I",n.a.createElement("img",{src:"https://avatars1.githubusercontent.com/u/22402899?s=50&u=a34f7090e4ce049968617f805aaf4f605559d629&v=4",alt:"github avatar"})),n.a.createElement("p",null,"I am a hobbyist coder who dove too deep into javascript and built this little portfolio site in hopes of maybe landing a job in the industry one day.",n.a.createElement("br",null),"Motto: If you can't learn it yourself, no school can help you."),n.a.createElement("p",null,"Choose a repository from the dropdown menu to view its README.md here."),n.a.createElement("h3",null,"CV"),n.a.createElement("p",null,n.a.createElement("b",null,"Main skills"),n.a.createElement("br",null),E.mainSkills.map((function(e){return n.a.createElement("li",{key:e},e)})),n.a.createElement("br",null),n.a.createElement("b",{className:"b"},"Some libraries I've used along the way"),n.a.createElement("br",null),E.libraries.map((function(e){return n.a.createElement("li",{key:e},e)})),n.a.createElement("br",null),n.a.createElement("b",null,"Other related technologies"),n.a.createElement("br",null),E.other.map((function(e){return n.a.createElement("li",{key:e},e)})),n.a.createElement("br",null),n.a.createElement("b",null,"Quick links to some presentable projects"),n.a.createElement("br",null),E.quickLinks.map((function(e){var t=e.name,a=e.link,r=e.description;return n.a.createElement(n.a.Fragment,{key:t},n.a.createElement("li",null,n.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t)),n.a.createElement("li",null,r))})),n.a.createElement("br",null),n.a.createElement("b",null,"Contact"),n.a.createElement("br",null),n.a.createElement("li",null,"Fraasi.gh",n.a.createElement("span",{style:{display:"none"}},"foo"),"@gmail.com (English/Finnish)")))}a(18);var k=a(1),y=a.n(k);_.a.setFlavor("github");var x=new _.a.Converter;function w(e){var t=e.currentRepo,a=e.loading,r=e.error;if(r)return n.a.createElement("p",null,"Something went wrong:",n.a.createElement("br",null),r);if(""===t.readme&&!a)return n.a.createElement(v,null);if(a)return n.a.createElement("img",{src:y.a,className:"spinner",alt:"spinner"});var i=t.readme.replace(/\(([\w/-]+(.jpg|.png))\)/g,(function(e,a){return"(https://raw.githubusercontent.com/Fraasi/".concat(t.name,"/").concat(t.branch,"/").concat(a,")")}));return n.a.createElement("div",{className:"body-right"},n.a.createElement("h3",null,n.a.createElement("a",{rel:"noopener noreferrer",href:t.html_url,target:"_blank"},t.title)),"Created:\xa0\xa0".concat(t.created_at),n.a.createElement("br",null),"Updated: ".concat(t.updated_at),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"center"},"\u2193(README.md)\u2193"),n.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:x.makeHtml(i)}}))}var j=a(8),N=a.n(j);a(19),a(20);function C(e){var t=e.repos,a=e.handleRepoClick,r=e.titleClick;return n.a.createElement("header",{className:"header"},n.a.createElement("img",{src:N.a,className:"code-logo",alt:"code-logo"}),n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{type:"button",className:"dropbutton"},"Repositories"),n.a.createElement("div",{className:"dropdown-content"},n.a.createElement("ul",null,t.map((function(e){var t=e.name.replace(/-/g," ");return n.a.createElement("li",{key:e.id,"data-name":e.name,onClick:a},t)}))))),n.a.createElement("h1",{className:"title",onClick:r},"Fra A.S I"),n.a.createElement("div",{className:"header-bar left"},n.a.createElement("span",{className:"header-shadow left top"}),n.a.createElement("span",{className:"header-shadow left bottom"})),n.a.createElement("div",{className:"header-bar right"},n.a.createElement("span",{className:"header-shadow right top"}),n.a.createElement("span",{className:"header-shadow right bottom"})))}a(21);function R(e){var t=e.dailyQuote,a=e.deviantImgUrl,r=e.phyllotaxisImgUrl;return n.a.createElement("div",{className:"left-side"},n.a.createElement("a",{href:"https://fraasi.github.io/Random-quote-machine/",rel:"noopener noreferrer",title:"Random quote api",target:"_blank"},n.a.createElement("b",null,"Random quote api"),n.a.createElement("br",null)),n.a.createElement("div",{className:"left quote"},0===t.quote.length&&n.a.createElement("img",{src:y.a,className:"spinner",alt:"spinner"}),t.quote,n.a.createElement("br",null),"- ",t.author),n.a.createElement("div",{className:"left"},n.a.createElement("a",{rel:"noopener noreferrer",title:"PhylloTaxis",href:"https://fraasi.github.io/Phyllotaxis-leaf-arrangement/PhylloTaxis.html",target:"_blank"},0===r.length&&n.a.createElement("img",{src:y.a,className:"spinner",alt:"spinner"}),n.a.createElement("img",{src:r,alt:"Phyllotaxis",className:"left-image"}))),n.a.createElement("div",{className:"left"},n.a.createElement("a",{rel:"noopener noreferrer",title:"Deviant art pic",href:"https://www.deviantart.com/doofassi/gallery/",target:"_blank"},0===a.length&&n.a.createElement("img",{src:y.a,className:"spinner",alt:"spinner"}),n.a.createElement("img",{src:a,alt:"Deviant art pic",className:"left-image"}))),n.a.createElement("hr",null),n.a.createElement("div",{className:"left links"},n.a.createElement("strong",null,"Fraasi @"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://github.com/Fraasi/",target:"_blank",rel:"noopener noreferrer"},"Github"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.npmjs.com/~fraasi",target:"_blank",rel:"noopener noreferrer"},"Npm"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://codepen.io/Fraasi/",target:"_blank",rel:"noopener noreferrer"},"Codepen"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.deviantart.com/doofassi/gallery/",target:"_blank",rel:"noopener noreferrer"},"Deviantart")),n.a.createElement("hr",null))}a(22);var S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={error:"",loading:!1,phyllotaxisImgUrl:"",deviantImgUrl:"",repos:[],currentRepo:{readme:"",created_at:"",name:"",title:"",updated_at:"",html_url:"",branch:""},dailyQuote:{author:"",quote:""}},e.handleRepoClick=e.handleRepoClick.bind(Object(c.a)(e)),e.titleClick=e.titleClick.bind(Object(c.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){m.call(this),d.call(this),this.setState({phyllotaxisImgUrl:u(),deviantImgUrl:g()})}},{key:"handleRepoClick",value:function(e){var t=this;e.persist(),this.setState({loading:!0,error:"",currentRepo:{readme:""}},(function(){var a=e.target.dataset.name,r=t.state.repos.find((function(e){return e.name===a})),n=r.default_branch;fetch("https://raw.githubusercontent.com/Fraasi/".concat(a,"/").concat(n,"/README.md")).then((function(e){if(!e.ok){var a="".concat(e.status," ").concat(e.statusText,", repository url: ").concat(r.html_url);throw t.setState({error:a}),new Error(e.statusText)}return e.text()})).then((function(e){t.setState({loading:!1,currentRepo:{readme:e,name:r.name,title:r.name.replace(/-/g," "),updated_at:r.updated_at,created_at:r.created_at,html_url:r.html_url,branch:n}})})).catch((function(){t.setState({loading:!1,currentRepo:{title:""}})}))}))}},{key:"titleClick",value:function(){this.setState({error:"",currentRepo:{readme:"",loading:!1}})}},{key:"render",value:function(){var e=this.state,t=e.phyllotaxisImgUrl,a=e.deviantImgUrl,r=e.dailyQuote,i=e.repos,l=e.currentRepo,o=e.loading,s=e.error;return n.a.createElement("div",{className:"App"},n.a.createElement(C,{repos:i,handleRepoClick:this.handleRepoClick,titleClick:this.titleClick}),n.a.createElement("section",{className:"body"},n.a.createElement(R,{deviantImgUrl:a,phyllotaxisImgUrl:t,dailyQuote:r}),n.a.createElement(w,{currentRepo:l,loading:o,error:s})))}}]),a}(r.Component);l.a.render(n.a.createElement(S,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.9d99aa16.chunk.js.map