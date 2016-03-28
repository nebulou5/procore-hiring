import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { ContactsTable } from './contactsTable';
import {
  isDOMComponent,
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

function getComponent(props) {
  props = props || {
    contacts: [{
      firstName: 'Richard',
      lastName: 'Harrington',
      dob: '08/31/1987',
      phone: '555-555-5555',
      email: 'richard@creativeflume.com',
      notes: 'this is one cool cat'
    }, {
      firstName: 'Sonic', 
      lastName: 'Hedgehog',
      dob: '06/23/1991',
      phone: '666-666-6666',
      email: 'sonic@hedgehog.com',
      notes: 'this is one cool hedgehog'
    }]
  };

  return (
    <ContactsTable {...props} />
  );
}

describe('ContactsTable', () => {

  it('renders with the correct class', () => {
    const component = renderIntoDocument(getComponent());
    const rootElement = findRenderedDOMComponentWithClass(component, 'contactsTableComponent');
    expect(isDOMComponent(rootElement)).to.equal(true);
  });

});
