import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { getContactsFromCookie } from '../../../lib/contactsManager';
import history from 'cf-react-router-history';
import initializeStore from '../../../flux/store';
import routes from '../../../config/routes';
import * as actionCreators from '../../../flux/actionCreators/actionCreators';
import '../../../styles/grid.less';
import '../../../styles/responsiveUtilities.less';

injectTapEventPlugin({
  ignoreMouseThreshold: 1000
});

const store = initializeStore();

store.dispatch(actionCreators.setInitialState({
  contacts: getContactsFromCookie()
}));

render(
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>
, document.getElementById('pc-contacts-keeper'));
