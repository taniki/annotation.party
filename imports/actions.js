import fetch from 'isomorphic-fetch'
import config from 'config'

console.log("config", config)

export const REQUEST_ANNOTATIONS = 'REQUEST_ANNOTATIONS'
export function requestAnnotations(url){
	return {
		type: REQUEST_ANNOTATIONS,
		url
	}
}

export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS'
export function receiveAnnotations(url, json) {
	return {
		type: RECEIVE_ANNOTATIONS,
		url,
		annotations: json,
		receivedAt: Date.now()
	}
}

export const FETCH_ANNOTATIONS = 'FETCH_ANNOTATIONS'

export function fetchAnnotations(){
	let url = config.api.url+"/annotations.json"

	return function(dispatch){
		dispatch(requestAnnotations(url))
	
		return fetch(url)
			.then(
				response => response.json(),
	    	error => console.log('An error occured.', error)
			)
			.then(json => 
					dispatch(receiveAnnotations(url, json))
			)
	}
}
