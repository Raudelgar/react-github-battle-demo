import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tooltip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hovering: false
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver() {
		this.setState({ hovering: true });
	}

	handleMouseOut() {
		this.setState({ hovering: false });
	}

	render() {
		const { hovering } = this.state;
		const { content, children } = this.props;

		return (
			<div
				className='tool-container'
				onMouseOver={this.handleMouseOver}
				onMouseOut={this.handleMouseOut}
			>
				{hovering && <div className='tooltip'>{content}</div>}
				{children}
			</div>
		);
	}
}

Tooltip.defaultProps = {
	content: 'Tooltip Content'
};

Tooltip.propTypes = {
	content: PropTypes.string
};
