// @flow

import axios from 'axios';
import { removePhoneOrder } from './order';

export const setPhones = phones => ({
  type: 'SET_PHONES',
  phones,
});

export const setOrder = orderPhones => ({
  type: 'SET_ORDER',
  orderPhones,
});

export const setWishList = wishList => ({
  type: 'SET_WISH_LIST',
  wishList,
});

export const fetchPhones = () => dispatch =>
  axios
    .get('/api/phones.json')
    .then(response => response.data, error => console.error(error))
    .then((json) => {
      dispatch(setPhones(json.phones));
      const orderPhones = localStorage.getItem('info')
        ? JSON.parse(localStorage.getItem('info')).order
        : [];
      dispatch(setOrder(orderPhones));
      const wishListPhones = localStorage.getItem('info')
        ? JSON.parse(localStorage.getItem('info')).wishList
        : [];
      dispatch(setWishList(wishListPhones));
    });

export const submitOrder = submitData => dispatch =>
  // написал бы post
  axios
    .get('/api/order.json', submitData)
    .then(response => response.data, error => console.error(error))
    .then(() => {
      submitData.phones.forEach(phone => dispatch(removePhoneOrder(phone)));
    });

export const setInfoToStorage = () => (dispatch, getState) => {
  localStorage.setItem(
    'info',
    JSON.stringify({
      order: getState().order.phones,
      wishList: getState().wishList,
    }),
  );
};
