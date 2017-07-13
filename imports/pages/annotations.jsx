import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux'

import Annotations from "../api/annotations.js";

import DocumentAnnotations from '../ui/DocumentAnnotations.jsx';
import Loader from '../ui/Loader.jsx'
import MainNav from '../ui/MainNav.jsx';
import Sidebar from '../ui/Sidebar.jsx';

import config from 'config'

// App component - represents the whole app
export class AnnotationsPage extends Component {
  getAnnotations() {
  }

	renderAnnotations() {
		let annotations = this.props.annotations;
		let documents = _(annotations).groupBy("uri");

		// console.log(documents)

		let d = documents.map((document_annotations, uri) => {
			// console.log(document_annotations);
			// console.log(uri);
			
			let a = document_annotations;
			
			let document = {
				uri: uri,
				title: a[0].document.title,
				annotations: a
			};

			// console.log(document);

      return (<DocumentAnnotations key={document.uri} document={document} />);
		}).value();

		// console.log(d);

		return d;
  }

	render() {
		return (
      <IntlProvider locale="en">
			<div>

			<Loader />

			<div className="container">
				
				<h1 className="mb-5 mt-5">{ config.group.title }</h1>

				<MainNav />

        <div className="row">
					<div className="col col-3">
            <Sidebar />
          </div>

          <div className="col col-9">
            <div className="card-columns">
              { this.renderAnnotations() }
            </div>
          </div>
        </div>
			</div>
			</div>
    </IntlProvider>
    );
  }
}

AnnotationsPage.propTypes = {
  title: PropTypes.string,
  annotations: PropTypes.array
}

export default connect(
	state => {
		return {
			annotations: state.annotations.items
		}
	}
)(AnnotationsPage)

