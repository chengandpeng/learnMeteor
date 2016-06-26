import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<BinsEditor bin={this.props.bin}/>
      	<BinsViewer bin={this.props.bin}/>
        <BinsShare bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer((props) => {
	Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

	return {'bin': Bins.findOne(props.params.binId)};
}, BinsMain);