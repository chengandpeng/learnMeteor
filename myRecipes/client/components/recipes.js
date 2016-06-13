import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import RecipeForm from './recipe-form';
import RecipeList from './recipe-list';
import Welcome from './welcome';

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
        <Welcome />
      );
    }
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, Recipes);
