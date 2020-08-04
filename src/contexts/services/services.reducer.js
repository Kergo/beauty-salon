export default (state, action) => {
  switch (action.type) {
    case 'GET_SERVICES':
      return {
        ...state,
        services: action.payload,
        loading: false
      };
    case 'GET_SERVICE':
      return {
        ...state,
        service: action.payload,
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
