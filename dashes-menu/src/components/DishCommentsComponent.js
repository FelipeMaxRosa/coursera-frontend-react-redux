import React, { Component } from 'react';
import { Media } from "reactstrap";


export default class DishComments extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    const comments = this.props.comments.map(({id, comment, author, date}) => {
      return (
        <div key={id} className="mt-3">
          <Media tag="li"><p>{comment}</p></Media>
          <Media tag="li"><p>{author}, {date}</p></Media>
        </div>
      )
    });
    

    return (
      <>
        <h3>Comments</h3>
        <Media list>
          {comments}
        </Media>
      </>
    )
  }
}
