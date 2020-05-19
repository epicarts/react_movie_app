import React from 'react'
import { Component } from 'react';
import propTypes from 'prop-types'
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string
    }

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

    static propTypes = {
        poster: propTypes.string.isRequired
    }

    render(){
        // console.log(this.props)
        return(
            <img src={this.props.poster}></img>
        )
    }
}

export default Movie;