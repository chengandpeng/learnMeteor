import React from 'react';
import { Card, CardTitle, CardText, DataTable, TableHeader,
				CardActions, Button } from 'react-mdl';

export default class MenuView extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
  	Meteor.call('recipes.setInMenu', this.props.recipe);
  }

  render() {
    return (
      <Card shadow={2} className='card-view-recipe animated fadeIn'>
		    <CardTitle expand className='cardTitle-view-recipe-selected'>
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
		        	REMOVE FROM MENU
		        </Button>
		    </CardActions>
			</Card>
    );
  }
}
