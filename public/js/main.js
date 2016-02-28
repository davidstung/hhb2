var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://hhb.firebaseio.com/");

myFirebaseRef.set({
  title: "Hello World!2",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});

