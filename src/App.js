import React from 'react';
import './App.css';
import Inputs from './Inputs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import MovieCard from './MovieCard'
import movies from './dataMovies'

library.add(fab)

function App() {
  return (
    <div className="App">
      <div className="container">
        <Inputs/>
        <div className="row parent-movies">
          {movies.map((el, index)=><MovieCard className="col-3" item={el} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
