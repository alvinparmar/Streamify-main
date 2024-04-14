import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCV2Eeg_jUZlvtPM6zgD2AOQQD4djkt8YY",
	authDomain: "streamify-59ae1.firebaseapp.com",
	projectId: "streamify-59ae1",
	storageBucket: "streamify-59ae1.appspot.com",
	messagingSenderId: "861178923436",
	appId: "1:861178923436:web:f8a70d3cca5c0de3621209",
	measurementId: "G-2CN46FBJED",
};

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
export default storage;
