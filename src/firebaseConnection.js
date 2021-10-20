import firebase, { initializeApp } from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyAFBavoApG2A8-V8NvObiU88gXDZKhEBno",
	authDomain: "applojavirtual-52e2b.firebaseapp.com",
	projectId: "applojavirtual-52e2b",
	storageBucket: "applojavirtual-52e2b.appspot.com",
	messagingSenderId: "154359312673",
	appId: "1:154359312673:web:f51c8b929b4cf4a9690e60",
};

firebase.initializeApp(firebaseConfig);

export default firebase;


