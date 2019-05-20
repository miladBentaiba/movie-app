import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Input, } from 'reactstrap';

export default class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, up: true };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse, up: !state.up }));
  }

  render() { 
    return (  
      <div className="container">
        <i onClick={this.toggle} className={this.state.up?'fas fa-sort-down':'fas fa-sort-up'}></i>
        <Collapse isOpen={this.state.collapse}>
          <Input type="email" name="title" id="title" placeholder="Search by title" />
          <Input type="number" name="year" id="year" placeholder="Search by year" />
          <Input type="number" name="ratingHigh" id="exampleDatetime" placeholder="Search by rating higher than" />
          <Input type="number" name="ratingLow" id="exampleDatetime" placeholder="Search by rating lower than" />
        </Collapse>
      </div>
    );
  }
}