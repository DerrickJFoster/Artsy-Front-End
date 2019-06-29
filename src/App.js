import React, { Component } from "react";
import SearchArt from "./components/SearchArt.js"
import "./css/normalize.css"
import "./css/skeleton.css"
import "./css/App.css";
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
          <p>Find Inspiration And Spark Creativity</p>
        </header>
        <SearchArt />
        <Update />
      </div>
    );
  }
}

export default App;
