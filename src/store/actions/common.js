// @flow

import axios from 'axios';
import { removePhoneOrder } from './order';
import { Phone, OrderPhone, WishListPhone } from '../../flowTypes';
import { State } from '../reducers';

type Action =
  | {
      type: 'SET_PHONES',
      phones: Array<Phone>,
    }
  | {
      type: 'SET_ORDER',
      orderPhones: Array<OrderPhone>,
    }
  | {
      type: 'SET_WISH_LIST',
      wishList: Array<WishListPhone>,
    };

type GetState = () => State;
type PromiseAction = Promise<Action>;
// eslint-disable-next-line no-use-before-define
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

export const setPhones = (phones: Array<Phone>): Action => ({
  type: 'SET_PHONES',
  phones,
});

export const setOrder = (orderPhones: Array<OrderPhone>) => ({
  type: 'SET_ORDER',
  orderPhones,
});

export const setWishList = (wishList: Array<WishListPhone>) => ({
  type: 'SET_WISH_LIST',
  wishList,
});

export const fetchPhones = () => (dispatch: Dispatch) =>
  axios
    .get('/api/phones.json')
    .then(response => response.data)
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
    })
    .catch(error => console.error(error));

export const submitOrder = (submitData: Function) => (dispatch: Dispatch) =>
  axios
    .get('/api/order.json', submitData)
    .then(response => response.data)
    .then(() => {
      submitData.phones.forEach(phone => dispatch(removePhoneOrder(phone)));
    })
    .catch(error => console.error(error));

export const setInfoToStorage = () => (dispatch: Dispatch, getState: GetState) => {
  localStorage.setItem(
    'info',
    JSON.stringify({
      order: getState().order.phones,
      wishList: getState().wishList,
    }),
  );
};
