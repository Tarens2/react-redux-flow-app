import {connect} from 'react-redux'
import {addWishListPhone, openDialogOrder} from '../store/actions/index'
import Catalog from '../components/Catalog/Catalog'

const mapStateToProps = (state, {wishList = false}) => {
  return {
    //если не wishList то показываем все телефоны, иначе фильтруем
    phones: state.phones.filter(phone => !wishList || state.wishList.find(wish => wish.id === phone.id)),
    wishList: state.wishList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClickToWishList: phone => {
      dispatch(addWishListPhone(phone))
    },
    openOrderDialog: phone => {
      dispatch(openDialogOrder(phone))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)