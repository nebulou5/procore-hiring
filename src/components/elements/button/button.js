import React from 'react';

export class Button extends React.Component {
  
  render() {

    let { style, children, ...props } = this.props;
   
    style = Object.assign({}, {
      background: "#216fb5",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      height: "34px",
      padding: "0 10px"
    }, style);

    return (
      <button 
        { ...props }
        style={ style }
        className="buttonComponent">
       
        { children }

      </button>
    );
  }
}
