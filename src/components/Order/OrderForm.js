import React from 'react'
import {
  Button, Card,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Paper
} from "material-ui";
import TextMaskCustom from './TextMaskCustom'

let classFormGroup = {
  marginBottom: 20,
  display: 'flex'
}

let stylesForm = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}

let stylesFormCol = {
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(50% - 20px)'
}

let validateEmail = email => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class OrderForm extends React.Component {
  state = {
    name: {value: ''},
    tel: {value: ''},
    email: {value: ''},
    address: {value: ''},
    comment: {value: ''}
  }


  handleChange = name => event => {
    this.setState({
      [name]: {
        value: event.target.value,
        error: !this.validate(name, event.target.value)
      }
    });
  }


  validate = (name, value) => {
    switch (name) {
      case 'name':
        return value.length > 0;
      case 'tel':
        return !!value.match(/^\+7\(([0-9]{3})\)-([0-9]{3})-([0-9]{4})$/)
      case 'email':
        return value.length > 0 && validateEmail(value)
      case 'address':
        return value.length > 0
      default:
        return true
    }
  }


  isAllValid = () => {
    let flag = true;
    for (let name in this.state) {
      let valid = this.validate(name, this.state[name].value)
      this.setState({
        [name]: {
          value: this.state[name].value,
          error: !valid
        }
      });
      flag = valid && flag
    }
    return flag;
  }

  isPhonesSelected = () => {
    return this.props.phonesSelected.length > 0
  }

  submitHandler = () => {
    if (this.isAllValid() && this.isPhonesSelected()) {
      let phones = this.props.phonesSelected.map(phone => ({
        id: phone.id,
        count: phone.count
      }))
      let userData = {}
      Object.keys(this.state).forEach(key => {
        userData[key] = this.state[key].value
      });

      this.setState({jsonSubmit: JSON.stringify({
        userData,
        phones
      })})

      this.props.submitOrder({
        userData,
        phones
      })
    }
  }

  renderForm = () => (
    <Paper style={{padding: 40, marginTop: 40}}>
      <form method="POST" action="/api/order"
            style={stylesForm}>
        <div style={stylesFormCol}>
          <FormControl error={this.state.name.error}
                       style={classFormGroup}
                       aria-describedby="name-error-text">
            <InputLabel htmlFor="name">ФИО</InputLabel>
            <Input id="name"
                   value={this.state.name.value}
                   onChange={this.handleChange('name')}/>
            <FormHelperText id="name-error-text">Введите ФИО</FormHelperText>
          </FormControl>
          <FormControl error={this.state.email.error}
                       style={classFormGroup}
                       aria-describedby="email-error-text">
            <InputLabel htmlFor="email">E-Mail</InputLabel>
            <Input id="email" value={this.state.email.value}
                   type="email"
                   onChange={this.handleChange('email')}/>
            <FormHelperText id="email-error-text">
              Введите E-Mail
            </FormHelperText>
          </FormControl>
          <FormControl error={this.state.tel.error}
                       style={classFormGroup}
                       aria-describedby="tel-error-text">
            <InputLabel htmlFor="tel">Телефон</InputLabel>
            <Input id="tel"
                   value={this.state.tel.value}
                   inputComponent={TextMaskCustom}
                   onChange={this.handleChange('tel')}/>
            <FormHelperText id="tel-error-text">
              Введите Телефон
            </FormHelperText>
          </FormControl>
        </div>
        <div style={stylesFormCol}>
          <FormControl error={this.state.address.error}
                       style={classFormGroup}
                       aria-describedby="address-error-text">
            <InputLabel htmlFor="address">Адрес доставки</InputLabel>
            <Input id="address"
                   value={this.state.address.value}
                   onChange={this.handleChange('address')}/>
            <FormHelperText id="address-error-text">
              Введите адрес доставки
            </FormHelperText>
          </FormControl>
          <FormControl
            style={{...classFormGroup, marginTop: 12}}
            aria-describedby="comment-error-text">
            <InputLabel htmlFor="comment">Комментарий</InputLabel>
            <Input id="comment"
                   value={this.state.comment.value}
                   multiline
                   rows={5}
                   onChange={this.handleChange('comment')}/>
            <FormHelperText id="comment-error-text">
              Введите Комментарий
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <Button variant="raised" onClick={this.submitHandler}
                  color="primary">Оформить заказ</Button>
        </div>
      </form>
    </Paper>
  )

  render() {
    return (
      <div>
        <div>{!!this.props.phonesSelected.length && (this.renderForm())}</div>
        <Card>
          <pre style={{whiteSpace: 'pre-wrap'}}>{this.state.jsonSubmit}</pre>
        </Card>
      </div>
    )
  }
}

export default OrderForm