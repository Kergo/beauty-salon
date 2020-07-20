import React, { useReducer } from 'react';
import ProductsContext from './products.context';
import productsReducer from './products.reducer';
import { firestore } from '../../firebase/firebase.utils';

const ProductsState = props => {
  const initialState = {
    productsCollection: [],
    products: { items: [] },
    product: {name: '', usage: '', description: '', price: '', size: '', productStorage: '', ingredients: ''}
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  // Get Products Collection
  const getProductsCollection = async () => {
    const data = [];
    try {
      await firestore
        .collection('products')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            data.push({ id: data.length, title: doc.id, ...doc.data() });
          });
        })
        .then(() => {
          dispatch({
            type: 'GET_PRODUCTS_COLLECTION',
            payload: data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async docRef => {
    let data = undefined;
    try {
      await firestore
        .collection('products')
        .doc(docRef)
        .get()
        .then(querySnapshot => (data = querySnapshot.data()))
        .then(() => {
          dispatch({
            type: 'GET_PRODUCTS',
            payload: data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (docRef, productId) => {
    let data = undefined;
    try {
      await firestore
        .collection('products')
        .doc(docRef)
        .get()
        .then(
          querySnapshot =>
            (data = querySnapshot
              .data()
              .items.filter(item => item.name === productId))
        )
        .then(() => {
          dispatch({
            type: 'GET_PRODUCT',
            payload: data[0],
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        productsCollection: state.productsCollection,
        products: state.products,
        product: state.product,
        getProduct,
        getProducts,
        getProductsCollection,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
