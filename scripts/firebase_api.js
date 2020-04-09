  // WaterWise firebase config.
var firebaseConfig = {
  apiKey: "AIzaSyAmB6LDMEOSYMeMm-a33BapWAep51GQLns",
  authDomain: "waterwise-bcbef.firebaseapp.com",
  databaseURL: "https://waterwise-bcbef.firebaseio.com",
  projectId: "waterwise-bcbef",
  storageBucket: "waterwise-bcbef.appspot.com",
  messagingSenderId: "435558227844",
  appId: "1:435558227844:web:95825c0d0be7a7d08ec7d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();