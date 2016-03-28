import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { Button } from './button';
import {
  isDOMComponent,
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

function getComponent(props) {
  return (
    <Button {...props}>
      Submit
    </Button>
  );
}

describe('Button', () => {

  it('renders with the correct class', () => {
    const component = renderIntoDocument(getComponent());
    const rootElement = findRenderedDOMComponentWithClass(component, 'buttonComponent');
    expect(isDOMComponent(rootElement)).to.equal(true);
  });

  it('renders children', () => {
    const component = renderIntoDocument(getComponent());
    const button = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(button.innerHTML).to.equal('Submit');
  });
});
