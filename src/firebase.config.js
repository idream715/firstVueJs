import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCvciW42pQvB5sjq9iLkv5WjFHcrOFT6kw",
  authDomain: "projectdream-vue-book.firebaseapp.com",
  databaseURL: "https://projectdream-vue-book.firebaseio.com",
  projectId: "projectdream-vue-book",
  storageBucket: "projectdream-vue-book.appspot.com",
  messagingSenderId: "795321754072",
  appId: "1:795321754072:web:1f9e6cde791ad9ce9912ad"
}
  
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.auth()