import {
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_PROFILE,
  FETCH_MEMBER,
  HITUNG,
  // PROFILE,
} from '../constants/Types';

/*
A bit intro about dispatch:
Action di Redux hanya menerima data berupa object literal dan action tidak dapat men-dispatch action lainnya.
Dengan menggunakan thunk, yg tadinya kita hanya me-return sebuah action object, kita bisa me-return sebuah fungsi (dispatch).
Dengan bantuan redux-thunk (dispatch) ini kita bisa men-dispatch (memberi kabar) kepada banyak action sekaligus
*/

export function hitung(data) {
  return {
    type: HITUNG,
    payload: {
      angka: data.angka,
    }
  };
}

export function updateProfile(data) {
  return {
    type: UPDATE_PROFILE,
    payload: {
      name: data.name,
      email: data.email,
    }
  };
}

export function login(data) {
  // localStorage.setItem('user', JSON.stringify({...data, token: 12345}));

  return {
    type: LOGIN,
    payload: {
      name: data.name,
      email: data.email,
      token: 12345,
    }
  };
};

export function logout() {
  // localStorage.removeItem('user');

  return {
    type: LOGOUT,
  };
};

export function register(data) {
  return {
    type: REGISTER,
    payload: {
      name: data.name,
      email: data.email,
    }
  };
};

export function fetchData() {
  return (dispatch) => {
    fetch('https://randomuser.me/api/?results=5', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(result => result.json())
    .then(data => {
      dispatch({
        type: FETCH_MEMBER,
        payload: data.results,
      });
    })
    .catch(error => {
      console.log(error);
    });
  };
};

/*
Fetch examples:
1. GET
fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
2. POST
fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(object)
})
3. PUT
fetch(url, {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(object),
})
4. DELETE
fetch(url, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(object),
})
*/