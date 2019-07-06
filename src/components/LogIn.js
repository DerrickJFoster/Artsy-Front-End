import React, { Component } from "react"
const baseURL = "https://kickstart-me.herokuapp.com/users/login"

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  logIn = (event) => {
    event.preventDefault()
    fetch(baseURL, {
      method: "POST",
      body: JSON.stringify({username: this.state.username, password: this.state.password}),
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then((data) => {
      return data.json()
    }, (error) => {
      console.log(error)
    })
    .then((jsonData) => {
      this.setState({
        apiResponse: jsonData,
        username: "",
        password: ""
      })
      if (jsonData.error) {
        this.setState({
          error: jsonData.error
        })
      } else {
        this.setState({
          error: ""
        })
        this.props.updateUserId(jsonData)
        this.redirect()
      }
    })
  }
  redirect = () => {
    this.props.history.push("/search")
  }
  render() {
    return (
          <div className="account-login-form">
            <h2>Log In</h2>
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
            <p className="error">{this.state.error}</p>
          </div>
    )
  }
}

export default LogIn
