var React = require('react');
var ProfileStore = require('../stores/ProfileStore');
var Name = require('./Name');
var Email = require('./Email');
var Birth = require('./Birth');

var Welcome = React.createClass({
	getInitialState: function() {
		return {
			email: '',
			name: '',
			birth: ''
		};
	},
	componentDidMount: function() {
		ProfileStore.addChangeListener(this._onProfileChange);
	},
	componentWillUnmount: function() {
		ProfileStore.removeChangeListener(this._onProfileChange);
	},
	render: function() {
		var user = this.state.name ?
			<Name value={this.state.name}></Name> :
			<Email value=''></Email>;
		var birth = this.state.name && !this.state.birth ?
			<Birth value={this.state.birth}></Birth> :
			'';
		return (
			<div className='chvmnt__welcome'>
				Welcome, {user}
				{birth}
			</div>
		);
	},
	_onProfileChange: function() {
		this.setState({
			email: ProfileStore.getUserEmail(),
			name: ProfileStore.getUserName(),
			birth: ProfileStore.getUserBirth()
		});
	}
});
module.exports = Welcome;