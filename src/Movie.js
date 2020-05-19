import React from 'react'
import { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        // console.log(this.props)
        return(
            <div>
                <MoviePostet poster={this.props.poster} />
                {/* <h1>hello movie</h1> */}
                <h1>{this.props.title}</h1>

            </div>
        )
    }
}

class MoviePostet extends Component{
    render(){
        // console.log(this.props)
        return(
            <img src={this.props.poster}></img>
        )
    }
}

export default Movie;