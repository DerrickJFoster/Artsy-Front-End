import React, { Component } from "react"
const baseURL = "https://www.rijksmuseum.nl/api/en/collection?key=5p5zT3Jl&format=json&s=relevance&imgonly=true&ps=12"
const saveURL = "https://kickstart-me.herokuapp.com/art"

class SearchArt extends Component {
  state = {
    keyword: "",
    century: "",
    art: [],
    favs: [],
    hasSearched: false
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  getArt = (event) => {
    event.preventDefault()
    let query = ""
    if (this.state.century === "") {
      query=`&q=${this.state.keyword}`
    } else {
      query=`&q=${this.state.keyword}&f.dating.period=${this.state.century}`
    }
    fetch(baseURL+query)
    .then(data => data.json(), error => console.log(error))
    .then(jsonData => this.setState({
      art: jsonData.artObjects,
      keyword: "",
      century: "",
      hasSearched: true
    }), error => console.log(error))
  }
  saveArt = (art) => {
    fetch(saveURL, {
      method: "POST",
      body: JSON.stringify({
        title: art.longTitle,
        imageurl: art.webImage.url,
        usernotes: "",
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
          <select id="century" onChange={this.handleChange}>
            <option value="" defaultValue="">Choose Century (optional)</option>
            <option value="1">1st Century and Prior</option>
            <option value="2">2nd Century</option>
            <option value="3">3rd Century</option>
            <option value="4">4th Century</option>
            <option value="5">5th Century</option>
            <option value="6">6th Century</option>
            <option value="7">7th Century</option>
            <option value="8">8th Century</option>
            <option value="9">9th Century</option>
            <option value="10">10th Century</option>
            <option value="11">11th Century</option>
            <option value="12">12th Century</option>
            <option value="13">13th Century</option>
            <option value="14">14th Century</option>
            <option value="15">15th Century</option>
            <option value="16">16th Century</option>
            <option value="17">17th Century</option>
            <option value="18">18th Century</option>
            <option value="19">19th Century</option>
            <option value="20">20th Century</option>
            <option value="21">21st Century</option>
          </select>
          <input
            id="submit"
            className="button-primary"
            type="submit"
            value="Get Inspiration"
          />
        </form>
        <div className="show-art">
          {
            this.state.art.length <= 0 && this.state.hasSearched === true ?
            <h3>Oh no! No results found for your search. Try again!</h3>
            :
              this.state.art.map((art) => {
                return (
                  <div className="art-piece" key={art.id}>
                    <h5>{art.longTitle}</h5>
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
                          {/* <a href="/login" className="button">Log In</a>
                          <a href="/account" className="button">Join</a> */}
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
