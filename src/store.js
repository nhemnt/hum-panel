import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

//reducer
import notifyReducer from './reducers/notifyReducer'

const firebaseConfig = {
    apiKey: "AIzaSyAWr8QG2wFK-M2PpyYRdCi-TFqzg9AhdNM",
    authDomain: "clientpanel-e38c7.firebaseapp.com",
    databaseURL: "https://clientpanel-e38c7.firebaseio.com",
    projectId: "clientpanel-e38c7",
    storageBucket: "clientpanel-e38c7.appspot.com",
    messagingSenderId: "389506620313"
}

//react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true //firestore for profile instead of realtime db
}

//init firebase instance
firebase.initializeApp(firebaseConfig);

//init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);

//add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)  
)(createStore)

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer,
})

//create intial state
const intialState = {};

//create store
const store = createStoreWithFirebase(rootReducer, intialState, compose(
reactReduxFirebase(firebase),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
))

export default store;