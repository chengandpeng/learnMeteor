import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 2;

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
    	page : 1
   	}
  }

  handleClick() {
  	this.setState({
  		page : this.state.page + 1
  	});
  	Meteor.subscribe('employees', PER_PAGE * this.state.page);
  }

  render() {
    return (
      <div>
      	<div className="employee-list">
      		{this.props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee}/>)}
      	</div>
      	<button onClick={this.handleClick.bind(this)} className="btn btn-primary">Load More...</button>
      </div>
    );
  }
}

export default createContainer(() => {
	// set up subscription
	Meteor.subscribe('employees', PER_PAGE);
	
	// return an object. Whatever we return will be sent to EmployeeList as props
	return { employees: Employees.find({}).fetch() };
}, EmployeeList);