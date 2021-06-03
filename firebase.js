import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPIl5UucdH8eG1AbNbtSS74YVO_sibgTw",
  authDomain: "amazn-79a9c.firebaseapp.com",
  projectId: "amazn-79a9c",
  storageBucket: "amazn-79a9c.appspot.com",
  messagingSenderId: "682382676829",
  appId: "1:682382676829:web:61578f0d0996f87d38ceb4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
