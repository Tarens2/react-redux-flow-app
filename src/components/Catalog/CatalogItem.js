import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography
} from 'material-ui'
import FavoriteBorder from 'material-ui-icons/FavoriteBorder'
import Favorite from 'material-ui-icons/Favorite'
import CardImage from './CardImage'

const CatalogItem = ({phone, onClickToWishList, isInWishList = false, countInOder, openOrderDialog}) => (
  <Grid item xs={12} sm={6} md={4} key={phone.id}>
    <Card>
      <CardContent>
        <CardImage style={{height: 300}} src={phone.image} alt={phone.name}/>
        <Typography variant="headline" component="h3" style={{marginTop: 20}}>
          {phone.name}
        </Typography>
        <Typography component="p">
          {phone.price} руб.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onClickToWishList.bind(null, phone)}>
          {isInWishList ? (<Favorite/>) : (<FavoriteBorder/>)}
        </IconButton>
        <Button variant="raised" color="primary" onClick={openOrderDialog.bind(null, phone)}> В корзину</Button>
      </CardActions>
    </Card>
  </Grid>
)

export default CatalogItem