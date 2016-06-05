import React from 'react';
import { Button, Textfield, FABButton, Card, CardTitle, CardText, CardActions, Icon } from 'react-mdl';

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<Button raised colored>New Recipe</Button>
      	<Card shadow={2} className='card-new-recipe'>
				    <CardTitle expand className='cardTitle-new-recipe'>Add New Recipe</CardTitle>
				    <CardText>
						  <Textfield label="Recipe Name" floatingLabel
						    style={{width: '400px'}}
							/>
							<br />
							<Textfield label="Description" floatingLabel
						    style={{width: '400px'}}
							/>
							<br />

							<Textfield label="Name" floatingLabel
						    style={{width: '150px'}}
							/>
							<Textfield label="Name" floatingLabel
						    style={{width: '150px'}}
							/>
							<FABButton mini colored>
							   <Icon name="add" />
							</FABButton>

				    </CardText>
				    <CardActions border>
				        <Button colored>Submit</Button>
				    </CardActions>
				</Card>
      </div>
    );
  }
}
