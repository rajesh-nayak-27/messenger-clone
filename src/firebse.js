import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_52jBuTuAs2PTKbZXLBm1oPZE9sKr8V0",
    authDomain: "fir-663da.firebaseapp.com",
    projectId: "fir-663da",
    storageBucket: "fir-663da.appspot.com",
    messagingSenderId: "785340178018",
    appId: "1:785340178018:web:83d4a0bf93aa2db0147b3b",
    measurementId: "G-JP819HL0TQ"
}

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();





