import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

//reducer
import notifyReducer from './reducers/notifyReducer'
import settingsReducer from './reducers/settingsReducer'

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
    settings: settingsReducer
})

if (localStorage.getItem('settings') == null) { 
    const defaultSettings = {
        disableBalanceOnAdd: true,
        disableBalanceOnEdit: false,
        allowRegistration: false
    }

    localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

//create intial state
const intialState = {settings: JSON.parse(localStorage.getItem('settings'))};

//create store
const store = createStoreWithFirebase(rootReducer, intialState, composeWithDevTools(
reactReduxFirebase(firebase)
))

export default store;