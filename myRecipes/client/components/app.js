import React from 'react';
import { Layout, Content } from 'react-mdl';

import Header from './header';
import Footer from './footer';
import Drawer from './drawer';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
    		<Layout fixedHeader>
    			<Header />
    			<Drawer />
    			<Content className='content'>
    				{this.props.children}
    			</Content>
    			<Footer />
    		</Layout>
    	</div>
    );
  }
}
