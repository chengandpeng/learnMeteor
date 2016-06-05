import React from 'react';
import { Button, Textfield, FABButton, Card, 
				CardTitle, CardText, CardActions, Icon,
				IconButton } from 'react-mdl';
import _ from 'lodash';

import Ingredient from './ingredient';

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {ingredientCount: 1}
  }

  renderIngredient() {
  	const ingredientList = [];
  	_.times(this.state.ingredientCount, (index) => {
  			ingredientList.push(<Ingredient index={index} handleDelete={this.handleDelete.bind(this)}/>);
  		});
  	return ingredientList;

  }

 	handleDelete() {
 		this.setState({
 			ingredientCount: this.state.ingredientCount-1 
 		});
 	}

  handleClick() {
  	this.setState({
  		ingredientCount: this.state.ingredientCount+1
  	});
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
      	<Button raised colored>New Recipe</Button>
      	<Card shadow={2} className='card-new-recipe'>
				    <CardTitle expand className='cardTitle-new-recipe'>Add New Recipe</CardTitle>
				    <CardText>
						  <Textfield label="Recipe Name" floatingLabel ref='recipe-name'
						    style={{width: '400px'}}
							/>
							<br />
							<Textfield label="Description" floatingLabel ref='description'
						    style={{width: '400px'}}
							/>
							<br />
							<div>
								<span><strong>Ingredient</strong></span>
								{ this.renderIngredient() }
							</div>
							<IconButton name='add' colored onClick={this.handleClick.bind(this)}/>
				    </CardText>
				    <CardActions border>
				        <Button colored onClick={this.handleSubmit.bind(this)}>Submit</Button>
				    </CardActions>
				</Card>
      </div>
    );
  }
}