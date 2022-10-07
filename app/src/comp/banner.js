import React from 'react'

export default class Banner extends React.Component {
	render() {
		const style = `.row {
			background-color: ${this.props.color};
	 		text-align: center;
			padding-left: 30px;
			padding-top: 30px;
			padding-bottom: 30px;
			padding-right: 0px;
		}`
		
		return (
			<>
				<div className="row">
				  <h1>{this.props.title}</h1>
					<h2>{this.props.subtitle}</h2>
					{this.props.children}
				</div>
				<style>{style}</style>
			</>
		)
	}
}

Banner.defaultProps = {
	color: "lightblue"
}
