export default (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_COLLECTION':
      return {
        ...state,
        productsCollection: action.payload,
      };
      case 'GET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        }
    default:
      return state;
  }
};
