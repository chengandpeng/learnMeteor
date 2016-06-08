import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { createContainer } from 'meteor/react-meteor-data';
import { Recipes } from '../../imports/collections/recipes';
import RecipeView from './recipe-view';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
  	return this.props.recipes.map(recipe => {
  		return <Cell col={4} key={recipe._id}><RecipeView recipe={recipe} /></Cell>
  	});
  }

  render() {
    return (      
      <Grid>
      	{this.renderList()}
      </Grid>
    );
  }
}

export default createContainer(() => {
	Meteor.subscribe('recipes');
	return { recipes: Recipes.find({ ownerId: Meteor.userId() }).fetch() };
}, RecipeList);
