import { createContainer } from 'meteor/react-meteor-data';

import { Annotations } from '../../api/annotations.js';

import AnnotationsPage from '../../pages/annotations.jsx';

export default AnnotationsContainer = createContainer(() => {
  return {
    annotations: Annotations.find({}).fetch(),
  };
}, AnnotationsPage);
