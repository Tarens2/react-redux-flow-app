import {connect} from 'react-redux'
import OrderItems from '../components/Order/OrderItems'
import {
  checkAllPhones,
  removePhoneOrder,
  setOrderPhoneCount,
  toggleCheckedPhone
} from '../store/actions/order'
import {addWishListPhone} from '../store/actions/wishList'

const mapStateToProps = state => ({
  phonesInOrder: state.order.phones.map(orderPhone => ({
    ...orderPhone,
    ...state.phones.find(phone => orderPhone.id === phone.id)
  })),
  selectedPhones: state.order.phones.filter(phone => phone.selected),
  orderPrice: state.order.phones.reduce((orderPrice, orderItem) =>
    orderPrice + orderItem.count * state.phones.find(phone => phone.id === orderItem.id).price, 0)
})
const mapDispatchToProps = dispatch => {
  return {
    addPhoneOrder: ({phone, count}) => {
      dispatch(setOrderPhoneCount({phone, count}))
    },
    removePhoneOrder: (phone) => {
      dispatch(removePhoneOrder(phone))
    },
    addWishListPhone: (phone) => {
      dispatch(addWishListPhone(phone))
    },
    toggleCheckedPhone: (phone) => {
      dispatch(toggleCheckedPhone(phone))
    },
    checkAllPhones: () => {
      dispatch(checkAllPhones())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems)