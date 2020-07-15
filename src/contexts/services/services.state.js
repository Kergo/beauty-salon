import React, { useReducer } from 'react';
import ServicesContext from './services.context';
import servicesReducer from './services.reducer';
import { firestore } from '../../firebase/firebase.utils';

const ServicesState = props => {
  const initialState = {
    services: [],
  };

  const [state, dispatch] = useReducer(servicesReducer, initialState);

  // Get Products
  const getServices = async () => {
    const data = [];
    try {
      await firestore
        .collection('services')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            data.push({ id: data.length, title: doc.id, ...doc.data() });
          });
        })
        .then(() => {
          dispatch({
            type: 'GET_SERVICES',
            payload: data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ServicesContext.Provider value={{ services: state.services, getServices }}>
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesState;
