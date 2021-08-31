import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAwNgafpQC6SB-PNk9y_sI0fFvw-C611Ik",
  authDomain: "complaint-base.firebaseapp.com",
  projectId: "complaint-base",
  storageBucket: "complaint-base.appspot.com",
  messagingSenderId: "6000697279",
  appId: "1:6000697279:web:2555bc0db58c78c8500b0a",
  measurementId: "G-FZ2M20HT86"
};

firebase.initializeApp(firebaseConfig);

export default firebase;