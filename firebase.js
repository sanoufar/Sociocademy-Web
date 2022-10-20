// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1qAGM9xaEUuG5ZRZTTCHp1my0RwjrvhE",
    authDomain: "sociocademy-b8232.firebaseapp.com",
    projectId: "sociocademy-b8232",
    storageBucket: "sociocademy-b8232.appspot.com",
    messagingSenderId: "778609524211",
    appId: "1:778609524211:web:2f3114a30f7b258ab82686"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider, storage }
export default db