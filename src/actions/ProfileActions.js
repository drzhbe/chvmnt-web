var localStorage = require('../storages/LocalStorage');
var ProfileStorage = require('../storages/ProfileStorage');
var ProfileDispatcher = require('../dispatchers/ProfileDispatcher').Dispatcher;
var ProfileConstants = require('../dispatchers/ProfileDispatcher').constants;
var ProfileStore = require('../stores/ProfileStore');

function validateEmail(email) {
	return !!email;
}
function getNameFromEmail(email) {
	return email.split('@')[0];
}

var ProfileActions = {
	signUp: function(email) {
		if (!validateEmail(email)) return;

		var name = getNameFromEmail(email);
		localStorage.userEmail = email;

		ProfileStorage.add(email, {
			email: email,
			name: name
		});

		ProfileActions.signIn(email, name);
	},
	signIn: function(email) {
		ProfileDispatcher.dispatch({
			actionType: ProfileConstants.PROFILE__SIGN_IN,
			profile: ProfileStorage.get(email)
		});
	},
	changeName: function(name) {
		var profile = ProfileStorage.get(ProfileStore.getUserEmail());
		profile.name = name;
		ProfileStorage.add(ProfileStore.getUserEmail(), profile);

		ProfileActions.signIn(ProfileStore.getUserEmail());
	},
	trySignIn: function() {
		if (localStorage.userEmail) {
			ProfileActions.signIn(localStorage.userEmail);
		}
	},
	setBirth: function(birth) {
		var profile = ProfileStorage.get(ProfileStore.getUserEmail());
		profile.birth = birth;
		ProfileStorage.add(ProfileStore.getUserEmail(), profile);

		ProfileDispatcher.dispatch({
			actionType: ProfileConstants.PROFILE__BIRTH,
			birth: birth
		});
	}
};

module.exports = ProfileActions;
