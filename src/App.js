import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const moviesTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const moviesImages = [
  "https://lh3.googleusercontent.com/proxy/POoBiT0fX0-LluMnV6ID29sqxyOW92rYinkSFr3zMxXA83IO3vfsNXZDH-weseKRO0z03XIPumk_Ub_Ya3-OOe3psU-h-8S0XlEYre-sBxBhzz5h656d",
  "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
  "https://i.pinimg.com/originals/f2/4f/c5/f24fc59a6f23c84f3f8d5f242d92f243.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
]

function App() {
  return (
    <div className="App">
      <Movie title={moviesTitles[0]} poster={moviesImages[0]}/>
      <Movie title={moviesTitles[1]} poster={moviesImages[1]}/>
      <Movie title={moviesTitles[2]} poster={moviesImages[2]}/>
      <Movie title={moviesTitles[3]} poster={moviesImages[3]}/>
    </div>
  );
}

export default App;
