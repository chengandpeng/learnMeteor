import React from 'react';
import ImageScore from './image_score';

export default class ImageDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="media list-group-item">
      	<div className="media-left">
      		<img src={this.props.image.link} />
      	</div>
      	<div className="media-body">
      		<h4 className="media-heading">
      			{this.props.image.title}
      		</h4>
      		<p>{this.props.image.description}</p>
      		<ImageScore ups={this.props.image.ups} downs={this.props.image.downs} /> 
      	</div>
    	</li>
    );
  }
}
