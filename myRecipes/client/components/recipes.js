import React from 'react';
import RecipeForm from './recipe-form';
import RecipeList from './recipe-list';

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="recipes">
      	<h1>My Recipe Book</h1>
      	<RecipeForm />
      	<RecipeList />
      </div>
    );
  }
}
