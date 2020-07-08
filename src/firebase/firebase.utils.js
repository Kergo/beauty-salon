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

export const getProductsDocuments = async docRef => {
  const productsRef = firestore.collection('products').doc(docRef);
  const productsDoc = await productsRef.get();
  console.log('Document data:', productsDoc.data());
  return productsDoc;
};

// Adding product into the database
export const createProductDocument = async props => {
  const categoryRef = firestore.collection('products').doc(props.category);
  const snapShot = await categoryRef.get();

  try {
    const createdAt = new Date();
    if (!snapShot.exists) {
      await categoryRef.set(
        {
          items: [{ id: 0, createdAt, ...props }],
        }
      );
    } else {
      let id = 0;
      const productsDoc = await getProductsDocuments(props.category);
      const lastId = productsDoc.data().items[productsDoc.data().items.length - 1]
        .id;
      id = lastId + 1;
      const data = {
        createdAt,
        id,
        ...props,
      };
      categoryRef.update({
        items: firebase.firestore.FieldValue.arrayUnion(data),
      });
    }
  } catch (error) {
    console.error('Error creating product', error.message);
    
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// Initialize Google authentication provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
