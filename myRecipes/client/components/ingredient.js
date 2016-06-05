import React from 'react';
import { Textfield, IconButton } from 'react-mdl';

export default class Ingredient extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const keyName = `${this.props.index}-name`;
  	console.log(this.props.index);
  	console.log(this.refs.keyName);
    return (
      <div>
				<Textfield label="Name" floatingLabel ref={keyName}
			    style={{width: '190px'}}
				/>
				<Textfield label="Amount" floatingLabel
			    style={{width: '190px'}}
				/>
				<IconButton name='delete' onClick={this.props.handleDelete} />
			</div>
    );
  }
}
