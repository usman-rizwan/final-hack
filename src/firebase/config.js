import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQ4kGo7ysAnwrwptf7b3-NpZYWQm6jqSw",
    authDomain: "epxo-react.firebaseapp.com",
    databaseURL: "https://epxo-react-default-rtdb.firebaseio.com",
    projectId: "epxo-react",
    storageBucket: "epxo-react.appspot.com",
    messagingSenderId: "905137103932",
    appId: "1:905137103932:web:1fb5e322c70645e7fa4f39"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
