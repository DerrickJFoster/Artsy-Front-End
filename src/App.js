import React, { Component } from "react";
import SearchArt from "./components/SearchArt.js"
import Favorites from "./components/Favorites.js"
//import PostTest from "./components/PostTest.js"
import "./css/normalize.css"
import "./css/skeleton.css"
import "./css/App.css"
import Update from './components/Update.js'

class App extends Component {
  state = {
    id: ""
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>kickstART</h1>
          <h2>Find Inspiration And Spark Creativity</h2>
        </header>
        <SearchArt />
        <Favorites />

      </div>
    );
  }
}

export default App;
