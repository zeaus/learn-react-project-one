import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { SHOPDATA } from '../shop.data';

const firebaseConfig = {
  apiKey: "AIzaSyCBEmkNquP09rNeI8Dkcu5d1RUdHs0P0Mk",
  authDomain: "learn-react-project-76aa0.firebaseapp.com",
  databaseURL: "https://learn-react-project-76aa0.firebaseio.com",
  projectId: "learn-react-project-76aa0",
  storageBucket: "learn-react-project-76aa0.appspot.com",
  messagingSenderId: "827880298179",
  appId: "1:827880298179:web:965d464f520136a11d3476",
  measurementId: "G-K62BLVR4K4"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfile = async (userAuth, additionalParameters) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalParameters
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}


export const saveSomeEntry = async () => {
  const entryRef = firestore.collection('shop')

  if (!entryRef.exists) {
    try {
      await entryRef.add({
        SHOPDATA
      })
      console.log('appending')
    } catch (error) {
      console.log('error', error.message);
    }
  }
  return entryRef
}

export const saveShop = async (categoryKey, objectsToAdd) => {
  const categoryRef = firestore.collection(categoryKey)

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = categoryRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}


export const getCategories = (categories) => {
  const transformedCategories = categories.docs.map(doc => {
    const { title, imgUrl, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      imgUrl,
      items
    }
  })

  return transformedCategories.reduce((accumulator, categories) => {
    accumulator[categories.title.toLowerCase()] = categories;
    return accumulator;
  }, {})
}