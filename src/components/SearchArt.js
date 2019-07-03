import React, { Component } from "react"
const baseURL = "https://www.rijksmuseum.nl/api/en/collection?key=5p5zT3Jl&format=json&s=relevance&imgonly=true&ps=12&q="
const saveURL = "https://kickstart-me.herokuapp.com/art"

class SearchArt extends Component {
  state = {
    keyword: "",
    art: [],
    favs: []
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
      art: jsonData.artObjects,
      keyword: ""
    }), error => console.log(error))
  }
  saveArt = (art) => {
    fetch(saveURL, {
      method: "POST",
      body: JSON.stringify({
        title: art.longTitle,
        imageurl: art.webImage.url,
        usernotes: "",
        artist: art.principalOrFirstMaker,
        userid: this.props.id
      }),
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(data => data.json(), error => console.log(error))
    .then((jsonData) => {
      const copyFavs = [...this.state.favs]
      copyFavs.push(art.id)
      console.log(copyFavs)
      this.setState({
        apiResponse: jsonData,
        favs: copyFavs
      })
    }, (error) => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className="search-art">
        <h2>Search by Keyword and Get Inspired</h2>
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
        <div className="show-art">
          {
            this.state.art.map((art) => {
              return (
                <div className="art-piece" key={art.id}>
                  <h5>{art.longTitle}</h5>
                  <p>{art.principalOrFirstMaker}</p>
                  <img src={art.webImage.url} alt={art.title}/>
                  <br/>
                  {
                    this.props.id !== "" && this.state.favs.indexOf(art.id) >= 0 ?
                    <h4>Saved to Favorites!</h4>
                    :
                    this.props.id !== "" ?
                    <button
                      id="save-to-favorities"
                      onClick={() => {
                        this.saveArt(art)
                      }}
                      >Save To Favorites</button>
                      :
                      <div className="log-in-or-join">
                        <h6>Log In or Join to Save your Favorites</h6>
                        <a href="/login" className="button">Log In</a>
                        <a href="/account" className="button">Join</a>
                      </div>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default SearchArt
