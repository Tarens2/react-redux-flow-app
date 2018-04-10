import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Slide from 'material-ui/transitions/Slide';
import CardImage from './CardImage';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DialogOrder extends React.Component {
  state = {
    count: 0,
  };

  handleClose = () => {
    this.props.close();
  };

  handleOpen = () => {
    this.setState({
      count: 0,
    });
  };

  handleChange = name => (event) => {
    const replaced = String(+event.target.value.replace(/[\D]/g, ''));
    this.setState({
      [name]: replaced,
    });
  };

  handleSubmit = phone => (event) => {
    event.preventDefault();
    this.props.addPhone({
      phone,
      count: +this.state.count,
    });
  };

  render() {
    const { phone = {}, isOpened } = this.props;
    return (
      <div>
        <Dialog
          open={isOpened}
          transition={Transition}
          keepMounted
          onClose={this.handleClose}
          onEnter={this.handleOpen}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <form onSubmit={this.handleSubmit(phone)}>
            <DialogTitle id="alert-dialog-slide-title">Добавить в корзину</DialogTitle>
            <DialogContent>
              <CardImage src={phone.image} style={{ height: 300, width: 300 }} alt={phone.name} />
              <DialogContentText id="alert-dialog-slide-description">
                {phone.name}
              </DialogContentText>
              <TextField
                id="number"
                label="Количество"
                value={this.state.count}
                onChange={this.handleChange('count')}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Отмена
              </Button>
              <Button variant="raised" color="primary" onClick={this.handleSubmit(phone)}>
                Добавить
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default DialogOrder;
