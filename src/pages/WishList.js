import React from 'react'
import Typography from 'material-ui/Typography'
import CatalogContainer from '../containers/CatalogContainer'
export default () => (
  <div>
    <Typography variant="headline" gutterBottom>Избранное</Typography>
    <CatalogContainer wishList={true}/>
  </div>
)