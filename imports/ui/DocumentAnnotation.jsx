import React, { Component, PropTypes } from 'react';
import { FormattedRelative } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import Tag from './Tag.jsx';

export default class DocumentAnnotation extends Component {
  
	selector(){
    let annotation = this.props.annotation;
		let selector = false;

    if(annotation.target[0].selector){
      selector = annotation.target[0].selector.find((selector)=>{
        //console.log(selector);
        return selector.type == "TextQuoteSelector";
      });
    }

		if (selector) {
		return (
      <div className="exact">
      	<p>
          { selector.prefix }
      	  <strong style={styles.highlight}>{ selector.exact }</strong>
      		 { selector.suffix }
      	</p>
    	 </div>
			);
		} else {
			return
		}
	}

	user(){
    let annotation = this.props.annotation;

    let [userName, instanceName] = annotation.user.replace("acct:", "").split("@");

    return (
			<strong>
        { userName }
        <span className="text-muted">@{ instanceName }</span>
      </strong>
		);
	}

	tags(){
    let annotation = this.props.annotation;

    return annotation.tags.map((tag)=>
      <Tag tag={tag}></Tag>
    );
  }

	render() {
    let annotation = this.props.annotation;

    const date_updated = <FormattedRelative
        value={ annotation.updated }
      />

    let body = "";

    if (annotation.text  ||  annotation.text != ""){
      body = (
        <div className="comment-body text-muted font-italic">
          <ReactMarkdown source={ (annotation.text) } />
        </div>
      )
    }

    return (
      <li className="highlight list-group-item d-block">

				{ this.selector() }

        <div className="comment-info">
      		{ this.user() } - { date_updated } <a href={ annotation.links.incontext }>#</a>
      	</div>

        { body }

        <div className="tags">
          { this.tags() }
        </div>
      </li>
    );
  }
}

DocumentAnnotation.propTypes = {
  annotation: PropTypes.object.isRequired,
};

const styles = {
  highlight: { "backgroundColor" : "#ff6", "fontWeight": "normal" }
}
