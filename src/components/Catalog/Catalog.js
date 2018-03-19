import React from 'react';
import {Grid} from 'material-ui'
import CatalogItem from './CatalogItem'

const Catalog = ({phones = [], onClickToWishList, wishList, openOrderDialog}) => (
  <Grid container>
    {phones.map(phone => (
      <CatalogItem phone={phone}
                   onClickToWishList={onClickToWishList}
                   key={phone.id}
                   isInWishList={!!wishList.find(wish => wish.id === phone.id)}
                   openOrderDialog={openOrderDialog}  />
    ))}
    {!phones.length && wishList? <Grid item xs={12}>Список желаемых товаров пуст</Grid>: ''}
  </Grid>)

export default Catalog