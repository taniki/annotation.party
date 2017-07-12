import React, {Component} from "react";

import { topics } from "../api/topics.js"
import { metacategories } from "../api/metacategories.js"

import Tag from "./Tag.jsx"

export default class Sidebar extends Component {

	metacategories(){
		let mc = metacategories.map((metacategory)=>{
			let description = { __html: metacategory.description }
	
			return (
				<div key={metacategory.tag}>
					<dt><Tag tag={ metacategory.tag } /></dt>
					<div className="small" dangerouslySetInnerHTML={ description }></div>
				</div>
			);
		});

		console.log(mc);

		return (
			<div>
				<h3>Debates</h3>

				{ mc }
			</div>		
		);

	}
	
	topics(){
		let t = topics.map((topic)=>{
			return (
				<div key={topic}>
					<dt><Tag tag={ topic } /></dt>
				</div>
			);
		});

		return (
			<div>
				<h3>Categories</h3>

				<p>This is the list of tags we are going to focus on in this studies.</p>

				<dl>
					{ t }
				</dl>
			</div>
		);

	}

	render(){
    return (
			<div>

			{ this.metacategories() }

			{ this.topics() }

			</div>
    );
  }
}
