import { connect } from 'react-redux';
import DialogOrder from '../components/Catalog/DialogOrder';
import { closeDialogOrder, addPhoneOrder } from '../store/actions/index';

const mapStateToProps = state => ({
  isOpened: state.order.dialogOpened,
  phone: state.phones.find(phone => phone.id === state.order.currentPhone),
});
const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(closeDialogOrder());
  },
  addPhone: ({ phone, count }) => {
    // визуальную валидация неохото делать, пусть попап просто не закрывается
    if (count !== 0) {
      dispatch(addPhoneOrder({ phone, count }));
      dispatch(closeDialogOrder());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogOrder);
