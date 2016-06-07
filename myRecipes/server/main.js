import { Meteor } from 'meteor/meteor';
import { Recipes } from '../imports/collections/recipes';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('recipes', function() {
  	return Recipes.find({});
  })
});
