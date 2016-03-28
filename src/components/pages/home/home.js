import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Map } from 'immutable';
import * as actionCreators from '../../../flux/actionCreators/actionCreators';
import { SearchBox } from '../../elements/searchBox/searchBox';
import { IconButton } from '../../elements/iconButton/iconButton';
import { Button } from '../../elements/button/button';
import { Input } from '../../elements/input/input';
import { ContactsTable } from '../../elements/contactsTable/contactsTable';

export class Home extends React.Component {
  render() {

    const modalStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)' 
      } 
    };
   
    let contacts = 
      this.props.filter.length > 0 ?
      this.props.filteredContacts :
      this.props.contacts;

    return (

      <div className="homeComponent container">

        <div style={{
          marginBottom: "30px",
          overflow: "auto"
        }}>

          <SearchBox 
            filterContacts={ this.props.filterContacts }
            style={{
              float: "left"
            }}/>

          <IconButton
            onClick={ this.props.toggleAddContactModal }
            style={{ float: "right" }}
            text="Contacts Keeper"
            icon="fa fa-plus-circle"/>

          <Modal
            isOpen={ this.props.modal.isOpen }
            onRequestClose={ this.props.toggleAddContactModal }
            style={ modalStyles }>
         
            <header style={{
              background: "#216fb5",
              color: "#fff",
              marginLeft: "-20px",
              marginRight: "-20px",
              marginTop: "-20px"
            }}>
              <div style={{ marginLeft: "-3px" }} className="grid">

                <div className="column phoneSixUnits">
                  <h1 
                    style={{ 
                      fontSize: "12px", 
                      fontWeight: "100",
                      marginLeft: "20px",
                      marginTop: "5px"
                    }}>

                    Contacts Keeper

                  </h1>
                </div>

                <div className="column phoneSixUnits">
                  
                  <div 
                    onClick={ this.props.toggleAddContactModal } 
                    className="fa stack" 
                    style={{ 
                      cursor: "pointer", 
                      float: "right",
                      marginRight: "8px"
                    }}>

                    <i 
                      className="fa fa-circle"
                      style={{ 
                        fontSize: "22px", 
                        marginRight: "-16px" 
                      }}>
                    </i>
                    <i 
                      className="fa fa-close"
                      style={{
                        color: "#f58025",
                        position: "relative",
                        top: "-2px"
                      }}>
                    </i>

                  </div>
                </div>
              </div>
            </header>

            <div style={{ marginLeft: "-2px" }} className="grid">

              <form 
                noValidate 
                onSubmit={this.props.submitContactsForm}
                style={{
                  fontSize: "11px",
                  marginTop: "15px"
                }}>

                <div className="row">
                  <div className="column phoneTwelveUnits tabletSixUnits">
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      onChange={ this.props.changeContactsFormField }
                      value={ this.props.form.firstName }/>
                  </div>     
                  <div className="column phoneTwelveUnits tabletSixUnits">
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={ this.props.changeContactsFormField }
                      value={ this.props.form.lastName }/>
                  </div>     
                </div>

                <div className="row">
                  <div className="column phoneTwelveUnits tabletSixUnits">
                    <Input
                      id="dob"
                      name="dob"
                      placeholder="Date of Birth"
                      onChange={ this.props.changeContactsFormField }
                      value={ this.props.form.dob }/>
                  </div>     
                  <div className="column phoneTwelveUnits tabletSixUnits">
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={ this.props.changeContactsFormField }
                      value={ this.props.form.phone }/>
                  </div>     
                </div>

                <div className="row">
                  <div className="column phoneTwelveUnits tabletSixUnits">
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={ this.props.changeContactsFormField }
                      value={ this.props.form.email }/>
                  </div>     
                </div>

                <div className="row">
                  <div className="column phoneTwelveUnits">
                    <Input
                      id="notes"
                      name="notes"
                      placeholder="Notes"
                      type="textarea"
                      onChange={ this.props.changeContactsFormField }
                      value={ this.props.form.notes }/>
                  </div>     
                </div>

                <div 
                  className="row"
                  style={{
                    borderTop: "1px solid #c3c2c2",
                    bottom: "0",
                    marginLeft: "-20px",
                    marginRight: "-20px",
                    position: "absolute",
                    width: "100%"
                  }}>
                  <div className="column phoneTwelveUnits">

                    <Button style={{ 
                      background: "#676767",
                      float: "right",
                      marginRight: "7px",
                      width: "60px"
                    }}>
                      Save
                    </Button>

                  </div>     
                </div>
              </form>
            </div>
          </Modal>

        </div>

        <ContactsTable 
          style={{
            clear: "both",
            width: "100%"
          }}
          sort={this.props.sortContacts}
          filtered={this.props.filter.length > 0}
          contacts={contacts}/>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.contact.toJS()
  };
}

export const HomeContainer = connect(mapStateToProps, actionCreators)(Home);
