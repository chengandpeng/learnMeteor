import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import '../imports/startup/accounts-config';

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});