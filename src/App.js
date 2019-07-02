import React, { Component } from "react";
import SearchArt from "./components/SearchArt.js"
import Favorites from "./components/Favorites.js"
import Account from "./components/Account.js"
//import PostTest from "./components/PostTest.js"
import "./css/normalize.css"
import "./css/skeleton.css"
import "./css/App.css";

class App extends Component {
  state = {
    id: ""
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>kickstART</h1>
          <p>Find Inspiration And Spark Creativity</p>
        </header>
        <Account />
        <SearchArt />
        <Favorites />
      </div>
    );
  }
}

export default App;
