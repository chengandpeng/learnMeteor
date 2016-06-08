import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'recipes.insert': function(name, description, ingredient) {
		return Recipes.insert({
			createdAt: new Date(),
			name,
			description,
			ingredient,
			inMenu: false,
			ownerId:this.userId
		});
	},

	'recipes.remove': function(recipe) {
		return Recipes.remove(recipe);
	},

	'recipes.setInMenu': function(recipe) {
		return Recipes.update(recipe._id, { $set: {inMenu: !recipe.inMenu} });
	}
});

export const Recipes = new Mongo.Collection('recipes');