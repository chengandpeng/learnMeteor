import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<nav className="nav navbar-default">
    		<div className="navbar-header">
    			<a className="navbar-brand">Shorten My Link</a>
    		</div>
    	</nav>
    );
  }
}
