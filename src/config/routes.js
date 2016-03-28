import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { WrapperContainer } from '../components/core/wrapper/wrapper';
import { HomeContainer } from '../components/pages/home/home';

export default (
  <Route path='/' component={ WrapperContainer }>
    <IndexRoute component={ HomeContainer }/>
    <Route path='/home' component={ HomeContainer }/>
  </Route>
);
