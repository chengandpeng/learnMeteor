import React from 'react';

export default class EmployeeDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnail">
      	<img src={this.props.employee.avatar} />
      	<div className="caption">
	      	<h3>{this.props.employee.name}</h3>
	      	<ul className="list-group">
	      		<li className="list-group-item">Email: {this.props.employee.email}</li>
	      		<li className="list-group-item">Phone: {this.props.employee.phone}</li>
	      	</ul>
      	</div>
      </div>
    );
  }
}
