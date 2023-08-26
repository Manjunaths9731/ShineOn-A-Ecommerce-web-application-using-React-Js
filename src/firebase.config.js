import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVR7biG08ykPnWQtFhbs7Stuo1jr-qzMc",
  authDomain: "shineon-400ce.firebaseapp.com",
  databaseURL:"https://shineon-400ce-default-rtdb.firebaseio.com",
  projectId: "shineon-400ce",
  storageBucket: "shineon-400ce.appspot.com",
  messagingSenderId: "201908110476",
  appId: "1:201908110476:web:816ca7397722fe8404e7a9",
};

const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage =  getStorage(app);

export {app,firestore, storage };
