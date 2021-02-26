import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAwYK0YDI9dnUeDsPjvsSkwJIjtzra0Gag",
    authDomain: "restaurants2-9816a.firebaseapp.com",
    projectId: "restaurants2-9816a",
    storageBucket: "restaurants2-9816a.appspot.com",
    messagingSenderId: "50785386558",
    appId: "1:50785386558:web:ca66d03884044bf8ca516f"
  }
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig)