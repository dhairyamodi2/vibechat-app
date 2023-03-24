import * as firebase from 'firebase/app';
import '@firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDJXgLU0yc6PX2Dbu4xkslmB1Rdyezvkzg",
    authDomain: "vibechat-143a0.firebaseapp.com",
    projectId: "vibechat-143a0",
    storageBucket: "vibechat-143a0.appspot.com",
    messagingSenderId: "992766739559",
    appId: "1:992766739559:web:b41e7d415c718a1683c0c2",
    measurementId: "G-693HZW2G14"
};

firebase.initializeApp(firebaseConfig);

export {firebase};

