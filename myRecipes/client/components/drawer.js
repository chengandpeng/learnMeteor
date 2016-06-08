import React from 'react';
import {Drawer as DrawerMDL, Navigation } from 'react-mdl';
import { Link } from 'react-router';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<DrawerMDL title='My Recipes'>
    		<Navigation>
          <Link to="/">Recipes</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/shopping-list">Shopping List</Link>
    		</Navigation>
    	</DrawerMDL>
    );
  }
}
