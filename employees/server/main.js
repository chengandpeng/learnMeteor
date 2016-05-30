import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // code to run on server at startup

  // check to see if data exists in the collection
  // see if the collection has any records
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
  	// Generate some data...
  	_.times(5000, () => {
  		const { name, email, phone } = helpers.createCard();
  		Employees.insert({
  			name, email, phone,
  			avatar: image.avatar()
  		});
  	});
  }

  Meteor.publish('employees', (per_page) => Employees.find({}, { limit: per_page }));
});
