import firebase from 'firebase'

var firebaseConfig = {
    // you project credentials from firebase
};
// Initialize Firebase
const app =   firebase.initializeApp(firebaseConfig);
export default app.firestore();