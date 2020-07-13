import React, { useReducer } from 'react';
import ProductsContext from './products.context';
import productsReducer from './products.reducer';
import data from './data';
import { firestore } from '../../firebase/firebase.utils';

const ProductsState = props => {
  const initialState = {
    products: data,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  // Get Products
  const getProducts = async () => {
    try {
      const data = [];
      const snapShot = await firestore.collection('products').get();
      snapShot
        .forEach(doc => {
          data.push(doc.data());
        })
        .then(() => {
          console.log(data);
          dispatch({
            type: 'GET_PRODUCTS',
            payload: data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  // const getProducts = async () => {
  //   try {
  //     const snapshot = await firestore
  //       .collection('products')
  //       .get()
  //       // .then(querySnapshot => {
  //       //   querySnapshot.forEach(doc => {
  //       //     dispatch({
  //       //       type: 'GET_PRODUCTS',
  //       //       payload: doc.data(),
  //       //     });
  //       //   });
  //       // });
  //       console.log(snapshot)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ProductsContext.Provider value={{ products: state.products, getProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
