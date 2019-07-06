import React, { Component } from "react"
const baseURL = "https://kickstart-me.herokuapp.com/users"

class Account extends Component {
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
  createAccount = (event) => {
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
      console.log(jsonData)
      this.setState({
        apiResponse: jsonData,
        username: "",
        password: ""
      })
      this.props.updateUserId(jsonData)
      this.redirect()
    })
  }
  redirect = () => {
    this.props.history.push("/search")
  }
  render() {
    return (
          <div className="account-create-form">
            <h2>Join kickstART</h2>
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
    )
  }
}

export default Account
