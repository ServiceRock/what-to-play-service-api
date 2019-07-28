const { google } = require('googleapis');

module.exports = {
	inputs: {
		authorizationCode: {
			type: 'string',
			example: 'codeblahblahblah',
			description: 'The code of google authorizatin.',
			required: true
		}
	},

	fn: async function(inputs, exits) {
		const oauthClient = new google.auth.OAuth2(
			sails.config.authorization.google.clientId,
			sails.config.authorization.google.clientSecret,
			sails.config.authorization.google.redirectUrl
		);

		oauthClient.getToken(inputs.authorizationCode, (err, tokens) => {
			if (!err) {
				return exits.success(tokens);
			} else {
				exits.error(err);
			}
		});
	}
};
