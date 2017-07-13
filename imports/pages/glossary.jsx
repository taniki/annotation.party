import React, { Component, PropTypes } from 'react';
import { IntlProvider } from 'react-intl';

import Annotation from '../ui/Annotation.jsx';

import MainNav from '../ui/MainNav.jsx';
import Sidebar from '../ui/Sidebar.jsx';

import config from 'config'

// App component - represents the whole app
export default class GlossaryPage extends Component {
	index() {
		return <div></div>
  }

  terms() {
		return <div></div>
	}

  render() {
    return (
      <IntlProvider locale="en">
      <div className="container">
				
				<h1 className="mb-5 mt-5">{ config.group.title }</h1>

				<MainNav />

        <div className="row">
          <div className="col col-3">
            { this.index() }
          </div>

          <div className="col col-9">
            { this.terms() }
          </div>
        </div>
      </div>
    </IntlProvider>
    );
  }
}

GlossaryPage.propTypes = {
  annotations: PropTypes.array.isRequired,
};
