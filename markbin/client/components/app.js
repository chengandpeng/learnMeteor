import React from 'react';

import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<Header />
      	{this.props.children}
      </div>
    );
  }
}
