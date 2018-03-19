import React from 'react'
import Typography from 'material-ui/Typography'
import OrderContainer from '../containers/OrderContainer'
import OrderFormContainer from '../containers/OrderFormContainer'
export default () => (
    <div>
        <Typography variant="headline" gutterBottom>Корзина</Typography>
        <OrderContainer />
        <OrderFormContainer />
    </div>
)