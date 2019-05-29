import React from 'react';
import './App.css';
import Search from './Search'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import AddMovie from './AddMovie'
import dataMovies from './dataMovies'
import MovieCard from './MovieCard'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: dataMovies }
    library.add(fab)
  }
  //get the values filled in the inputs for filter
  getstatefromsearch = (title, year, lowRate, highRate) => {
     this.setState({movies: this.filterMovies(title, year, lowRate, highRate)})
  }
  //get the new movie to add
  getnewmovie = (title, year, ranking, description, image) => {
    dataMovies.push({ title, year, image, ranking, description })
    this.setState({ movies: dataMovies })
  }
  //filter the list of movies by title, year, lowRate, highRate
  filterMovies = (title, year, lowRate, highRate) => {
    return dataMovies
      .filter((el) => el.title.toLowerCase().includes(title.toLowerCase()))
      .filter((el) => { return !Boolean(year)? true: parseInt(year) === parseInt(el.year) })
      .filter((el) => (el.ranking >= lowRate))
      .filter((el) => (el.ranking <= highRate))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Search getstatefromsearch={this.getstatefromsearch} />
          <div className="parent-movies">
            {this.state.movies.map((el, index) => <MovieCard item={el} key={index} />)}
            <AddMovie getnewmovie={this.getnewmovie} />
          </div>
        </div>
      </div>
    );
  }
}