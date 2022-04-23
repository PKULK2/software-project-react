// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOKNgTL1ikpXjkIHlCZ5mL8MVkj4YtHRs",
    authDomain: "software-engineering-pro-226a4.firebaseapp.com",
    projectId: "software-engineering-pro-226a4",
    storageBucket: "software-engineering-pro-226a4.appspot.com",
    messagingSenderId: "791807866990",
    appId: "1:791807866990:web:ae071a3f70d62838800e7f",
    measurementId: "G-T39NZWKLGZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;