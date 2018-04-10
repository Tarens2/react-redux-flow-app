import React from 'react';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import ShoppingBasket from 'material-ui-icons/ShoppingCart';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from 'material-ui';

import HeaderViewer from './HeaderViewer';
import DateFormater from './DateFormater';

class Header extends React.Component {
  state = {
    anchorEl: null,
    currentImage: '',
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  openImage = image => () => {
    this.setState({ currentImage: image });
    this.refs.HeaderViewer.openImage();
    this.handleClose();
  };

  generateMenuItems = wishList =>
    wishList.map(phone => (
      <MenuItem style={{ height: 'auto' }} key={phone.id} onClick={this.openImage(phone.image)}>
        <ListItemIcon>
          <div
            style={{
              width: 60,
              height: 60,
              background: `url("${phone.image}") no-repeat center/auto 100%`,
            }}
          />
        </ListItemIcon>
        <DateFormater time={phone.time} name={phone.name} />
      </MenuItem>
    ));

  render() {
    const {
      wishListCount = 0, orderCount, orderPrice, wishList = [],
    } = this.props;
    const { anchorEl } = this.state;

    return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Главная
          </Button>
          <div style={{ flex: 1 }} />
          <IconButton
            color="inherit"
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            style={{ marginRight: 20 }}
          >
            <Badge badgeContent={wishListCount} color="secondary">
              <FavoriteBorder />
            </Badge>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            style={{
              width: '100%',
              maxWidth: 360,
            }}
          >
            {this.generateMenuItems(wishList)}
            {wishList.length ? (
              <MenuItem to="/wish-list" component={Link} onClick={this.handleClose}>
                Показать все
              </MenuItem>
            ) : (
              <MenuItem onClick={this.handleClose}>Список пуст</MenuItem>
            )}
          </Menu>
          <Button variant="raised" color="secondary" component={Link} to="/order">
            <Badge badgeContent={orderCount}>
              <ShoppingBasket />
            </Badge>
            <Typography color="inherit" style={{ marginLeft: 20 }}>
              {orderPrice} руб.
            </Typography>
          </Button>
        </Toolbar>
        <HeaderViewer src={this.state.currentImage} ref="HeaderViewer" />
      </AppBar>
    );
  }
}

export default Header;
