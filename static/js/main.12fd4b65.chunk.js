(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),s=n.n(o),i=(n(16),n(1)),c=n(2),l=n(4),u=n(3),m=n(5),d=n(6),h="https://www.rijksmuseum.nl/api/en/collection?key=5p5zT3Jl&format=json&s=relevance&imgonly=true&ps=12&q=",p="https://kickstart-me.herokuapp.com/art",f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={keyword:"",art:[]},n.handleChange=function(e){n.setState(Object(d.a)({},e.target.id,e.target.value))},n.getArt=function(e){e.preventDefault(),fetch(h+n.state.keyword).then(function(e){return e.json()},function(e){return console.log(e)}).then(function(e){return n.setState({art:e.artObjects,keyword:""})},function(e){return console.log(e)})},n.saveArt=function(e){console.log(e.longTitle,e.webImage.url),fetch(p,{method:"POST",body:JSON.stringify({title:e.longTitle,imageurl:e.webImage.url,usernotes:"",userid:""}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()},function(e){return console.log(e)}).then(function(e){return n.setState({apiResponse:e})},function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-art"},r.a.createElement("form",{onSubmit:this.getArt},r.a.createElement("input",{id:"keyword",type:"text",placeholder:"keyword",value:this.state.keyword,onChange:this.handleChange}),r.a.createElement("input",{id:"submit",className:"button-primary",type:"submit",value:"Get Inspiration"})),r.a.createElement("div",{className:"show-art"},this.state.art.map(function(t){return r.a.createElement("div",{className:"art-piece",key:t.id},r.a.createElement("h5",null,t.longTitle),r.a.createElement("p",null,t.principalOrFirstMaker),r.a.createElement("img",{src:t.webImage.url,alt:t.title}),r.a.createElement("button",{onClick:function(){e.saveArt(t)}},"Add To Favorites"))})))}}]),t}(a.Component),v=n(7),g="https://kickstart-me.herokuapp.com/art",b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={favorites:[],showUpdateId:"",usernotes:""},n.getFavorites=function(){fetch(g).then(function(e){return e.json()},function(e){console.log(e)}).then(function(e){n.setState({favorites:e})})},n.showNotes=function(e){n.setState({showUpdateId:e._id})},n.handleChange=function(e){n.setState(Object(d.a)({},e.target.id,e.target.value))},n.saveIdeas=function(e){e.preventDefault(),fetch(g+"/"+n.state.showUpdateId,{method:"PUT",body:JSON.stringify({usernotes:n.state.usernotes}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()},function(e){console.log(e)}).then(function(e){var t=Object(v.a)(n.state.favorites);t[n.state.favorites.findIndex(function(t){return t._id===e._id})].usernotes=e.usernotes,n.setState({showUpdateId:"",usernotes:"",APIupdateResponse:e,favorites:t})})},n.deleteFavorite=function(e){fetch(g+"/"+e._id,{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){var t=Object(v.a)(n.state.favorites),a=n.state.favorites.findIndex(function(t){return t._id===e._id});t.splice(a,1),n.setState({favorites:t,APIresponse:e})})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getFavorites()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"favorites container"},r.a.createElement("h2",null,"Your Saved Favorites"),this.state.favorites.map(function(t){return r.a.createElement("div",{className:"fav",key:t._id},r.a.createElement("h5",null,t.title),r.a.createElement("img",{src:t.imageurl,alt:t.title}),t.usernotes?r.a.createElement("div",{className:"usernotes"},r.a.createElement("h5",null,"Your Ideas:"),r.a.createElement("form",{onSubmit:e.saveIdeas},r.a.createElement("input",{id:"usernotes",className:"eight column",type:"text",placeholder:t.usernotes,onChange:e.handleChange}),r.a.createElement("input",{type:"submit",value:"Update Ideas"})),r.a.createElement("button",{onClick:function(){e.deleteFavorite(t)}},"Delete")):e.state.showUpdateId===t._id?r.a.createElement("form",{onSubmit:e.saveIdeas},r.a.createElement("input",{className:"eight columns",type:"text",id:"usernotes",name:"usernotes",value:e.state.usernotes,onChange:e.handleChange}),r.a.createElement("input",{type:"submit",className:"button-primary",value:"Save Ideas"})):r.a.createElement("div",{className:"actions"},r.a.createElement("button",{className:"button-primary",onClick:function(){e.showNotes(t)}},"Add Your Ideas"),r.a.createElement("button",{onClick:function(){e.deleteFavorite(t)}},"Delete")))}))}}]),t}(a.Component),y=(n(17),n(18),n(19),"http://localhost:3003"),E=(a.Component,function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"kickstART"),r.a.createElement("p",null,"Find Inspiration And Spark Creativity")),r.a.createElement(f,null),r.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.12fd4b65.chunk.js.map