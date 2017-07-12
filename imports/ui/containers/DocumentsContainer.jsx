import { createContainer } from 'meteor/react-meteor-data';

import { Documents } from '../../api/documents.js';
import { Annotations } from '../../api/annotations.js';

import DocumentsPage from '../../pages/documents.jsx';

export default DocumentsContainer = createContainer(() => {
  return {
		documents: Documents,
    annotations: Annotations.find({}).fetch(),
  };
}, DocumentsPage);
