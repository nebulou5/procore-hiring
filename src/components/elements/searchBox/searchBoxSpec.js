import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { SearchBox } from './searchBox';
import {
  isDOMComponent,
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';

function getComponent(props) {
  return (
    <SearchBox {...props} />
  );
}

describe('SearchBox', () => {

  it('renders with the correct class', () => {
    const component = renderIntoDocument(getComponent());
    const rootElement = findRenderedDOMComponentWithClass(component, 'searchBoxComponent');
    expect(isDOMComponent(rootElement)).to.equal(true);
  });

});
