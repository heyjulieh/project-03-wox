import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBz5fXYsShsx3bXaWhzngVR7fcmpbX29Fw",
  authDomain: "project-3-wox.firebaseapp.com",
  databaseURL: "https://project-3-wox.firebaseio.com",
  projectId: "project-3-wox",
  storageBucket: "project-3-wox.appspot.com",
  messagingSenderId: "799049187173"
};
firebase.initializeApp(config);

const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { firebase, auth };
export { firebaseListToArray };
