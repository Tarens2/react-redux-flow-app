import {connect} from 'react-redux'
import OrderForm from '../components/Order/OrderForm'
import {submitOrder} from '../store/actions/common'

const mapStateToProps = state => ({
  phonesSelected: state.order.phones.filter(phone => phone.selected)
})
const mapDispatchToProps = dispatch => {
  return {
    submitOrder: submitData => {
      dispatch(submitOrder(submitData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)