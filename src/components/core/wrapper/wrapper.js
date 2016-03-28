import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../flux/actionCreators/actionCreators';

export class Wrapper extends React.Component {

  render() {

    const headerStyles = {
      background: "#f58025",
      borderBottom: "20px solid #e7e7e7",
      height: "38px",
      marginBottom: "50px",
      padding: "27px 0 0 0"
    };

    const titleStyles = {
      color: "#fff", 
      fontSize: "18px",
      fontWeight: "300"
    };

    return (

      <div className="wrapperComponent">

        <header style={ headerStyles }>
          <div className="container">
            <h1 style={ titleStyles }>
              Contacts Keeper
            </h1>
          </div>
        </header>

        { this.props.children }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export const WrapperContainer = connect(mapStateToProps, actionCreators)(Wrapper);
