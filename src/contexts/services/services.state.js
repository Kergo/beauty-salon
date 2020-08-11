import React, { useReducer } from 'react';
import ServicesContext from './services.context';
import servicesReducer from './services.reducer';
import { firestore } from '../../firebase/firebase.utils';

const ServicesState = props => {
  const initialState = {
    loading: false,
    services: [],
    service: []
  };

  const [state, dispatch] = useReducer(servicesReducer, initialState);

  // Get Services
  const getServices = async () => {
    setLoading();

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
    setLoading();

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

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <ServicesContext.Provider
      value={{
        loading: state.loading,
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
