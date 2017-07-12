import React, { Component, PropTypes } from 'react';

import { metacategories } from "../api/metacategories.js";

const categories = [
  "decentralization",
  "encryption",
  "net right",
  "activism",
  "industrial lobby",
  "surveillance",
  "encryption",
  "political threat",
  "technology"
]

export default class Tag extends Component {
  render() {
    let tag = this.props.tag;
    let style = "";

		let cl = "badge";

    if (categories.includes(tag)){
      style = "topic";
		}

		let metacategory = false;

		if (metacategory = metacategories.find((mc)=>{ return mc.tag == tag })){
			cl += " badge-"+metacategory.id;
			style = metacategory.id;
		} else {
			cl +=  " badge-default";
		}

    return (
      <span className={ cl } style={ styles[style] }>{ tag }</span>
    );
  }
}

const styles = {
  "default": {},
	topic: { "backgroundColor" : "black" },
	approval: { "backgroundColor": "#00FF7F"  },
	disapproval: { "backgroundColor": "#ff6666"  },
	question: { "backgroundColor": "#3399ff"  },
	reference: { "backgroundColor": "#FFFF66"  },
}
