import {
  LOGOUT,
} from '../constants/Types';

const initialState = {
  products: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        products: {},
      };
    default:
      return state;
  }
};