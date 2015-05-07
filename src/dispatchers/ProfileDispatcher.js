var Dispatcher = require('flux').Dispatcher;
var keyMirror = require('keymirror');
module.exports.Dispatcher = new Dispatcher();
module.exports.constants = keyMirror({
	PROFILE__SIGN_IN: null,
	PROFILE__BIRTH: null,
});