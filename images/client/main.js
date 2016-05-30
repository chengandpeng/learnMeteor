import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

class App extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = { images: []};
	}

	componentWillMount() {
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
			.then((response) => {
				this.setState({
					images : response.data.data 
				});
		});		
	}

	render() {
		if(this.state.images) {
			return (
				<div>
					<ImageList images={this.state.images}/>
				</div>
			);
		} else {
			return (
				<div>
					loading...
				</div>
			)
		} 	
	}
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));

});
