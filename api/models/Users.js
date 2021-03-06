/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		// primitives
		name: { type: 'string' },

		email: { type: 'string' },

		token: { type: 'string' }

		// embeds

		// associations
	}
};
