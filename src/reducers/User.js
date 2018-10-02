import {
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_PROFILE,
  FETCH_MEMBER,
  HITUNG,
  PROFILE,
} from '../constants/Types';

const initialState = {
  members: [],
  user: {},
  angka: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBER:
      return {
        ...state,
        members: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user: action.payload,
      };

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