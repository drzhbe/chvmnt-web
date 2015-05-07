var React = require('react');
var ReactPropTypes = React.PropTypes;

var ProfileActions = require('../actions/ProfileActions');

var ENTER_KEY_CODE = 13;

var Name = React.createClass({
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
				className='chvmnt__name'
				placeholder='name'
				onBlur={this._save}
				onKeyDown={this._onKeyDown}
				onChange={this._onChange}
				value={this.state.value} />
		);
	},
	_onChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},
	_save: function() {
		ProfileActions.changeName(this.state.value);
	},
	_onKeyDown: function(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			this._save();
		}
	}
});
module.exports = Name;