/**
 * Authorization settings
 * (sails.config.authorization)
 */

module.exports.authorization = {
	google: {
		scopes: [ 'https://www.googleapis.com/auth/plus.me' ],
		accessType: 'offline',
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		redirectUrl: process.env.GOOGLE_REDIRECT_URL
	}
};
