import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Textfield, FABButton, Card, 
				CardTitle, CardText, CardActions, Icon,
				IconButton, CardMenu } from 'react-mdl';
import _ from 'lodash';

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredientList: [],
      formShow: false
    }
  }

  componentDidMount() {
    this.setState({
      ingredientList: [{'display': true}]
    });
  }

  handleToggleForm() {
    this.setState({
      formShow: !this.state.formShow 
    });
  }

  renderIngredient() {
  	return this.state.ingredientList.map((ingredient, index) => {
      return (
        <div style={{display: this.state.ingredientList[index].display}}  key={index}>
          <Textfield label="Name" floatingLabel ref={`ingredientName${index}`} style={{width: '150px'}} />
          <Textfield label="Amount" floatingLabel ref={`ingredientAmount${index}`} style={{width: '150px'}} />
          <IconButton name='delete' onClick={this.handleDelete.bind(this, index)} />
        </div>
      );
    });
  }

 	handleDelete(index) {
    let list = this.state.ingredientList;
    list[index].display = 'none';
 		this.setState({
 			ingredientList: list
 		});
 	}

  handleClick() {
    let list = this.state.ingredientList;
    list.push({'display':true});
    this.setState({
      ingredientList: list
    });
  }

  handleSubmit() {
    let name = this.refs.recipeName.refs.input.value;
    let description = this.refs.description.refs.input.value;

    if(!name) {
      alert('input name');
      return;
    }

    let list = [];
    this.state.ingredientList.forEach( (value,index) => {
      if(value.display == true) {
        let refIngName = `ingredientName${index}`;
        let refIngAmount = `ingredientAmount${index}`;
        list.push({'name': this.refs[refIngName].refs.input.value, 'amount': this.refs[refIngAmount].refs.input.value});
      }
    });

    Meteor.call('recipes.insert', name, description, list, (error) => {
      this.refs.recipeName.refs.input.value = '';
      this.refs.description.refs.input.value = '';
      this.setState({
        ingredientList: [{'display': true}]
      });
      this.refs.ingredientName0.refs.input.value = '';
      this.refs.ingredientAmount0.refs.input.value= '';
    });
  }

  render() {
    const buttonShow = this.state.formShow?'none':true;
    const formShow = this.state.formShow?true:'none';
    return (
      <div>
      	<Button raised colored 
                onClick={this.handleToggleForm.bind(this)} style={{marginLeft: '16px', display: buttonShow }} >New Recipe</Button>
      	<Card shadow={2} className='card-new-recipe' style={{display: formShow }} >
				    <CardTitle expand className='cardTitle-new-recipe'>Add New Recipe</CardTitle>
				    <CardText>
						  <Textfield label="Recipe Name" floatingLabel ref='recipeName' />
							<br />
							<Textfield label="Description" floatingLabel ref='description' />
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
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="clear" onClick={this.handleToggleForm.bind(this)} />
            </CardMenu>
				</Card>
      </div>
    );
  }
}
