import React from 'react';
import {Drawer as DrawerMDL, Navigation } from 'react-mdl';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<DrawerMDL title='My Recipes'>
    		<Navigation>
    			<a href="#">Recipes</a>
    			<a href="#">Menu</a>
    			<a href="#">Shopping List</a>
    		</Navigation>
    	</DrawerMDL>
    );
  }
}
