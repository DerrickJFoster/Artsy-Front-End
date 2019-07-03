import React, { Component } from "react";
import SearchArt from "./components/SearchArt.js"
import Favorites from "./components/Favorites.js"
import Account from "./components/Account.js"
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "./css/normalize.css"
import "./css/skeleton.css"
import "./css/App.css";
//import Update from './components/Update.js'
>>>>>>> e1411ccc1ae4334abb81c9c35bf751e30f6d0e19
=======
import "./css/App.css"

>>>>>>> acce4bb44c710941f7dbc9f33e1d0d73da0dc8c0

class App extends Component {
  state = {
    id: "testing234098234"
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>kickstART</h1>
          <h2>Find Inspiration And Spark Creativity</h2>
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
