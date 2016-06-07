import React from 'react';
import { Header as HeaderMDL, Navigation } from 'react-mdl';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<HeaderMDL title='My Recipes'>
    		<Navigation>
    			<Link to="/">Recipes</Link>
    			<Link to="/menu">Menu</Link>
    			<Link to="/shoppingList">Shopping List</Link>
    		</Navigation>
    	</HeaderMDL>
    );
  }
}
