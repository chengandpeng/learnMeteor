import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Cell } from 'react-mdl';

import { Recipes } from '../../imports/collections/recipes';
import MenuView from './menu-view';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
  	return this.props.recipes.map(recipe => {
  		return <Cell col={4} key={recipe._id}><MenuView recipe={recipe} /></Cell>
  	});
  }

  render() {
    return (
      <div>
        <h1>Menu List</h1>  
    		<Grid>    
    			{this.renderList()}
    		</Grid>
      </div>
    );
  }
}

export default createContainer(() => {
	Meteor.subscribe('recipes');

	return {recipes: Recipes.find({ inMenu: true, ownerId: Meteor.userId()}).fetch() }
}, Menu);