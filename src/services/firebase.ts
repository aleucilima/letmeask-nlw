import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDSbdZEsZE1jIMiYIY1qb_GFvTOel9JJ3w",
  authDomain: "letmeask-af49d.firebaseapp.com",
  databaseURL: "https://letmeask-af49d-default-rtdb.firebaseio.com",
  projectId: "letmeask-af49d",
  storageBucket: "letmeask-af49d.appspot.com",
  messagingSenderId: "469745025393",
  appId: "1:469745025393:web:84a9abf4422104fa0af6d0"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()