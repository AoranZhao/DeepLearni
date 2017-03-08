exports = module.exports = (function() {
	var influencers = function(fb_id) {
		try {
			if (!fb_id) throw new SyntaxError('Http get request should accept one parameter fb_id');
		} catch(err) {
			console.log(err);
		} finally {
			var msg = "Cannot get friends id via /me/friends, which is used for getting friends who use same APP. Meanwhile, we can not get id of all friends and only get very limited information from /me/taggable_friends, /me/friends and /me/invitiable_friends in new Graph API version";
			return {
				fb_id: fb_id,
				type: 'API error',
				msg: msg
			}
		}
	}

	var mostInfluential = function() {
		var msg = "Cannot get friends id via /me/friends, which is used for getting friends who use same APP. Meanwhile, we can not get id of all friends and only get very limited information from /me/taggable_friends, /me/friends and /me/invitiable_friends in new Graph API version";
		return {
			type: 'API error',
			msg: msg
		}
	}

	return {
		influencers: influencers,
		mostInfluential: mostInfluential
	}
}());