import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { IconButton } from './iconButton';
import {
  isDOMComponent,
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

function getComponent(props) {
  return (
    <IconButton {...props} />
  );
}

describe('IconButton', () => {

  it('renders with the correct class', () => {
    const component = renderIntoDocument(getComponent());
    const rootElement = findRenderedDOMComponentWithClass(component, 'iconButtonComponent');
    expect(isDOMComponent(rootElement)).to.equal(true);
  });

  it('renders passed button text', () => {
    const component = renderIntoDocument(getComponent({
      text: "Contacts Keeper",
      icon: "fa fa-plus-circle"
    }));
    expect(component.refs.buttonText.innerHTML).to.equal('Contacts Keeper');
  });

  it('renders an icon', () => {
    const component = renderIntoDocument(getComponent({
      text: "Contacts Keeper",
      icon: "fa fa-plus-circle"
    }));
    expect(component.refs.buttonIcon.className).to.equal('fa fa-plus-circle');
  });

  it('renders with passed styles', () => {
    const component = renderIntoDocument(getComponent({
      text: "Contacts Keeper",
      icon: "fa fa-plus-circle",
      style: {
        color: "red"
      }
    }));
    const rootElement = findRenderedDOMComponentWithClass(component, 'iconButtonComponent');
    expect(rootElement.style._values.color).to.equal('red');
  });
});
