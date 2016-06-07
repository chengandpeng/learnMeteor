import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'recipes.insert': function(name, description, ingredient) {
		return Recipes.insert({
			createdAt: new Date(),
			name,
			description,
			ingredient,
		});
	},
});

export const Recipes = new Mongo.Collection('recipes');