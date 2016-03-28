import _ from 'lodash';
import { Map, fromJS } from 'immutable';
import * as actionTypes from '../../actionTypeConstants'; 

function getInitialState(contacts = []) {
  return fromJS({
    contacts,
    modal: {
      isOpen: false 
    },
    filter: '',
    filteredContacts: [],
    sortBy: '',
    form: {
      firstName: '',
      lastName: '',
      dob: '',
      phone: '',
      email: '',
      notes: ''
    }
  });
} 

export default function contactReducer(state = Map(), action) {
  
  switch (action.type) {

    case actionTypes.SET_INITIAL_STATE:
      let { contacts } = action;
      return getInitialState(contacts);

    case actionTypes.FILTER_CONTACTS:
      let filter = action.filter;
      let filteredContacts = !action.filter ? {} : state
        .get('contacts')
        .toJS()
        .filter((contact) => {
          let fullText = _.values(contact).join(' ');
          return fullText.indexOf(filter) !== -1;
        });
      return state
        .set('filter', filter) 
        .set('filteredContacts', fromJS(filteredContacts));

    case actionTypes.SORT_CONTACTS:

      let sortBy = action.sortBy;
      let sortedContacts;
      let sortedFilteredContacts;

      if (!sortBy) {
        return state; 
      }

      if (state.get('sortBy') === sortBy) {
        sortedContacts = fromJS(state.get('contacts').reverse());
        sortedFilteredContacts = fromJS(state.get('filteredContacts').reverse());
      } else {
        sortedContacts = fromJS(_.sortBy(state.get('contacts').toJS(), sortBy));
        sortedFilteredContacts = fromJS(_.sortBy(state.get('filteredContacts').toJS(), sortBy));
      }

      return state
        .set('sortBy', sortBy)
        .set('contacts', sortedContacts) 
        .set('filteredContacts', sortedFilteredContacts);
            
    case actionTypes.TOGGLE_ADD_CONTACT_MODAL:
      return state
        .set('modal', fromJS({
          isOpen: !state.getIn(['modal', 'isOpen']),
        }));

    case actionTypes.CHANGE_CONTACTS_FORM_FIELD:
      let { name, value } = action.field;
      return state.setIn(['form', name], value);

    case actionTypes.SUBMIT_CONTACTS_FORM:
      let newContacts = state.get('contacts').toJS();
      newContacts.push(action.contact);
      return getInitialState(newContacts); 

    default:
      return state;
  }
}
