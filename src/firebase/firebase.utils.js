import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Configuration for Firebase
const config = {
  apiKey: 'AIzaSyCRlBp8pxXFpzaLucUqYPgDXpRgmz_TAL8',
  authDomain: 'beauty-salon-8a9d4.firebaseapp.com',
  databaseURL: 'https://beauty-salon-8a9d4.firebaseio.com',
  projectId: 'beauty-salon-8a9d4',
  storageBucket: 'beauty-salon-8a9d4.appspot.com',
  messagingSenderId: '25668693204',
  appId: '1:25668693204:web:7788b4489b66b225d95f41',
  measurementId: 'G-M6PNVXY7J6',
};

// Adding a user into our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // Check if the data of the user exist in our database. If there isn't create a new user using the userAuth object
  if (!snapShot.exists) {
    // retrieve user information from the firebase snapshot
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // If there is no document for the user we will create a new object (document)
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  // return the user reference in case we use it for something else in our app
  return userRef;
};

// Adding image into store
export const imageUpload = async (image) => {
  const storageRef = storage.ref(`images/${image.name}`).put(image);

  // try {
  //   await storageRef.on(
  //     'state_changed',
  //     snapshot => {},
  //     error => {
  //       console.error(error);
  //     },
  //     () => {
  //       storage
  //         .ref('images')
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then(url => {
  //           return url;
  //         });
  //     }
  //   );
  // } catch (error) {
  //   console.error(error);
  // }
  console.log(storageRef);
  return storageRef;
};

// Adding product into the database
export const createProductDocument = async props => {
  console.log(props)
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// Initialize Google authentication provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
