import firebase from 'firebase'

console.log(process.env.DATABASE_URL)

const firebaseConfig = {
  apiKey: "AIzaSyDQ3z8IDdzAYY2ig397u6f92UmeaZ7Ct5w",
  authDomain: "survey-5830d.firebaseapp.com",
  databaseURL: "https://survey-5830d.firebaseio.com",
  projectId: "survey-5830d",
  storageBucket: "survey-5830d.appspot.com",
  messagingSenderId: "93085809953",
  appId: "1:93085809953:web:2d0f7590368426023bd260"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
