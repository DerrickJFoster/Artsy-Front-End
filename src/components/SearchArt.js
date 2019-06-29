import React, { Component } from "react"
const baseURL = "https://www.rijksmuseum.nl/api/en/collection?key=5p5zT3Jl&format=json&s=relevance&imgonly=true&ps=20&q="

class SearchArt extends Component {
  state = {
    keyword: "",
    art: {}
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  getArt = (event) => {
    event.preventDefault()
    fetch(baseURL+this.state.keyword)
    .then(data => data.json(), error => console.log(error))
    .then(jsonData => this.setState({
      art: jsonData,
      keyword: ""
    }), error => console.log(error))
  }
  render() {
    return (
      <div className="search-art">
        <form onSubmit={this.getArt}>
          <input
            id="keyword"
            type="text"
            placeholder="keyword"
            value={this.state.keyword}
            onChange={this.handleChange}
          />
          <input
            id="submit"
            className="button-primary"
            type="submit"
            value="Get Inspiration"
          />
        </form>
      </div>
    )
  }
}

export default SearchArt
