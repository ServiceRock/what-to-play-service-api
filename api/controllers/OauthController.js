/**
 * OauthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	/**
   	* `OauthController.callback()`
   	*/
	callback: async function(req, res) {
		const code = req.param('code') || null;

		sails.helpers.googleUtil
			.with({ authorizationCode: code })
			.then((data) => {
				res.send(data);
			})
			.catch((error) => {
				res.badRequest();
				error.response && error.response.data && console.error(error.response.data);
			});
	}
};
