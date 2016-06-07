import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
	
export default class RecipeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
	    <Card shadow={0} style={{width: '320px', height: '320px', margin: '20px'}}>
		    <CardTitle expand>{this.props.recipe.name}</CardTitle>
		    <CardText>
		    	{this.props.recipe.description}
		    </CardText>
		    <CardActions border>
		        <Button colored>Add to Menu</Button>
		    </CardActions>
			</Card>
    );
  }
}
