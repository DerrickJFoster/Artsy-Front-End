import React, {Component} from 'react'
const baseURL = "https://www.rijksmuseum.nl/api/en/collection?key=5p5zT3Jl&format=json&s=relevance&imgonly=true&ps=20&q="
const localURL = 'http://localhost:3003'

class Update extends Component{
  state={
    keyword: '',
    usernotes: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.usernotes);
    fetch(localURL +'/art/5d17bbe3cf222ca50bb8b21a', {
      method: 'PUT',
      body: JSON.stringify({
        usernotes: this.state.usernotes
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(responseJSON => console.log(responseJSON))
    .catch(err => console.log(err))
    this.setState({
      usernotes: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="keyword"
            onChange={this.handleChange}
            />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Update
