import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class MainNav extends Component {
	render(){
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded mb-3">
			<div className="navbar-nav">
				<Link className="nav-item nav-link" to="/">Documents</Link>
				<Link className="nav-item nav-link" to="/annotations">Annotations</Link>
				<Link className="nav-item nav-link" to="/glossary">Glossary</Link>
			</div>
			</nav>
		);
	}
}
