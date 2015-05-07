var ProfileDispatcher = require('../dispatchers/ProfileDispatcher').Dispatcher;
var ProfileConstants = require('../dispatchers/ProfileDispatcher').constants;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _profile = {
	email: '',
	name: '',
	birth: ''
};

function signIn(profile) {
	_profile.email = profile.email;
	_profile.name = profile.name;
	_profile.birth = profile.birth;
}
function setBirth(birth) {
	_profile.birth = birth;
}

var CHANGE_EVENT = 'change';
var TodoStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getUserEmail: function() {
		return _profile.email;
	},
	getUserName: function() {
		return _profile.name;
	},
	getUserBirth: function() {
		return _profile.birth;
	}
});

ProfileDispatcher.register(function(action) {
	switch (action.actionType) {
		case ProfileConstants.PROFILE__SIGN_IN:
			signIn(action.profile);
			TodoStore.emitChange();
			break;
		case ProfileConstants.PROFILE__BIRTH:
			setBirth(action.birth);
			TodoStore.emitChange();
			break;
	}
});

module.exports = TodoStore;
