// import { Blaze } from 'meteor/blaze';
// import { Template } from 'meteor/templating';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class LoginButtons extends Component {
	componentDidMount(){
		console.log("yo");

		// console.log(Template.loginButtons);
		
		this.view = Blaze.render(Template.loginButtons,
				ReactDOM.findDOMNode(this.refs.container));
	}

	render(){
		return <span ref="container" />;
	}
}

export default class LoginPage extends Component {
	render(){
		console.log("yo 0");

		return (
			<div>
				<h3>login buttons</h3>
			</div>
		);
	}
}
