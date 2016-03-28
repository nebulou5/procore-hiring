import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { Input } from './Input';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

function getComponent(props) {

  props = Object.assign({}, props, {
    id: 'testInput',
    type: 'text',
    name: 'test',
    placeholder: 'testPlaceholder',
    value: 'abc123'
  });

  return (
    <Input {...props}/>
  );
}

describe('Input', () => {

  it('renders a text box', () => {
    const component = renderIntoDocument(getComponent());
    const inputs = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(inputs[0].getAttribute('value')).to.equal('abc123');
  });

});
