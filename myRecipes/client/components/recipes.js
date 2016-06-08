import React from 'react';
import RecipeForm from './recipe-form';
import RecipeList from './recipe-list';
import { createContainer } from 'meteor/react-meteor-data';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.user) {
      return (
        <div className="recipes">
        	<h1>My Recipe Book</h1>
        	<RecipeForm />
        	<RecipeList />
        </div>
      );
    } else {
      return (
        <div>
          test
        </div>
      );
    }
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, Recipes);
