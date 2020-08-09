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
    const purchasedProducts = [];
    const totalPoints = 0;

    // If there is no document for the user we will create a new object (document)
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        purchasedProducts,
        totalPoints,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  // return the user reference in case we use it for something else in our app
  return userRef;
};

export const sendResetPasswordEmail = email => {
  let auth = firebase.auth();

  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      // Email sent.
      console.log('email Sent');
    })
    .catch(function (error) {
      // An error happened.
      console.log(error);
      
    });
};

export const createUserPurchasedProduct = async (
  currentUser,
  product,
  totalAmount
) => {
  if (!currentUser) return;

  const userRef = firestore.doc(`users/${currentUser.id}`);
  const snapShot = await userRef.get();
  try {
    const createdAt = new Date();
    const delivered = false;
    let lastId = snapShot.data().purchasedProducts.length;
    let lastTotalPoints = snapShot.data().totalPoints;
    let id = lastId++;
    let points = Math.round(totalAmount * 0.1);
    let newTotalPoints = lastTotalPoints + points;
    const data = {
      createdAt,
      id,
      delivered,
      totalAmount,
      points,
      ...product,
    };
    userRef.update({
      purchasedProducts: firebase.firestore.FieldValue.arrayUnion(data),
      totalPoints: newTotalPoints,
    });
  } catch (error) {
    console.error('Error creating Purchased Product Document', error.message);
  }
};

export const getProductsDocuments = async docRef => {
  const productsRef = firestore.collection('products').doc(docRef);
  const productsDoc = await productsRef.get();
  // console.log('Document data:', productsDoc.data());
  return productsDoc;
};

export const getAllProductsDocuments = async () => {
  let data = [];
  await firestore
    .collection('products')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // data.push(doc.data())
        console.log(doc.data());
        data = convertCollectionsSnapshotToMap(querySnapshot);
        // console.log(productsMap);
        // return productsMap;
      });
    });
  console.log(data);
  return data;
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { items } = doc.data();

    return {
      routeName: encodeURI(doc.id.toLowerCase()),
      id: doc.id,
      items,
    };
  });
  // console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection] = collection;
    return accumulator;
  }, {});
};

// Adding product into the database
export const createProductDocument = async props => {
  const categoryRef = firestore.collection('products').doc(props.category);
  const snapShot = await categoryRef.get();

  try {
    const createdAt = new Date();
    if (!snapShot.exists) {
      await categoryRef.set({
        items: [{ id: 0, createdAt, ...props }],
      });
    } else {
      let id = 0;
      const productsDoc = await getProductsDocuments(props.category);
      const lastId = productsDoc.data().items[
        productsDoc.data().items.length - 1
      ].id;
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

export const getPlasticForChangeCollection = async () => {
  let data = [];
  await firestore
    .collection('plastic-for-change-text')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
    });
  return data;
};

export const getHomepageCollection = async () => {
  let data = [];
  await firestore
    .collection('homepage')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
    });
  return data;
};

export const getHomepagePartOfTheStoryDocument = async () => {

  const docRef = firestore.collection('homepage').doc('5Vve2OrIVFcKaLWaPMvK');
  const doc = await docRef.get();
  // console.log('Document data:', doc.data());
  return doc.data();
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
