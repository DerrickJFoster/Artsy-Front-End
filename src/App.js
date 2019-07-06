import React, { Component } from "react";
import SearchArt from "./components/SearchArt.js"
import Favorites from "./components/Favorites.js"
import Account from "./components/Account.js"
import LogIn from "./components/LogIn.js"
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "./css/normalize.css"
import "./css/skeleton.css"
import "./css/App.css";


class App extends Component {
  state = {
    username: "",
    id: ""
  }
  updateUserId = (user) => {
    this.setState({
      username: user.username,
      id: user.id
    })
  }
  logOut = () => {
    this.setState({
      username: "",
      id: ""
    })
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>kickstART</h1>
          {
            this.state.id !== "" ?
            <h2 className='tracking-in-expand'>Find Inspiration And Spark Creativity | {this.state.username}</h2>
            :
            <h2 className='tracking-in-expand'>Find Inspiration And Spark Creativity</h2>
          }
        </header>
        <Router>
            {
              this.state.id !== "" ?
                <nav>
                  <Link to="/search">Search For Art</Link>
                  <Link to="/favorites">Your Favorites</Link>
                  <a href="/Artsy-Front-End/"
                    onClick={this.logOut}
                    >Log Out</a>
                </nav>
              :
              <nav>
                <Link to="/search">Search For Art</Link>
                <Link to="/login">Log In</Link>
                <Link to="/account">Join</Link>
              </nav>
            }
            <Route path="/" exact
            render={(props) => <SearchArt {...props} id={this.state.id}/>}
            />
            <Route path="/search"
            render={(props) => <SearchArt {...props} id={this.state.id}/>}
            />
            <Route path="/favorites"
            render={(props) => <Favorites {...props} id={this.state.id}/>}
            />
            <Route path="/account"
            render={(props) => <Account {...props} id={this.state.id} action="" updateUserId={this.updateUserId}/>}
            />
            <Route path="/login"
            render={(props) => <LogIn {...props} id={this.state.id} updateUserId={this.updateUserId}/>}
            />
        </Router>
      </div>
    );
  }
}

export default App;
