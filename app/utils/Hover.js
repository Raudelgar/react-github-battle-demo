import React from 'react';

export default class Hover extends React.Component {
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
		const { children } = this.props;

		return (
			<div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				{children(hovering)}
			</div>
		);
	}
}
