(this.webpackJsonpboring=this.webpackJsonpboring||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),i=(a(14),a(1)),l=a(2),o=a(4),u=a(3),m=a(8),h=a.n(m),d=(a(15),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("div",{className:"logo-div"},r.a.createElement(h.a,{className:"Tilt",options:{max:45},style:{height:250,width:250}},r.a.createElement("div",{className:"fl w-100 pa2"},r.a.createElement("img",{onClick:function(){return e("home")},alt:"Logo",className:"imageBG",src:"https://www.freelogodesign.org/file/app/client/thumb/a162d1df-d83f-41a5-aeea-1a212a0bf5ab_200x200.png?1587988125211"}))))}}]),a}(r.a.Component)),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).linkGenerator=function(){fetch("https://aws.random.cat/meow").then((function(e){return e.json()})).then((function(t){e.setState({link:t.file}),e.setState({message:"Another!!!"})}))},e.state={link:"",message:"Show me a cat!!!"},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tc"},r.a.createElement("h2",{style:{cursor:"pointer"},class:"tc f-2 link dim ph3 pv2 mb2 dib white bg-dark-green",onClick:this.linkGenerator},this.state.message),r.a.createElement("h5",{className:"white"},"Please be patient. The image may take some time to load."),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.link,alt:"cat",style:{width:"70vw",height:"auto"}})))}}]),a}(r.a.Component),f=(a(7),function(e){return r.a.createElement("div",{className:"flexed tc"},r.a.createElement("div",{className:"grow bg-white dib tc",style:{"border-radius":"35px"}},r.a.createElement("h2",{className:"f-3 ttu tracked tc"},e.title),r.a.createElement("img",{src:"".concat(e.url),class:"br-100 bg-black",style:{width:"300px",height:"300px"},alt:"avatar"}),r.a.createElement("div",{className:"tc flexed2",style:{}},r.a.createElement("h5",{className:"f-3 ttu tracked tc"},e.desc)),r.a.createElement("br",null),r.a.createElement("h4",{onClick:function(){e.onRouteChange("site".concat(e.id))},class:"tc w-60 f4 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue"},"Let's Go!")))}),g=function(e){var t=e.data,a=e.onRouteChange,n=t.map((function(e,n){return r.a.createElement(f,{onRouteChange:a,id:t[n].id,title:t[n].title,desc:t[n].desc,url:t[n].url})}));return r.a.createElement("div",{className:"flexed"},n)},b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).linkGenerator=function(){fetch("https://catfact.ninja/fact").then((function(e){return e.json()})).then((function(t){e.setState({fact:t.fact}),e.setState({message:"Another!!!"})}))},e.state={fact:"",message:"Give me a cool fact!"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tc"},r.a.createElement("h2",{style:{cursor:"pointer"},class:"tc f-2 link dim ph3 pv2 mb2 dib white bg-dark-green",onClick:function(){return e.linkGenerator()}},this.state.message,"!!!"),r.a.createElement("div",{class:"pa4",style:{widht:"800px"}},r.a.createElement("div",{class:"bg-light-red athelas ml0 mt0 pl4 black-90 bw2 b-yellow"},r.a.createElement("p",{class:"f-5 lh-copy measure mt0"},"".concat(this.state.fact)))))}}]),a}(r.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).linkGenerator=function(){fetch("https://dog.ceo/api/breed/retriever/golden/images/random").then((function(e){return e.json()})).then((function(t){e.setState({link:t.message}),e.setState({message:"Another!!!"})}))},e.state={link:"",message:"Show me a doggo!!!"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tc"},r.a.createElement("h2",{style:{cursor:"pointer"},class:"tc f-2 link dim ph3 pv2 mb2 dib white bg-dark-green",onClick:function(){return e.linkGenerator()}},this.state.message),r.a.createElement("h5",{className:"white"},"Please be patient. The image may take some time to load."),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.link,alt:"dog",style:{width:"70vw",height:"auto"}})))}}]),a}(r.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).linkGenerator=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){e.setState({joke:t.value}),e.setState({message:"Another!!!"})}))},e.state={joke:"",message:"Show me a joke!!!"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tc"},r.a.createElement("h2",{style:{cursor:"pointer"},class:"tc f-2 link dim ph3 pv2 mb2 dib white bg-dark-green",onClick:function(){return e.linkGenerator()}},this.state.message,"!!!"),r.a.createElement("div",{class:"pa4",style:{widht:"800px"}},r.a.createElement("div",{class:"bg-light-red athelas ml0 mt0 pl4 black-90 bw2 b-yellow"},r.a.createElement("p",{class:"f-5 lh-copy measure mt0"},"".concat(this.state.joke)))))}}]),a}(r.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).linkGenerator=function(){fetch("https://tronalddump.io/random/meme").then((function(t){e.setState({joke:t.url}),e.setState({message:"Sorry! Can't refresh (ERR Status: 400)"})}))},e.state={joke:"",message:"What did he say?"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tc"},r.a.createElement("h2",{style:{cursor:"pointer"},className:"tc f-2 link dim ph3 pv2 mb2 dib white bg-dark-green",onClick:function(){return e.linkGenerator()}},this.state.message),r.a.createElement("h5",{className:"white"},"Please be patient. The image may take some time to load."),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.joke,alt:"meme",style:{width:"70vw",height:"auto"}})))}}]),a}(r.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tc"},r.a.createElement("h5",{className:"white"},"Please be patient. The image may take some time to load."),r.a.createElement("div",null,r.a.createElement("img",{src:"https://picsum.photos/720",alt:"photo_wallpaper",style:{width:"90vw",height:"auto"}})))}}]),a}(r.a.Component),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).setQuestion=function(t){fetch("https://opentdb.com/api.php?amount=1&category=".concat(t,"&difficulty=medium&type=boolean")).then((function(e){return e.json()})).then((function(t){console.log(t.results),e.setState({question:t.results[0].question}),e.setState({answer:t.results[0].correct_answer}),e.setState({output:"Click to reveal answer"})}))},e.revealAnswer=function(){e.setState({output:e.state.answer})},e.state={question:"",answer:"",output:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tc"},r.a.createElement("p",{className:"f-2 white"}," All questions are True/False. Please select a category. "),r.a.createElement("nav",{class:"ph3 ph5-ns pv4"},r.a.createElement("div",{class:"nowrap overflow-x-auto"},r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(9)}},"General Knowledge"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(30)}},"Gadgets and Tech"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(20)}},"Mythology"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(21)}},"Sports"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(25)}},"Art"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(23)}},"History"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(12)}},"Music"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(11)}},"Films"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(10)}},"Books"),r.a.createElement("p",{class:"link dim gray f5 f4-ns dib mr3",style:{cursor:"pointer"},onClick:function(){return e.setQuestion(31)}},"Anime and Manga"))),r.a.createElement("div",{class:"pa4",style:{widht:"800px"}},r.a.createElement("div",{class:"bg-light-red athelas ml0 mt0 pl4 black-90 bw2 b-yellow"},r.a.createElement("p",{class:"f-5 lh-copy measure mt0"},"".concat(this.state.question))),r.a.createElement("p",{className:"white f5",onClick:function(){return e.revealAnswer()},style:{cursor:"pointer"}}," ",this.state.output)))}}]),a}(r.a.Component),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).linkGenerator=function(){fetch("http://www.numbersapi.com/".concat(e.state.search,"?json")).then((function(e){return e.json()})).then((function(t){e.setState({fact:t.text})}))},e.handleChange=function(t){e.setState({search:t.target.value}),console.log(e.state.search)},e.state={search:"",fact:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 bg-lightest-blue ba b--green w-80",type:"search",placeholder:"Enter a number",onChange:this.handleChange})),r.a.createElement("p",{class:"f6 link dim ph3 pv2 mb2 dib white bg-dark-green",onClick:function(){return e.linkGenerator()}},"Let's Go!"),r.a.createElement("div",{class:"pa4",style:{widht:"800px"}},r.a.createElement("div",{class:"bg-light-red athelas ml0 mt0 pl4 black-90 bw2 b-yellow"},r.a.createElement("p",{class:"f-5 lh-copy measure mt0"},"".concat(this.state.fact)))))}}]),a}(r.a.Component),C=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).linkGenerator=function(){fetch("http://numbersapi.com/".concat(e.state.search,"/date?json")).then((function(e){return e.json()})).then((function(t){e.setState({fact:t.text})}))},e.handleChange=function(t){e.setState({search:t.target.value}),console.log(e.state.search)},e.state={search:"",fact:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 bg-lightest-blue ba b--green w-80",type:"search",placeholder:"Enter a date in MM/DD format",onChange:this.handleChange})),r.a.createElement("p",{class:"f6 link dim ph3 pv2 mb2 dib white bg-dark-green",onClick:function(){return e.linkGenerator()}},"Let's Go!"),r.a.createElement("div",{class:"pa4",style:{widht:"800px"}},r.a.createElement("div",{class:"bg-light-red athelas ml0 mt0 pl4 black-90 bw2 b-yellow"},r.a.createElement("p",{class:"f-5 lh-copy measure mt0"},"".concat(this.state.fact)))))}}]),a}(r.a.Component),O=(a(16),function(e){return r.a.createElement("div",{style:{overflow:"scroll",height:"800px"}},e.children)}),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onRouteChange=function(t){e.setState({route:t})},e.state={robots:[{id:1,url:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",title:"CatSnaps",desc:"See a random cat photo"},{id:2,url:"https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782",title:"DogSnaps",desc:"See a random dog photo"},{id:3,url:"https://uvhs.org/wp-content/uploads/2020/03/cat-laptop.jpg",title:"Know the Cat",desc:"See a random cat fact"},{id:4,url:"https://i.pinimg.com/564x/48/1d/3c/481d3c66c1402b15b1f2ddc6a1af30d7.jpg",title:"Chuck Jokes",desc:"Hear a Chuck Norris about joke"},{id:5,url:"https://avatars.slack-edge.com/2016-11-19/107609641703_f0911765615212fcac12_512.png",title:"Tronald Dump",desc:"See a meme on something actually said by Trump"},{id:7,url:"https://s3.amazonaws.com/pbblogassets/uploads/2019/12/22140346/shutterstock_287714480-1.jpg",title:"Photography",desc:"See a random photograph"},{id:8,url:"https://img.favpng.com/18/4/11/trivia-logo-game-sporcle-quiz-png-favpng-ppsB82QfU9PvGV7tuvLAUxqMh.jpg",title:"Trivia",desc:"A random trivia question"},{id:9,url:"https://specials-images.forbesimg.com/imageserve/1135400792/960x0.jpg?fit=scale",title:"Number Fact",desc:"Enter a number and hear a random fact about it"},{id:10,url:"https://img.freepik.com/free-vector/calendar-deadline-event-reminder-notification-icon-flat-cartoon_101884-757.jpg?size=338&ext=jpg",title:"Date Fact",desc:"Enter a date and hear a random fact about it"}],route:"home",link:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e;return"home"===this.state.route?e=r.a.createElement(O,null,r.a.createElement(g,{onRouteChange:this.onRouteChange,data:this.state.robots})):"site1"===this.state.route?e=r.a.createElement(p,null):"site2"===this.state.route?e=r.a.createElement(v,{onRouteChange:this.onRouteChange}):"site3"===this.state.route?e=r.a.createElement(b,null):"site4"===this.state.route?e=r.a.createElement(k,null):"site5"===this.state.route?e=r.a.createElement(E,null):"site7"===this.state.route?e=r.a.createElement(y,null):"site8"===this.state.route?e=r.a.createElement(w,null):"site9"===this.state.route?e=r.a.createElement(j,null):"site10"===this.state.route&&(e=r.a.createElement(C,null)),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(d,{onRouteChange:this.onRouteChange})),e,"}")}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.92cb579e.chunk.js.map