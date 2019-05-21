import React from 'react';
import './App.css';
import Inputs from './Inputs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import List from './List'
import AddVideo from './AddVideo'

library.add(fab)

function App() {
  return (
    <div className="App">
      <div className="container">
        <Inputs/>
        <div className="parent-movies">
          <List/>
          <AddVideo/>
        </div>
      </div>
    </div>
  );
}

export default App;