import React, { useReducer } from 'react';
import ServicesContext from './services.context';
import servicesReducer from './services.reducer';
import { firestore } from '../../firebase/firebase.utils';

const ServicesState = props => {
  const initialState = {
    services: [],
    service: []
  };

  const [state, dispatch] = useReducer(servicesReducer, initialState);

  // Get Services
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

  // Get Service
  const getService = async docType => {
    let data = undefined;
    try {
      firestore
        .collection('services')
        .doc(docType)
        .get()
        .then(querySnapshot => {
          data = Object.entries(querySnapshot.data().type)
        })
        .then(() => {
          dispatch({
            type: 'GET_SERVICE',
            payload: data,
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        services: state.services,
        service: state.service,
        getServices,
        getService,
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesState;
