import {connect} from 'react-redux'
import Header from '../components/Header/Header'
import _ from 'lodash'

const mapStateToProps = state => ({
  wishListCount: state.wishList.length,
  // 5 первых телефонов из wishlist
  wishList: _.orderBy(state.wishList.map(phoneInWishList => ({
    ...phoneInWishList,
    ...state.phones.find(phone => phone.id === phoneInWishList.id)
  })), ['time'], ['desc']).slice(0, 5),
  orderCount: state.order.phones.reduce((orderCount, orderItem) => orderCount + orderItem.count, 0),
  orderPrice: state.order.phones.reduce((orderPrice, orderItem) =>
    orderPrice + orderItem.count * state.phones.find(phone => phone.id === orderItem.id).price, 0),
})
const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)