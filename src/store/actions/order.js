import { setInfoToStorage, wishListRemovePhone } from './index';

export const openDialogOrder = phone => ({
  type: 'OPEN_DIALOG_ORDER',
  id: phone.id,
});

export const closeDialogOrder = () => ({
  type: 'CLOSE_DIALOG_ORDER',
});

// почти все action'ы реализовал через thunk чтобы избежать
// повторения кода в компонентах контейнерах
export const addPhoneOrder = ({ phone, count }) => (dispatch) => {
  dispatch({
    type: 'ADD_PHONE_ORDER',
    id: phone.id,
    count,
  });

  dispatch(wishListRemovePhone(phone));
  dispatch(setInfoToStorage());
};

export const setOrderPhoneCount = ({ phone, count }) => (dispatch) => {
  dispatch({
    type: 'SET_ORDER_PHONE_COUNT',
    id: phone.id,
    count,
  });
  dispatch(setInfoToStorage());
};

export const removePhoneOrder = phone => (dispatch) => {
  dispatch({
    type: 'REMOVE_PHONE_ORDER',
    id: phone.id,
  });
  dispatch(setInfoToStorage());
};

export const toggleCheckedPhone = phone => ({
  type: 'TOGGLE_CHECKED_PHONE',
  id: phone.id,
});

export const checkAllPhones = () => ({
  type: 'CHECK_ALL_PHONES',
});
