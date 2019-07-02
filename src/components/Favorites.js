import React, { Component } from "react"
import UpdateIdeas from "./UpdateIdeas.js"
const baseURL = "https://kickstart-me.herokuapp.com/art"

class Favorites extends Component {
  state = {
    favorites: [],
    showUpdateId: "",
    usernotes: ""
  }
  getFavorites = () => {
    fetch(baseURL
      //+"/"+this.props.id
    )
    .then((data) => {
      return data.json()
    }, (error) => {
      console.log(error)
    })
    .then((jsonData) => {
      this.setState({
        favorites: jsonData
      })
    })
  }
  showNotes = (fav) => {
    this.setState({
      showUpdateId: fav._id
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  saveIdeas = (event) => {
    event.preventDefault()
    fetch(baseURL+"/"+this.state.showUpdateId, {
      method: "PUT",
      body: JSON.stringify({usernotes: this.state.usernotes}),
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
      const copyFavorites = [...this.state.favorites]
      const index = this.state.favorites.findIndex(fav => fav._id === jsonData._id)
      copyFavorites[index].usernotes = jsonData.usernotes
      this.setState({
        showUpdateId: "",
        usernotes: "",
        APIupdateResponse: jsonData,
        favorites: copyFavorites
      })
    })
  }
  deleteFavorite = (fav) => {
    fetch(baseURL+"/"+fav._id, {
      method: "DELETE"
    }).then((response) => {
      return response.json()
    }).then((json) => {
      const copyFavorites = [...this.state.favorites]
      const index = this.state.favorites.findIndex(fav => fav._id === json._id)
      copyFavorites.splice(index, 1)
      this.setState({
        favorites: copyFavorites,
        APIresponse: json
      })
    })
  }
  //Calling getFavorites once the component is ready
  componentDidMount() {
    this.getFavorites()
  }
  render() {
    return (
      <div className="favorites container">
        <h2>Your Saved Favorites</h2>
        {
          this.state.favorites.map((fav) => {
            return (
              <div className="fav" key={fav._id}>
                <h5>{fav.title}</h5>
                {/* <p>{fav.artist}</p> */}
                <img src={fav.imageurl} alt={fav.title}/>
                {
                  fav.usernotes ?
                  <UpdateIdeas
                    fav={fav}
                    deleteFavorite={this.deleteFavorite}
                  />
                  :
                    this.state.showUpdateId === fav._id ?
                    <form onSubmit={this.saveIdeas}>
                      <input
                        className="eight columns"
                        type="text"
                        id="usernotes"
                        name="usernotes"
                        value={this.state.usernotes}
                        onChange={this.handleChange}
                      />
                      <input type="submit"
                        className="button-primary"
                        value="Save Ideas"
                      />
                    </form>
                    :
                    <div className="actions">
                      <button className="button-primary"
                        onClick={() => {
                          this.showNotes(fav)
                        }}
                        >Add Your Ideas</button>
                        <button
                          onClick={() => {
                            this.deleteFavorite(fav)
                          }}
                          >Delete</button>
                    </div>
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Favorites
