import firebase from 'firebase';

const config = 
{
    apiKey: "AIzaSyB2t8aMWPcQFGCKCy-TzAW_WsA-vm37VrQ",
    authDomain: "cleaninghub-23a2c.firebaseapp.com",
    databaseURL: "https://cleaninghub-23a2c-default-rtdb.firebaseio.com",
    projectId: "cleaninghub-23a2c",
    storageBucket: "cleaninghub-23a2c.appspot.com",
    messagingSenderId: "967816808845",
    appId: "1:967816808845:web:2fba9803b8bbafff38d5c4",
    measurementId: "G-MMCZ5W595Q"
};

firebase.initializeApp(config);

export default firebase;