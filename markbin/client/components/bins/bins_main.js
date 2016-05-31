import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';

class BinsMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<BinsEditor bin={this.props.bin}/>
      	<BinsViewer bin={this.props.bin}/>
      </div>
    );
  }
}

export default createContainer((props) => {
	Meteor.subscribe('bins');

	return {'bin': Bins.findOne(props.params.binId)};
}, BinsMain);