import React from 'react';

export default class Hover extends React.Component {
	state = {
		hovering: false
	};
	handleMouseOver = () => {
		this.setState({ hovering: true });
	};

	handleMouseOut = () => {
		this.setState({ hovering: false });
	};

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
