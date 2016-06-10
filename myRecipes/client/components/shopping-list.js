import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { List, ListItem, ListItemContent, ListItemAction } from 'react-mdl'; 
import { Recipes } from '../../imports/collections/recipes'; 

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
  	return this.props.recipes.map(recipe => {
  		return recipe.ingredient.map(ing => {
  			return (
 					<ListItem>
				    <ListItemContent icon="done"><strong>{ing.name}</strong></ListItemContent>
				    <ListItemAction>
				    	<div>
				    		{ing.amount}
				    	</div>
				    </ListItemAction>
				  </ListItem>
  			);
  		});
  	});
  }

  render() {
    return (
    	<div style={{width: '60%', margin: 'auto'}}>
    		<h1>Shopping List</h1>
	      <List>
				  {this.renderList()}
				</List>
			</div>
    );
  }
}

export default createContainer(() => {
	Meteor.subscribe('recipes');

	return { recipes: Recipes.find({ inMenu: true , ownerId: Meteor.userId() }).fetch() }
}, ShoppingList);