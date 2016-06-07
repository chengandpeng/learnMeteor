import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Recipes from './components/recipes';
import Menu from './components/menu';
import ShoppingList from './components/shopping-list';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Recipes} />
			<Route path="menu" component={Menu} />
			<Route path="shopping-list" component={ShoppingList} />
		</Route>
	</Router>
);

Meteor.startup(() => {
	ReactDOM.render(routes, document.querySelector('.container'));
})