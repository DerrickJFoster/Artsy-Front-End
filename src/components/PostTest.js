import React, { Component } from "react"
const baseURL = "https://kickstart-me.herokuapp.com/art"

class PostArt extends Component {
  state = {
    title: ""
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  postArt = (event) => {
    event.preventDefault()
    console.log(this.state.title, baseURL);
    fetch(baseURL, {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title
      }),
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(data => data.json(), error => console.log(error))
    .then(jsonData => this.setState({
      title: "",
      apiResponse: jsonData
    }), error => console.log(error))
  }
  render() {
    return (
      <div className="post-test">
        <form onSubmit={this.postArt}>
          <input
            id="title"
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            id="submit"
            className="button-primary"
            type="submit"
            value="Post To Andrew"
          />
        </form>
      </div>
    )
  }
}

export default PostArt
