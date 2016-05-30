import React from 'react';
import ImageDetail from './image_detail';

export default class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

 	RenderedImages() {
 		return this.props.images.filter(image => !image.is_album)
 														.map(image => <ImageDetail key={image.id} image={image} />);
 	}

  render() {
    return (
      <ul className="media-list list-group">
      	{this.RenderedImages()}
      </ul>
    );
  }
}
