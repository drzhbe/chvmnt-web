var React = require('react');
var ReactPropTypes = React.PropTypes;

var ProfileActions = require('../actions/ProfileActions');

var ENTER_KEY_CODE = 13;

var Email = React.createClass({
	propTypes: {
		value: ReactPropTypes.string
	},
	getInitialState: function() {
		return {
			value: this.props.value || ''
		};
	},
	render: function() {
		return (
			<input
				className='chvmnt__emailInput'
				placeholder='email'
				onBlur={this._save}
				onKeyDown={this._onKeyDown}
				onChange={this._onChange}
				value={this.state.value}
				autoFocus={true} />
		);
	},
	_onChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},
	_save: function() {
		ProfileActions.signUp(this.state.value);
	},
	_onKeyDown: function(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			this._save();
		}
	}
});
module.exports = Email;