import _ from 'lodash';

import React, { Component } from 'react';
import { FormattedRelative } from 'react-intl';

import Tag from "./Tag.jsx";

class AnnotationsDocumentsTableRow extends Component {
	tags(){
		let tags = _.chain(this.props.document.annotations)
			.map("tags")
			.flatten()
			.uniq()
			.value();

		// console.log(tags);

		return tags.map((t)=> <span className="mr-1 mb-1"><Tag tag={t} /></span>);
	}

	render(){
		let d = this.props.document;

		let uri = d.uri;
		let name = d.name;
		let updated = <FormattedRelative value={ d.annotations[0].updated } />


		let contributors = _.chain(d.annotations)
			.map("user")
			.uniq()
			.value().length;

		let annotations = d.annotations.length;

		return (
			<tr>
				<td className="text-muted small">{ updated }</td>
					<td>
						<p>
							<a href={ uri }>{ name }</a>
						</p>

						<p>{ this.tags() }</p>
		
					</td>
					<td>{ contributors  }</td>
					<td>{ annotations  }</td>
					<td>
						<a href={ "http://via.hypothes.is/"+ uri }>#</a>
					</td>
	
			</tr>
		);
	}
}

export default class AnnotationsDocumentsTable extends Component {
	rows(){
		let documents = _(this.props.annotations).groupBy("uri").map((d, uri)=>{	
			let info = {}

			if (d.length > 0){
			info =	{
					uri: uri,
					name: d[0].document.title,
					annotations: d
				}
			} 		
	
			return info 
		}).value();

		console.log("documents", documents.length)
		return documents.map((d)=> <AnnotationsDocumentsTableRow document={d} />); 
	}	

	render(){
		let annotations = this.props.annotations;

		return (
			<table className="table w-100">
				 <thead>
					<tr>
						<th className="small">updated</th>
						<th>document</th>
      			<th><i className="fa fa-user" aria-hidden="true"></i></th>
						<th><i className="fa fa-pencil" aria-hidden="true"></i></th>
						<th>h</th>
			  	</tr>
				</thead>

				<tbody>
					{ this.rows() }
				</tbody>
			</table>
		);
	}
}
