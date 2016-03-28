import React from 'react';
import { Button } from '../button/button';

export class IconButton extends React.Component {
  
  render() {
    
    let { style, icon, ...props } = this.props;
    
    return (

      <div 
        onClick={ props.onClick } 
        style={ style } 
        className="iconButtonComponent">

        <Button>
          <i ref="buttonIcon" style={{ marginRight: "10px" }} className={ icon }></i>
          <span ref="buttonText">{ this.props.text }</span>
        </Button>

      </div>
    );
  }
}
