import React, { Component } from "react"
const baseURL = "https://kickstart-me.herokuapp.com/art"

class UpdateIdeas extends Component {
  state = {
    usernotes: this.props.fav.usernotes
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  saveIdeas = (event) => {
    event.preventDefault()
    fetch(baseURL+"/"+this.props.fav._id, {
      method: "PUT",
      body: JSON.stringify({
        usernotes: this.state.usernotes
      }),
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(data => data.json(), error => console.log(error))
    .then(jsonData => this.setState({
      apiResponse: jsonData
    }), error => console.log(error))
  }
  render() {
    return (
      <div className="ideas">
        <h5>Your Ideas:</h5>
        <form onSubmit={this.saveIdeas}>
          <input
            id="usernotes"
            className="eight column"
            type="text"
            value={this.state.usernotes}
            onChange={this.handleChange}
          />
          <input type="submit"
            value="Save"
          />
        </form>
        <button
          onClick={() => {
            this.props.deleteFavorite(this.props.fav)
          }}
          >Delete</button>
      </div>
    )
  }
}

export default UpdateIdeas
