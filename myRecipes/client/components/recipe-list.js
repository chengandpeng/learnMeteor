import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Recipes } from '../../imports/collections/recipes';
import RecipeView from './recipe-view';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
  	return this.props.recipes.map(recipe => {
  		return <RecipeView key={recipe._id} recipe={recipe} />
  	});
  }

  render() {
    return (
      <div>
      	{this.renderList()}
      </div>
    );
  }
}

export default createContainer(() => {
	Meteor.subscribe('recipes');
	return { recipes: Recipes.find({}).fetch() };
}, RecipeList);
