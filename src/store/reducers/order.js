const initialState = {
  dialogOpened: false,
  phones: [],
  currentPhone: -1
}


const order = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG_ORDER':
      return {
        ...state,
        dialogOpened: true,
        currentPhone: action.id
      }
    case 'CLOSE_DIALOG_ORDER':
      return {
        ...state,
        dialogOpened: false,
      }
    case 'ADD_PHONE_ORDER':
      let newOrder = state.phones.find(phone => phone.id === action.id)
      if (newOrder) {
        newOrder.count += action.count
        newOrder.count =  newOrder.count <= 20? newOrder.count: 20
      }
      else {
        newOrder = {id: action.id, count: action.count <= 20? action.count: 20, selected: true}
      }
      return {
        ...state,
        phones: [
          ...state.phones.filter(phone => phone.id !== action.id),
          newOrder
        ]
      }
    case 'REMOVE_PHONE_ORDER':
      return {
        ...state,
        phones: [
          ...state.phones.filter(phone => phone.id !== action.id)
        ]
      }
    case 'SET_ORDER_PHONE_COUNT':
      return {
        ...state,
        phones: state.phones.map(phone => phone.id === action.id ? {
          ...phone,
          count: action.count >= 20? 20: action.count
        } : phone)
      }
    case 'TOGGLE_CHECKED_PHONE':
      return {
        ...state,
        phones: state.phones.map(phone => ({
          ...phone,
          selected: phone.id === action.id ? !phone.selected : phone.selected
        }))
      }
    case 'CHECK_ALL_PHONES':
      return {
        ...state,
        phones: state.phones.map(phone => ({
          ...phone,
          selected: true
        }))
      }
    case 'SET_ORDER':
      return {
        ...state,
        phones: action.orderPhones
      }
    default:
      return state
  }
}

export default order