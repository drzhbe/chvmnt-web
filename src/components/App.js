var React = require('react');
var ProfileStore = require('../stores/ProfileStore');
var ProfileActions = require('../actions/ProfileActions');
var Wrap = require('./Wrap');

var App = React.createClass({
	componentDidMount: function() {
		ProfileActions.trySignIn();
	},
	render: function() {
		return (
			<Wrap />
		);
	}
});

module.exports = App;