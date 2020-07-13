import React, { useReducer } from 'react';
import ProductsContext from './products.context';
import productsReducer from './products.reducer';
import { firestore } from '../../firebase/firebase.utils';

const ProductsState = props => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  // Get Products
  const getProducts = async () => {
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
            type: 'GET_PRODUCTS',
            payload: data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider value={{ products: state.products, getProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
