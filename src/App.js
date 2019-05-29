import React from 'react';
import './App.css';
import Inputs from './Inputs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import AddVideo from './AddVideo'
import dataMovies from './dataMovies'
import MovieCard from './MovieCard'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: dataMovies, filtredMovies: dataMovies }
    library.add(fab)
  }
  getstatefromsearch = (title, year, lowRate, highRate) => {
    this.setState({ filtredMovies: this.filter(title, year, lowRate, highRate) })
  }
  getnewmovie = (title, year, ranking, description, image) => {
    let movies = this.state.movies
    movies.push({ title, year, image, ranking, description })
    this.setState({ movies})
  }
  filter = (title, year, lowRate, highRate) => this.state.movies
    .filter((el) => el.title.toLowerCase().includes(title.toLowerCase()) )
    .filter((el) => { if (year == null) return {}; else return parseInt(el.year) === parseInt(year) })
    .filter((el) => (el.ranking >= lowRate))
    .filter((el) => (el.ranking <= highRate))

  render() {
    return (
      <div className="App">
        <div className="container">
          <Inputs getstatefromsearch={this.getstatefromsearch} />
          <div className="parent-movies">
            {this.state.filtredMovies.map((el, index) => <MovieCard item={el} key={index} />)}
            <AddVideo getnewmovie={this.getnewmovie} />
          </div>
        </div>
      </div>
    );
  }
}