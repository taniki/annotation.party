import React, { Component, PropTypes } from 'react';

export default class Document extends Component {
	render(){
		let document = this.props.document;

		return (
			<div className="card w-100">

				<div className="card-block">
					<h4 className="card-title">{ document.name }</h4>
					<h6 className="card-subtitle mb-2 text-muted">{ document.author }</h6>

					<p className="card-text small" dangerouslySetInnerHTML={{  __html: document.description }} />

					<a href={ document.uri_h } className="card-link">Open with hypothes.is</a>
				</div>

				<div className="card-footer">
					<div className="stats text-muted small">

					</div>
				</div>

			</div>
		);
	}
}
