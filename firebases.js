// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2mCREJPS8P1PdtbplSXEwHoZjKf-YFLU",
    authDomain: "sociocademy-e467b.firebaseapp.com",
    projectId: "sociocademy-e467b",
    storageBucket: "sociocademy-e467b.appspot.com",
    messagingSenderId: "122254276347",
    appId: "1:122254276347:web:097c71f181ed55611ee25e"
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider, storage }
export default db