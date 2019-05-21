import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, FormGroup, Input, Label, Form} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';



export default class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, up: true, ratingLow: 1, ratingHigh:10, title:"", year:2000 };
  }
  onStarClick(nextValue, prevValue, name) {
    console.log(name)
    if(name==="rate1")    this.setState({ratingLow: nextValue});
    else this.setState({ratingHigh: nextValue});
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse, up: !state.up }));
  }
  render() { 
    const { ratingLow, ratingHigh } = this.state;
    let search = (this.state.up? <Input type="text" className="col-11" placeholder="Search for movies" />:<p></p>)
    return (  
      <div className="container all-form">
        <div onClick={this.toggle} className='toggler-parent row'>
          {search}
          <i  className={'float-right col-1 ' + (this.state.up?'fas fa-sort-down':'fas fa-sort-up')}></i>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Form>
            <FormGroup>
              <Label for="exampleCheckbox float-left" >Title</Label>
              <Input type="text" name="title" id="title" placeholder="Search by title" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleCheckbox float-left">Year</Label>
              <Input type="number" name="year" defaultValue={this.state.year} id="year" placeholder="Search by year" />
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-lg-6 col-md-6 col-sm-12" for="exampleCheckbox float-left">Minimum Rating: {ratingLow}</Label>
              <StarRatingComponent className="col-lg-6 col-md-6 col-sm-12"
                name="rate1" starCount={10} value={ratingLow} onStarClick={this.onStarClick.bind(this)} />
              <Label className="col-lg-6 col-md-6 col-sm-12" for="exampleCheckbox float-left">Maximum Rating: {ratingHigh}</Label>
              <StarRatingComponent className="col-lg-6 col-md-6 col-sm-12" 
                name="rate2" starCount={10} value={ratingHigh} onStarClick={this.onStarClick.bind(this)} />
            </FormGroup>
          </Form>
        </Collapse>
      </div>
    );
  }
}