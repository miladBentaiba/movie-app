import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

export default class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, title: '', year: 2000, description: '', ranking: 0, rating: 1 };
  }

  onStarClick(nextValue, prevValue, name) { this.setState({ rating: nextValue }); }
  toggle = () => { this.setState(prevState => ({ modal: !prevState.modal })); }

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
                <Input type="text" name="title" id="title" value={this.state.title} placeholder="movie title" />
              </FormGroup>
              <FormGroup>
                <Label for="year">Year</Label>
                <Input type="number" name="year" id="year" value={this.state.year} placeholder="movie year" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="description" id="description" value={this.state.description} />
              </FormGroup>
              <FormGroup>
                <Label for="image">File</Label>
                <Input type="file" name="image" id="image" value={this.state.image} />
                <FormText color="muted">
                  Please insert the movie's image
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="ranking">Rating</Label><br />
                <StarRatingComponent name="rate1" starCount={10} value={rating} onStarClick={this.onStarClick.bind(this)} />
              </FormGroup>
              <ModalFooter>
                <Button type="submit" color="primary" onClick={this.toggle}>Save</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}