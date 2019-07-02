import React, { Component } from "react"
const baseURL = "https://kickstart-me.herokuapp.com/"

class Account extends Component {
  state = {
    username: "",
    password: "",
    action: this.props.action
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  setAction = (event) => {
    this.setState({
      action: event.target.id
    })
  }
  createAccount = (event) => {
    event.preventDefault()
    console.log("ACCOUNT CREATE")
  }
  logIn = (event) => {
    event.preventDefault()
    console.log("LOGIN")
  }
  render() {
    return (
      <React.Fragment>
        <h2>Log In or Create Your Account to Save Favorites</h2>
        {
          this.state.action === "" ?
          <div className="orientation-buttons">
            <button id="login"
              onClick={this.setAction}
              >Log In</button>
            <button className="button-primary"
              id="create"
              onClick={this.setAction}
              >Create Account</button>
            </div>
              : null
        }
        {
          this.state.action === "create" ?
          <div className="account-create-form">
            <form className="account-create"
              onSubmit={this.createAccount}
              >
              <input
                id="username"
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                id="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input
                id="submit-account"
                className="button-primary"
                type="submit"
                value="Create Account"
              />
            </form>
          </div>
          : null
        }
        {
          this.state.action === "login" ?
          <div className="account-login-form">
            <form className="account-login"
              onSubmit={this.logIn}
              >
              <input
                id="username"
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                id="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input
                id="submit-login"
                className="button-primary"
                type="submit"
                value="Log In"
              />
            </form>
          </div>
          : null
        }
    </React.Fragment>
    )
  }
}

export default Account
