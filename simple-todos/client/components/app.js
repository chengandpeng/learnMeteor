import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Task from './task';
import { Tasks } from '../../imports/collections/tasks';
import InputForm from './input-form';
import AccountsWrapper from './accounts-wrapper';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hideCompleted: false };
  }

  renderTasks() {
  	let filterTasks = this.props.tasks;
  	if (this.state.hideCompleted) {
  		filterTasks = filterTasks.filter(task => !task.checked);
  	}
  	return filterTasks.map(task => {
  		return <Task key={task._id} task={task} />
  	});
  }

  toggleHideCompleted() {
  	this.setState({
  		hideCompleted: !this.state.hideCompleted, 
  	});
  }

  render() {
    return (
      <div>
      	<header>
      		<h1>Todo List ({this.props.incompleteCount})</h1>

      		 <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          <AccountsWrapper />
      	</header>
      	
      	{ this.props.currentUser ? 
      		<InputForm /> : ''
      	}
	      	<ul>
	      		{this.renderTasks()}
	      	</ul>

      </div>
    );
  }
}

export default createContainer(() => {
	return { 
		tasks: Tasks.find({}, { sort: { createdAt: -1 }}).fetch(),
		incompleteCount: Tasks.find({ checked: { $ne: true }}).count(),
		currentUser: Meteor.user(),
	};
}, App);