import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';


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
      </div>

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
