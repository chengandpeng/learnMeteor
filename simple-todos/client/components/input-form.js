import React from 'react';
import { Tasks } from '../../imports/collections/tasks';
import { Meteor } from 'meteor/meteor';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
  	event.preventDefault();

  	Tasks.insert({
  		text: this.refs.textInput.value,
  		createdAt: new Date(),
  		owner: Meteor.userId(),
  		username: Meteor.user().username
  	});

  	this.refs.textInput.value = '';
  }

  render() {
    return (
      <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
        <input
          type="text"
          ref="textInput"
          placeholder="Type to add new tasks"
        />
      </form>
    );
  }
}
