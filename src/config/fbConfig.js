import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCxfjxAONrPqNCGzcerN4yll4BnVnMAk3I",
  authDomain: "mario-plan-8115d.firebaseapp.com",
  databaseURL: "https://mario-plan-8115d.firebaseio.com",
  projectId: "mario-plan-8115d",
  storageBucket: "mario-plan-8115d.appspot.com",
  messagingSenderId: "858079658042"
  //   appId: "1:858079658042:web:992da20f7fae5ed706b503",
  //   measurementId: "G-VKYN9X9D5D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
