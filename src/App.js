import React, { Component } from "react";
import SearchArt from "./components/SearchArt.js"
import Favorites from "./components/Favorites.js"
import Account from "./components/Account.js"
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "./css/normalize.css"
import "./css/skeleton.css"
import "./css/App.css";
//import Update from './components/Update.js'

class App extends Component {
  state = {
    id: "testing234098234"
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>kickstART</h1>
          <p>Find Inspiration And Spark Creativity</p>
        </header>
        <Router>
          <nav>
            <Link to="/search">Search For Art</Link>{" | "}
            <Link to="/favorites">Your Favorites</Link>{" |  "}
            <Link to="/account">Log In or Create Your Account</Link>
          </nav>
            <Route path="/search"
            render={(props) => <SearchArt {...props} id={this.state.id}/>}
            />
            <Route path="/favorites"
            render={(props) => <Favorites {...props} id={this.state.id}/>}
            />
            <Route path="/account"
            render={(props) => <Account {...props} id={this.state.id} action=""/>}
            />
        </Router>
      </div>
    );
  }
}

export default App;
