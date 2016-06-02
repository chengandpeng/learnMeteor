import React from 'react';
import { Tasks } from '../../imports/collections/tasks';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleChecked() {
  	Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask() {
  	Meteor.call('tasks.remove', this.props.task._id);
  }

  render() {
  	const taskClassName = this.props.task.checked ? 'checked' : '';
    return (
    	<li className={taskClassName}>
    		<button className="delete" onClick={this.deleteThisTask.bind(this)}>
    			&times;
    		</button>
    		
    		<input id={this.props.task._id}  
    						type="checkbox" readOnly checked={this.props.task.checked}
    						onClick={this.toggleChecked.bind(this)} />

    		<label htmlFor={this.props.task._id} className="text">
    			<strong>{this.props.task.username}</strong>:{this.props.task.text}
    		</label>
    	</li>
    );
  }
}
