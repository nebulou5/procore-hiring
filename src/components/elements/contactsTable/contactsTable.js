import React from 'react';

export class ContactsTable extends React.Component {
  
  render() {

    let emptyText = this.props.filtered ? 
      'Your search did not match any contacts.' :
      'Add a contact to get started.';

    let tableBody = this.props.contacts.length === 0 ? (

      <tr>
        <td colSpan="6">
          { emptyText }
        </td>
      </tr>

    ) : this.props.contacts.map((contact, i) => {

      return (

        <tr key={i}>
          <td>
            { contact.firstName }
          </td>
          <td>
            { contact.lastName }
          </td>
          <td className="phoneHidden tabletHidden">
            { contact.dob }
          </td>
          <td className="phoneHidden">
            { contact.phone }
          </td>
          <td>
            { contact.email }<span className="phoneOnly"><br/>{ contact.phone }</span>
          </td>
          <td className="phoneHidden tabletHidden">
            { contact.notes }
          </td>
        </tr>
      );
    });

    return (
      <table { ...this.props } className="contactsTableComponent">
        
        <thead style={{
          background: "#676767",
          color: "#fff"
        }}>
          <tr>

            <th 
              onClick={() => {
                this.props.sort('firstName'); 
              }}>

              First Name

            </th>

            <th 
              onClick={() => {
                this.props.sort('lastName'); 
              }}>

              Last Name

            </th>

            <th 
              className="phoneHidden tabletHidden"
              onClick={() => {
                this.props.sort('dob') 
              }}>

              Date of Birth

            </th>

            <th 
              className="phoneHidden"
              onClick={() => {
                this.props.sort('phone');
              }}>
              
              Phone

            </th>

            <th
              onClick={() => {
                this.props.sort('email'); 
              }}>

              Email<span className="phoneOnly">/Phone</span>

            </th>

            <th 
              className="phoneHidden tabletHidden"
              onClick={() => {
                this.props.sort('notes'); 
              }}>

              Notes

            </th>

          </tr>
        </thead>
       
        <tbody>
          { tableBody }
        </tbody>

      </table>
    );
  }
}
