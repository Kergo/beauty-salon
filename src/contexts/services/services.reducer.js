export default (state, action) => {
  switch (action.type) {
    case 'GET_SERVICES':
      return {
        ...state,
        services: action.payload,
      };
    case 'GET_SERVICE':
      return {
        ...state,
        service: action.payload,
      };
    default:
      return state;
  }
};