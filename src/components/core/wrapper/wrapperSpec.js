import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { Wrapper } from './wrapper';
import initializeStore from '../../../flux/store';
import {
  isDOMComponent,
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';

function getComponent(props) {
  return (
    <Wrapper>
      <h1 className="testChild">Test Child</h1>
    </Wrapper>
  );
}

describe('Wrapper', () => {

  it('renders with the correct class', () => {
    const component = renderIntoDocument(getComponent());
    const rootElement = findRenderedDOMComponentWithClass(component, 'wrapperComponent');
    expect(isDOMComponent(rootElement)).to.equal(true);
  });

  it('renders it\'s children', () => {
    const component = renderIntoDocument(getComponent());
    const childComponent = findRenderedDOMComponentWithClass(component, 'testChild');
    expect(isDOMComponent(childComponent)).to.equal(true);
  });

});
