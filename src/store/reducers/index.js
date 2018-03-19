import { combineReducers } from 'redux'
import wishList from './wishList'
import phones from './phones'
import order from './order'

const phoneStoreApp = combineReducers({
  wishList,
  phones,
  order
})

export default phoneStoreApp