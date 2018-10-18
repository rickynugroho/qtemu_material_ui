import {
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_PROFILE,
  FETCH_MEMBER,
  HITUNG,
  PROFILE,
} from '../constants/Types';

import { REHYDRATE } from 'redux-persist';

const initialState = {
  members: [],
  user: {},
  angka: 0,
};

export default (state = initialState, action) => {
  console.log('persist', action.payload);
  switch (action.type) {
    case REHYDRATE:
      return action.payload ? (action.payload.user ? action.payload.user : state) : state
      
    case FETCH_MEMBER:
      return {
        ...state,
        members: action.payload,
      };
    case UPDATE_PROFILE:
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        members: [],
        user: {},
      };

    case HITUNG:
      return {
        ...state,
        angka: action.payload.angka,
      };

    case PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};