import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button,
				CardMenu, IconButton, DataTable, TableHeader } from 'react-mdl';
	
export default class RecipeView extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
  	Meteor.call('recipes.setInMenu', this.props.recipe);
  }

  handleDelete() {
  	Meteor.call('recipes.remove', this.props.recipe);
  }

  render() {
    return (
	    <Card shadow={2} className="card-view-recipe">
		    <CardTitle expand className={this.props.recipe.inMenu?'cardTitle-view-recipe-selected':'cardTitle-view-recipe'}>
		    	<div>
			    	<h4>{this.props.recipe.name}</h4>
			    	<br />
		    		<span className='cardTitle-des'>{this.props.recipe.description}</span>	
		    	</div>
		    </CardTitle>
		    <CardText>
		    	<DataTable shadow={0} rows={this.props.recipe.ingredient} style={{width: '100%'}}>
		    		<TableHeader name="name" tooltip="Ingredient Name">Name</TableHeader>
		    		<TableHeader name="amount" tooltip="Amount for Ingredient">Amount</TableHeader>
		    	</DataTable>
		    </CardText>
		    <CardActions border>
		        <Button colored onClick={this.handleClick.bind(this)} >
		        	{this.props.recipe.inMenu?'REMOVE FROM MENU':'ADD TO MENU'}
		        </Button>
		    </CardActions>
		    <CardMenu>
		    	<IconButton name='delete' onClick={this.handleDelete.bind(this)} style={{color: '#fff'}}/>
		    </CardMenu>
			</Card>
    );
  }
}
