import React, { Component, PropTypes } from 'react';
import { IntlProvider } from 'react-intl';
import { createContainer } from 'meteor/react-meteor-data';

import Annotation from './Annotation.jsx';
import Sidebar from './Sidebar.jsx';

import { Annotations } from '../api/annotations.js';

// App component - represents the whole app
class App extends Component {
  getAnnotations() {
  }

  renderAnnotations() {
    return this.props.annotations.map((annotation) => (
      <Annotation key={annotation._id} annotation={annotation} />
    ));
  }

  render() {
    return (
      <IntlProvider locale="en">
      <div className="container">
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
    </IntlProvider>
    );
  }
}

App.propTypes = {
  annotations: PropTypes.array.isRequired,
};


export default createContainer(() => {
  return {
    annotations: Annotations.find({}).fetch(),
  };
}, App);
