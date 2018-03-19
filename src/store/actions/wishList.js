import {removePhoneOrder, setInfoToStorage} from './index';


export const addWishListPhone = phone => dispatch => {
  dispatch({
    type: 'WISH_LIST_ADD_PHONE',
    id: phone.id,
    time: Date.now()
  })
  dispatch(removePhoneOrder(phone))
  dispatch(setInfoToStorage())
}

export const wishListRemovePhone = phone => ({
  type: 'WISH_LIST_REMOVE_PHONE',
  id: phone.id
})