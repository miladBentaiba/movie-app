import React from 'react';
import './App.css';
import Inputs from './Inputs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import List from './List'
import AddVideo from './AddVideo'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title:'', year:2000, lowRate:0, highRate:10 }
    library.add(fab)
  }

  getstatefromsearch=(title, year, lowRate, highRate)=>{
    this.setState({ title:title, year:year, lowRate:lowRate, highRate:highRate })
  }
  render(){
    return (
    <div className="App">
      <div className="container">
        <Inputs getstatefromsearch={this.getstatefromsearch}/>
        <div className="parent-movies">
          <List/>
          <AddVideo/>
        </div>
      </div>
    </div>
  );
  }
}