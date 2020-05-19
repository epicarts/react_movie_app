import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matirx",
    poster: "https://lh3.googleusercontent.com/proxy/POoBiT0fX0-LluMnV6ID29sqxyOW92rYinkSFr3zMxXA83IO3vfsNXZDH-weseKRO0z03XIPumk_Ub_Ya3-OOe3psU-h-8S0XlEYre-sBxBhzz5h656d"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://i.pinimg.com/originals/f2/4f/c5/f24fc59a6f23c84f3f8d5f242d92f243.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
  }
]

class App extends Component {
  // Render: WillMount, render DidMount

  state = {
    greeting: 'Hello!!!'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!!'
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          // console.log(index)
          return <Movie title={movie.title} poster={movie.poster} key={index}/> 
        })}
      </div>
    );
  }
}

export default App;
