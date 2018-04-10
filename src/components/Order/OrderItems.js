import React from 'react';
import {
  Checkbox,
  Grid,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import Favorite from 'material-ui-icons/FavoriteBorder';

import CardImage from '../Catalog/CardImage';

class OrderItems extends React.Component {
  onSelectAllClick = () => {
    this.props.checkAllPhones();
  };

  onSelectClick = phone => (event) => {
    this.props.toggleCheckedPhone(phone);
  };

  handleChangeCount = phone => (event) => {
    event.stopPropagation();
    const replaced = event.target.value.replace(/\D/g, '');
    this.props.addPhoneOrder({ phone, count: +replaced });
  };

  removeOrderPhone = phone => (event) => {
    event.stopPropagation();
    this.props.removePhoneOrder(phone);
  };

  addWishListPhone = phone => (event) => {
    event.stopPropagation();
    this.props.addWishListPhone(phone);
  };

  renderList = () => {
    const { phonesInOrder, selectedPhones, orderPrice } = this.props;
    const rowCount = phonesInOrder.length;
    const numSelected = selectedPhones.length;
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ paddingRight: 0 }}>
                      <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={numSelected === rowCount}
                        onChange={this.onSelectAllClick}
                      />
                    </TableCell>
                    <TableCell>Наименование товара и описание</TableCell>
                    <TableCell numeric>Количество</TableCell>
                    <TableCell numeric>Цена</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {phonesInOrder.map(phone => (
                    <TableRow key={phone.id}>
                      <TableCell style={{ paddingRight: 0 }}>
                        <span onClick={this.onSelectClick(phone)}>
                          <Checkbox checked={phone.selected} />
                        </span>
                      </TableCell>
                      <TableCell>
                        <ListItem style={{ padding: 0, marginTop: 10, marginBottom: 10 }}>
                          <ListItemIcon>
                            <CardImage
                              style={{
                                  width: 150,
                                  height: 150,
                                  backgroundSize: 'auto 100%',
                                }}
                              src={phone.image}
                              alt={phone.name}
                            />
                          </ListItemIcon>
                          <ListItemText primary={phone.name} />
                        </ListItem>
                      </TableCell>
                      <TableCell numeric style={{ whiteSpace: 'nowrap' }}>
                        <TextField
                          value={String(phone.count)}
                          style={{ maxWidth: 50 }}
                          type="number"
                          InputLabelProps={{
                              shrink: true,
                            }}
                          onChange={this.handleChangeCount(phone)}
                          margin="normal"
                        />&nbsp;шт.
                      </TableCell>
                      <TableCell numeric>{phone.price}</TableCell>
                      <TableCell>
                        <div style={{ display: 'flex' }}>
                          <IconButton aria-label="Delete">
                            <DeleteIcon onClick={this.removeOrderPhone(phone)} />
                          </IconButton>
                          <IconButton aria-label="Favorite">
                            <Favorite onClick={this.addWishListPhone(phone)} />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell />
                    <TableCell>
                      <h3>Общая стоимость</h3>
                    </TableCell>
                    <TableCell />
                    <TableCell numeric>
                      <h3>{orderPrice}</h3>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };

  render() {
    const { phonesInOrder } = this.props;
    const rowCount = phonesInOrder.length;

    if (rowCount > 0) {
      return this.renderList();
    }
    return <Typography>Список пуст</Typography>;
  }
}

export default OrderItems;
