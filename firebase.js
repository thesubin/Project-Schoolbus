import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD2gA_Ff_qCBITSIJXSVKBz_4qFGAceDks",
    authDomain: "schoolbustracker-cb35a.firebaseapp.com",
    databaseURL: "https://schoolbustracker-cb35a.firebaseio.com",
    projectId: "schoolbustracker-cb35a",
    storageBucket: "schoolbustracker-cb35a.appspot.com",
    messagingSenderId: "84350425993",
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();