// @flow
import { WishListPhone } from '../../flowTypes';

type State = Array<WishListPhone>;
type Action = {
  +type: string,
  +wishList?: Array<WishListPhone>,
  +time?: Date,
  +id?: number,
};

const wishList = (state: State = [], action: Action): State => {
  switch (action.type) {
    case 'SET_WISH_LIST':
      return action.wishList ? action.wishList : [];
    case 'WISH_LIST_ADD_PHONE':
      return !state.find(phone => phone.id === action.id)
        ? [...state, { id: action.id, time: action.time }]
        : state.filter(phone => phone.id !== action.id);
    case 'WISH_LIST_REMOVE_PHONE':
      return state.filter(phone => phone.id !== action.id);
    default:
      return state;
  }
};

export default wishList;
