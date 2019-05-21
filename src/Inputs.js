import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, FormGroup, Input, Label, Form} from 'reactstrap';

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
    let p = (this.state.up)? <p >click to open filter input</p> : <p></p>
    return (  
      <div className="container all-form">
        <div onClick={this.toggle} className='toggler-parent'>
         {p}
          <i  className={'float-right ' +(this.state.up?'fas fa-sort-down':'fas fa-sort-up')}></i>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Form>
            <FormGroup>
              <Label for="exampleCheckbox float-left">Title</Label>
              <Input type="text" name="title" id="title" placeholder="Search by title" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleCheckbox float-left">Year</Label>
              <Input type="number" name="year" id="year" placeholder="Search by year" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleCheckbox float-left">Ranking</Label>
              <Input type="number" name="ratingHigh" id="exampleDatetime" placeholder="Search by rating higher than" />
              <Input type="number" name="ratingLow" id="exampleDatetime" placeholder="Search by rating lower than" />
            </FormGroup>
          </Form>
        </Collapse>
      </div>
    );
  }
}