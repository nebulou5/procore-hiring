import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { Home } from './home';
import initializeStore from '../../../flux/store';
import {
  isDOMComponent,
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

function getComponent() {
  return (
    <Home 
      filter=""
      filteredContacts={[]} 
      contacts={[]}
      modal={{isOpen: false}}
      form={{}}/> 
  );
}

describe('Home', () => {

  it('renders with the correct class', () => {
    const component = renderIntoDocument(getComponent());
    const rootElement = findRenderedDOMComponentWithClass(component, 'homeComponent');
    expect(isDOMComponent(rootElement)).to.equal(true);
  });

});
