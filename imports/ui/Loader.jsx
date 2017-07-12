import React, { Component  } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Nanobar from 'nanobar'

export class LoaderComponent extends Component {
	render(){
		return <div id="nanobar" />
	}

	componentDidMount(){
		let opt = {
			id: 'bar-main',
			target: document.getElementById('nanobar')
		}

		this.nanobar = new Nanobar(opt)

		this.nanobar.go(10);
	}

	componentDidUpdate(){
		this.nanobar.go(this.props.go)
	}
}


LoaderComponent.propTypes = {
	go: PropTypes.number
}

export default connect(
	state => {
		switch(state.annotations.isFetching){
			case true:
				return { go: 50 }

			case false:
				return { go: 100  }
		}
		//		return {}
	} 
)(LoaderComponent)
