var React = require('react');
var Welcome = require('./Welcome')
var Wrap = React.createClass({
	render: function() {
		return (
			<div className='chvmnt__wrap'>
				<blockquote className='chvmnt__quote'>
					Achievement [<span className='chvmnt__help'>/əˈtʃiːvmənt/</span>] – from the french verb <i>achever</i>, <i>achiever</i> (<strong>“to finish”</strong>).
				</blockquote>
				<Welcome />
			</div>
		);
	}
})
module.exports = Wrap;
