import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
  Modal, ModalHeader, ModalBody,
  Button, Label, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
// import CommentForm from './CommentFormComponent';


function RenderDish({dish}) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        {/* <CardImg width="100%" src={dish.image} alt={dish.name} /> */}
        <CardImg top src={dish.image} alt={dish.name} />

        <CardBody>
          <CardTitle style={{fontWeight: "bold"}}>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>        
    </div>
  )
}

function toggleModal() {

}

function RenderComments({comments}) {
  const allComments = comments.map((comment) => {
    return (
      <li key={comment.id} >
        <p>{comment.comment}</p>
        <p>-- {comment.author},
        {/* {new Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'

        }).format(new Date(comment.date))} */}
          {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
        </p>
      </li>
    )
  });

  if (comments == null) {
    return (
      <div></div>
    )
  } else { 
    return (
      <div className="col-12 col-md-5 m-1">
          <h4> Comments </h4>
          <ul className='list-unstyled'>
              {allComments}
        </ul>
        <CommentForm />
      </div>

    )
  }
}

// Verifica se o valor é maior que zero
const required = (val) => val && val.length;  
// Verifica o valor maximo
const maxLength = (len) => (val) => !(val) || (val.length <= len);
// Verifica o valor minimo
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isModalOpen: false
      };  

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values){
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  };
  
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
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Col className="form-group">
                <Row>
                  <Label htmlFor="rating">Rating</Label>
                </Row>
                <Row>
                  <Control.select model=".rating" name="rating" 
                      className="form-control">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </Control.select>
                </Row>
              </Col>
              
              <Col className="form-group">
                <Row>
                  <Label htmlFor="yourname">Your Name</Label>
                </Row>
                <Row>
                  <Control.text model=".yourname" id="yourname" name="yourname" 
                      placeholder="Your Name"
                      className="form-control"
                      validators = {{
                          required, minLength: minLength(3), maxLength: maxLength(15)
                      }}
                  />
                  <Errors  
                      className="text-danger"
                      model =".yourname"
                      show="touched"
                      messages={{
                          required: 'Required\n',
                          minLength: 'Must be greater than 2 characters\n',
                          maxLength: 'Must be 15 characters or less'
                      }}
                    />
                </Row>
              </Col>

              <Col className="form-group">
                <Row>
                  <Label htmlFor="comment">Comment</Label>
                </Row>
                <Row>
                    <Control.textarea model=".comment" id="comment" name="comment" 
                        rows="6"
                        className="form-control"/>
                </Row>
              </Col>
              
              <Col className="form-group">
                <Row>
                    <Button type="submit" color="primary">Submit</Button>
                </Row>
              </Col>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    )
  }
    
}


const DishDetail = ({dish, comments}) => {
  if (dish === null) {
    return (
      <div></div>
    )
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        
        <div className="row">
          <RenderDish dish={dish}/>
          <RenderComments comments={comments}/>
        </div>
      </div>
    )
  }
}
  
export default DishDetail;
