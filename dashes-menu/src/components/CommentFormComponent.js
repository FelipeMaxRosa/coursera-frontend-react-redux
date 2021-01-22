import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody,
  Button, Form, FormGroup, Label, Input } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }  

  handleSubmit(event) {
    this.toggleModal();
    alert("Rating: " + this.rating.value + "\nYour Name: "
      + this.yourname.value
      + "\nComment: " + this.comment.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Button className="button-submit-comment" outline onClick={this.toggleModal}>
          <span className="fa fa-pencil"></span>
          <span>Submit Comment</span>
        </Button>      

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Input type="select" id="rating" name="rating"
                  innerRef={(input) => this.rating = input}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Input>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="yourname">Your Name</Label>
                <Input type="text" id="yourname" name="yourname"
                  innerRef={(input) => this.yourname = input} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="comment">Comment</Label>
                <Input type="textarea" id="comment" name="comment" 
                  innerRef={(input) => this.comment = input}/>
              </FormGroup>


              <Button type="submit" value="submit" className="primary">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default CommentForm;
