import React from 'react';
import { Header as HeaderMDL, Navigation } from 'react-mdl';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<HeaderMDL title='My Recipes'>
    		<Navigation>
    			<a href="#">Recipes</a>
    			<a href="#">Menu</a>
    			<a href="#">Shopping List</a>
    		</Navigation>
    	</HeaderMDL>
    );
  }
}
