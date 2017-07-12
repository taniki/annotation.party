import _ from 'lodash';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl';

import { Documents } from '../api/documents.js';

import Document from '../ui/Document.jsx';
import AnnotationsDocumentsTable from '../ui/AnnotationsDocumentsTable.jsx';

import MainNav from '../ui/MainNav.jsx';
import Sidebar from '../ui/Sidebar.jsx';
import Loader from '../ui/Loader.jsx'

class DocumentsCategory extends Component {
	documents(){
		let documents = this.props.category.documents;

		return documents.map((document)=>{
//			console.log(document);
			return (
			<div key={document.uri} className="col col-4 mb-3 d-flex align-items-stretch">
				<Document document={document} />
			</div>);
		}); 
	}
	
	render(){
		console.log(this.props.category);

		let category = this.props.category.category;
		let documents = this.props.category.documents;

		return (
				<div>
					<h3>{ category }</h3>

					<div className="row">
						{ this.documents() }
					</div>

				</div>
			);
	}
}


// App component - represents the whole app
export class DocumentsPage extends Component {
	GroupDocuments(){
		let annotations = this.props.annotations;
		let categories = Documents; // this.props.documents;

		console.log(categories);

		return categories.map((category)=> <DocumentsCategory key={category.category} category={category} /> );
  }

  render() {
		let annotations = this.props.annotations;

    return (
			<IntlProvider locale="en">
			<div>
			
			<Loader />
			
			<div className="container">				
				<h1 className="mb-5 mt-5">Net Rights + Cryptography + Decentralization</h1>

				<MainNav />

        <div className="row">
					<div className="col col-3">
            <Sidebar />
          </div>

          <div className="col col-9">
						{ this.GroupDocuments() }


						<h3>Other documents</h3>
						<AnnotationsDocumentsTable annotations={ annotations } />

          </div>
        </div>
			</div>
		
			</div>
    </IntlProvider>
    );
  }
}

DocumentsPage.propTypes = {
//  documents: PropTypes.array.isRequired,
	annotations: PropTypes.array.isRequired,
}

export default connect(
	state => {
		return {
			annotations: state.annotations.items
		}
	}
)(DocumentsPage)
