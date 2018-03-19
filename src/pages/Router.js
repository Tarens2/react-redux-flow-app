import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import Main from './Main'
import Order from './Order'
import WishList from './WishList'
import DialogContainer from "../containers/DialogContainer";


export default () => (
  <BrowserRouter>
    <div>
      <HeaderContainer />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/order" component={Order}/>
          <Route path="/wish-list" component={WishList}/>
        </Switch>
      </div>
      <DialogContainer />
    </div>
  </BrowserRouter>
)