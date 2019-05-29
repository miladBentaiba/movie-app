import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

export default class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, title: '', year: 2000, description: '', rating: 1, image: '', invalidFile: false };
  }
  //send the added movie to the parent
  sendMovies = () => {
    if (this.state.modal === false)
      this.props.getnewmovie(
        this.state.title, this.state.year, this.state.rating, this.state.description, this.state.image
      )
  }
  //update the state to match the value of the introduced rating
  onStarClick(nextValue, prevValue, name) { this.setState({ rating: nextValue }); }
  toggle = () => {
    this.setState(prevState => ({ modal: !prevState.modal }), () => this.sendMovies()
    )
  }
  //update the state to match the values of the filter inputs
  updateForm = (e) => {
    e.target.name === 'title' ? this.setState({ title: e.target.value }) :
    e.target.name === 'year' ? this.setState({ year: e.target.value }) :
    e.target.name === 'file' ? this.setState({ image: URL.createObjectURL(e.target.files[0]) }) :
    e.target.name === 'description' ? this.setState({ description: e.target.value }) :
      this.setState({ description: e.target.value })
  }
  render() {
    const { rating, image } = this.state;
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
                  onChange={this.updateForm} value={this.state.description} />
              </FormGroup>
              <FormGroup>
                <Input type="file" id="fileBrowser" name="file" label={image || 'choose an image file'}
                  onChange={this.updateForm} />
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