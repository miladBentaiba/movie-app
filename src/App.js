import React from 'react';
import './App.css';
import Inputs from './Inputs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import MovieCard from './MovieCard';

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <Inputs/>
      <div className="container">
        <div className="row">
          <MovieCard className="col-3"/>
          <MovieCard className="col-3"/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
