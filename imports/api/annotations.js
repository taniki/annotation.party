//import { Mongo } from 'meteor/mongo';

let Annotations = [];

let endpoint = "https://taniki.github.io/netrights/data/annotations.json";

// let request = new XMLHttpRequest();

// request.open('GET', endpoint, false);  // `false` makes the request synchronous
// request.send(null);

//if (request.status === 200) {
//  Annotations = JSON.parse(request.responseText);
//}

// console.log(Annotations);

export default Annotations; // new Mongo.Collection('annotations');
