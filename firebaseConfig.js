// firebaseConfig.js
import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBcPjMOrDwfDuPyyVZsFXpJlq0sF_13LM0",
  authDomain: "graslowsnaildotcom.firebaseapp.com",
  projectId: "graslowsnaildotcom",
  storageBucket: "graslowsnaildotcom.appspot.com",
  messagingSenderId: "959885031833",
  appId: "1:959885031833:web:87ddeb584885b315113b08",
  measurementId: "G-SHQMYWBSHZ"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export { app };

