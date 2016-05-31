import React from 'react';
import { markdown } from 'markdown';

export default class BinsViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	if (!this.props.bin) {
  		return (
  			<div>Loading...</div>
  		);
  	}
  	
  	const rawHTML = markdown.toHTML(this.props.bin.content);

    return (
      <div className="col-xs-4">
      	<h5>Output</h5>
      	<div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
    );
  }
}
