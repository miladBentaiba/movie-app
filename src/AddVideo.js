import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

export default class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, title: '', year: 2000, description: '', rating: 1, image:'' };
  }

  onStarClick(nextValue, prevValue, name) { this.setState({ rating: nextValue }); }
  toggle = () => { 
    this.setState(prevState => ({ modal: !prevState.modal }), 
      ()=>this.props.getnewmovie(
        this.state.title, this.state.year, this.state.rating, this.state.description, this.state.image
    )); 
  }

  updateForm=(e)=>{
    e.target.name==='title'? this.setState({title:e.target.value}): 
    e.target.name==='year'? this.setState({year:e.target.value}):
      this.setState({description:e.target.value})
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <div className="plus" style={{ height: '484px' }} onClick={this.toggle}>
          <i className="fas fa-plus"></i>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" value={this.state.title} 
                  onChange={this.updateForm} placeholder="movie title" />
              </FormGroup>
              <FormGroup>
                <Label for="year">Year</Label>
                <Input type="number" name="year" id="year" value={this.state.year} 
                  onChange={this.updateForm} placeholder="movie year" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="description" id="description" 
                  onChange={this.updateForm}  value={this.state.description} />
              </FormGroup>
              {/* <FormGroup>
                <Label for="image">File</Label>
                <Input type="file" name="image" id="image" value={this.state.image} />
                <FormText color="muted">
                  Please insert the movie's image
                </FormText>
              </FormGroup> */}
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="ranking">Rating</Label><br />
                <StarRatingComponent name="rate1" starCount={10} value={rating} onStarClick={this.onStarClick.bind(this)} />
              </FormGroup>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}