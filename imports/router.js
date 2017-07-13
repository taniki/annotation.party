import React, {Component} from 'react'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { fetchAnnotations } from './actions'
import rootReducer from './reducers'

import {
		Router,
		Route,
		HashRouter
} from 'react-router-dom';

import {
	DocumentsPage,
	AnnotationsPage,
	GlossaryPage
} from './pages'

// const browserHistory = hashHistory; // createBrowserHistory();

const loggerMiddleware = createLogger()

let store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
)

store.dispatch(fetchAnnotations())

export const renderRoutes = () => (
  <Router history={hashHistory}>
      <Route path="/" component={DocumentsPage} />
      <Route path="/glossary" component={GlossaryPage} />
  </Router>
)

class Routes extends Component {
  render(){
		return (
			<Provider store={store}>
			<HashRouter>
				<div>
      		<Route exact path="/" component={DocumentsPage} />
					<Route path="/annotations" component={AnnotationsPage} />
      		<Route path="/glossary" component={GlossaryPage} />
				</div>
  		</HashRouter>
			</Provider>
		)
	}
}

export default Routes
