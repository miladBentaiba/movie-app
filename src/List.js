import React, { Component } from 'react'
import movies from './dataMovies'
import MovieCard from './MovieCard'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let x =  movies.map((el, index)=><MovieCard  item={el} key={index} />)
    return x
  }
}