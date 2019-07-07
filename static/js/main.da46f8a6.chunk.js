(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),s=a.n(o),i=(a(30),a(3)),c=a(4),u=a(6),l=a(5),h=a(7),d=a(15),p=a(10),m="https://www.rijksmuseum.nl/api/en/collection?key=5p5zT3Jl&format=json&s=relevance&imgonly=true&ps=12",f="https://kickstart-me.herokuapp.com/art",v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={keyword:"",century:"",art:[],favs:[],hasSearched:!1},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.id,e.target.value))},a.getArt=function(e){e.preventDefault();var t="";t=""===a.state.century?"&q=".concat(a.state.keyword):"&q=".concat(a.state.keyword,"&f.dating.period=").concat(a.state.century),fetch(m+t).then(function(e){return e.json()},function(e){return console.log(e)}).then(function(e){return a.setState({art:e.artObjects,keyword:"",century:"",hasSearched:!0})},function(e){return console.log(e)})},a.saveArt=function(e){fetch(f,{method:"POST",body:JSON.stringify({title:e.longTitle,imageurl:e.webImage.url,usernotes:"",userid:a.props.id}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()},function(e){return console.log(e)}).then(function(t){var n=Object(d.a)(a.state.favs);n.push(e.id),console.log(n),a.setState({apiResponse:t,favs:n})},function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-art"},r.a.createElement("h2",null,"Search by Keyword and Get Inspired"),r.a.createElement("form",{onSubmit:this.getArt},r.a.createElement("input",{id:"keyword",type:"text",placeholder:"keyword",value:this.state.keyword,onChange:this.handleChange}),r.a.createElement("select",{id:"century",onChange:this.handleChange},r.a.createElement("option",{value:"",defaultValue:""},"Choose Century (optional)"),r.a.createElement("option",{value:"1"},"1st Century and Prior"),r.a.createElement("option",{value:"2"},"2nd Century"),r.a.createElement("option",{value:"3"},"3rd Century"),r.a.createElement("option",{value:"4"},"4th Century"),r.a.createElement("option",{value:"5"},"5th Century"),r.a.createElement("option",{value:"6"},"6th Century"),r.a.createElement("option",{value:"7"},"7th Century"),r.a.createElement("option",{value:"8"},"8th Century"),r.a.createElement("option",{value:"9"},"9th Century"),r.a.createElement("option",{value:"10"},"10th Century"),r.a.createElement("option",{value:"11"},"11th Century"),r.a.createElement("option",{value:"12"},"12th Century"),r.a.createElement("option",{value:"13"},"13th Century"),r.a.createElement("option",{value:"14"},"14th Century"),r.a.createElement("option",{value:"15"},"15th Century"),r.a.createElement("option",{value:"16"},"16th Century"),r.a.createElement("option",{value:"17"},"17th Century"),r.a.createElement("option",{value:"18"},"18th Century"),r.a.createElement("option",{value:"19"},"19th Century"),r.a.createElement("option",{value:"20"},"20th Century"),r.a.createElement("option",{value:"21"},"21st Century")),r.a.createElement("input",{id:"submit",className:"button-primary",type:"submit",value:"Get Inspiration"})),r.a.createElement("div",{className:"show-art"},this.state.art.length<=0&&!0===this.state.hasSearched?r.a.createElement("h3",null,"Oh no! No results found for your search. Try again!"):this.state.art.map(function(t){return r.a.createElement("div",{className:"art-piece",key:t.id},r.a.createElement("h5",null,t.longTitle),r.a.createElement("img",{src:t.webImage.url,alt:t.title}),r.a.createElement("br",null),""!==e.props.id&&e.state.favs.indexOf(t.id)>=0?r.a.createElement("h4",null,"Saved to Favorites!"):""!==e.props.id?r.a.createElement("button",{id:"save-to-favorities",onClick:function(){e.saveArt(t)}},"Save To Favorites"):r.a.createElement("div",{className:"log-in-or-join"},r.a.createElement("h6",null,"Log In or Join to Save your Favorites")))})))}}]),t}(n.Component),g="https://kickstart-me.herokuapp.com/art",y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={usernotes:a.props.fav.usernotes,changesSaved:!1},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.id,e.target.value))},a.saveIdeas=function(e){e.preventDefault(),fetch(g+"/"+a.props.fav._id,{method:"PUT",body:JSON.stringify({usernotes:a.state.usernotes}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()},function(e){return console.log(e)}).then(function(e){return a.setState({apiResponse:e,changesSaved:!0})},function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ideas"},r.a.createElement("h5",null,"Your Ideas:"),r.a.createElement("form",{onSubmit:this.saveIdeas},r.a.createElement("input",{id:"usernotes",type:"text",value:this.state.usernotes,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Update Ideas"})),this.state.changesSaved?r.a.createElement("p",null,"Changes Saved"):null,r.a.createElement("button",{onClick:function(){e.props.deleteFavorite(e.props.fav)}},"Delete"))}}]),t}(n.Component),E="https://kickstart-me.herokuapp.com/art",b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={favorites:[],showUpdateId:"",usernotes:""},a.getFavorites=function(){console.log(E+"/"+a.props.id),fetch(E+"/"+a.props.id).then(function(e){return e.json()},function(e){console.log(e)}).then(function(e){a.setState({favorites:e})})},a.showNotes=function(e){a.setState({showUpdateId:e._id})},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.id,e.target.value))},a.saveIdeas=function(e){e.preventDefault(),fetch(E+"/"+a.state.showUpdateId,{method:"PUT",body:JSON.stringify({usernotes:a.state.usernotes}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()},function(e){console.log(e)}).then(function(e){var t=Object(d.a)(a.state.favorites);t[a.state.favorites.findIndex(function(t){return t._id===e._id})].usernotes=e.usernotes,a.setState({showUpdateId:"",usernotes:"",APIupdateResponse:e,favorites:t})})},a.deleteFavorite=function(e){fetch(E+"/"+e._id,{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){var t=Object(d.a)(a.state.favorites),n=a.state.favorites.findIndex(function(t){return t._id===e._id});t.splice(n,1),a.setState({favorites:t,APIresponse:e})})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getFavorites()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"favorites container"},r.a.createElement("h3",null,"Your Saved Favorites"),this.state.favorites.map(function(t){return r.a.createElement("div",{className:"fav",key:t._id},r.a.createElement("h5",null,t.title),r.a.createElement("img",{src:t.imageurl,alt:t.title}),t.usernotes?r.a.createElement(y,{fav:t,deleteFavorite:e.deleteFavorite}):e.state.showUpdateId===t._id?r.a.createElement("form",{onSubmit:e.saveIdeas},r.a.createElement("input",{className:"eight columns",type:"text",id:"usernotes",name:"usernotes",value:e.state.usernotes,onChange:e.handleChange}),r.a.createElement("input",{type:"submit",id:"save-ideas",className:"button-primary",value:"Save Ideas"})):r.a.createElement("div",{className:"actions"},r.a.createElement("button",{className:"button-primary",onClick:function(){e.showNotes(t)}},"Add Your Ideas"),r.a.createElement("button",{onClick:function(){e.deleteFavorite(t)}},"Delete")))}))}}]),t}(n.Component),C="https://kickstart-me.herokuapp.com/users",j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.id,e.target.value))},a.createAccount=function(e){e.preventDefault(),fetch(C,{method:"POST",body:JSON.stringify({username:a.state.username,password:a.state.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()},function(e){console.log(e)}).then(function(e){console.log(e),a.setState({apiResponse:e,username:"",password:""}),a.props.updateUserId(e),a.redirect()})},a.redirect=function(){a.props.history.push("/search")},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"account-create-form"},r.a.createElement("h2",null,"Join kickstART"),r.a.createElement("form",{className:"account-create",onSubmit:this.createAccount},r.a.createElement("input",{id:"username",type:"text",placeholder:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("input",{id:"password",type:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("input",{id:"submit-account",className:"button-primary",type:"submit",value:"Create Account"})))}}]),t}(n.Component),O="https://kickstart-me.herokuapp.com/users/login",w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.id,e.target.value))},a.logIn=function(e){e.preventDefault(),fetch(O,{method:"POST",body:JSON.stringify({username:a.state.username,password:a.state.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()},function(e){console.log(e)}).then(function(e){a.setState({apiResponse:e,username:"",password:""}),e.error?a.setState({error:e.error}):(a.setState({error:""}),a.props.updateUserId(e),a.redirect())})},a.redirect=function(){a.props.history.push("/search")},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"account-login-form"},r.a.createElement("h2",null,"Log In"),r.a.createElement("form",{className:"account-login",onSubmit:this.logIn},r.a.createElement("input",{id:"username",type:"text",placeholder:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("input",{id:"password",type:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("input",{id:"submit-login",className:"button-primary",type:"submit",value:"Log In"})),r.a.createElement("p",{className:"error"},this.state.error))}}]),t}(n.Component),k=a(12),S=a(11),I=(a(31),a(32),a(33),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",id:""},a.updateUserId=function(e){a.setState({username:e.username,id:e.id})},a.logOut=function(){a.setState({username:"",id:""})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"kickstART"),""!==this.state.id?r.a.createElement("h2",{className:"tracking-in-expand"},"Find Inspiration And Spark Creativity | ",this.state.username):r.a.createElement("h2",{className:"tracking-in-expand"},"Find Inspiration And Spark Creativity")),r.a.createElement(k.a,null,""!==this.state.id?r.a.createElement("nav",null,r.a.createElement(k.b,{to:"/search"},"Search For Art"),r.a.createElement(k.b,{to:"/favorites"},"Your Favorites"),r.a.createElement("a",{href:"/Artsy-Front-End/",onClick:this.logOut},"Log Out")):r.a.createElement("nav",null,r.a.createElement(k.b,{to:"/search"},"Search For Art"),r.a.createElement(k.b,{to:"/login"},"Log In"),r.a.createElement(k.b,{to:"/account"},"Join")),r.a.createElement(S.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(v,Object.assign({},t,{id:e.state.id}))}}),r.a.createElement(S.a,{path:"/search",render:function(t){return r.a.createElement(v,Object.assign({},t,{id:e.state.id}))}}),r.a.createElement(S.a,{path:"/favorites",render:function(t){return r.a.createElement(b,Object.assign({},t,{id:e.state.id}))}}),r.a.createElement(S.a,{path:"/account",render:function(t){return r.a.createElement(j,Object.assign({},t,{id:e.state.id,action:"",updateUserId:e.updateUserId}))}}),r.a.createElement(S.a,{path:"/login",render:function(t){return r.a.createElement(w,Object.assign({},t,{id:e.state.id,updateUserId:e.updateUserId}))}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.da46f8a6.chunk.js.map