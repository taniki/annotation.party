import React, { Component, PropTypes } from 'react';
import { FormattedRelative } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import DocumentAnnotation from './DocumentAnnotation.jsx';

export default class DocumentAnnotations extends Component {

	annotations(){
		let annotations = this.props.document.annotations;

		return annotations.map((annotation)=>{
			return <DocumentAnnotation key={annotation.id} annotation={annotation} />
		});
	}

	render() {
		let document = this.props.document;
		
		return (	
			<div className="card">
				<div className="card-header">
					<a href={ document.uri  }>{ document.title }</a>
				</div>

				<ul className="list-group list-group-flush small">
					{ this.annotations() }
				</ul>
			</div>
		);
  }
}

DocumentAnnotations.propTypes = {
  document: PropTypes.object.isRequired,
};
