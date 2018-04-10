import React from 'react';
import { Typography } from 'material-ui';
import CatalogContainer from '../containers/CatalogContainer';

export default () => (
  <div>
    <Typography variant="headline" gutterBottom>
      Каталог
    </Typography>
    <CatalogContainer />
  </div>
);
