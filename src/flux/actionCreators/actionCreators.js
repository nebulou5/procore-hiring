import { appendContactToCookie } from '../../lib/contactsManager';
import * as actionTypes from '../actionTypeConstants';

export function setInitialState({contacts}) {
  return {
    contacts,
    type: actionTypes.SET_INITIAL_STATE
  };
}

export function toggleAddContactModal() {
  return {
    type: actionTypes.TOGGLE_ADD_CONTACT_MODAL 
  };
}

export function changeContactsFormField(field) {
  return {
    type: actionTypes.CHANGE_CONTACTS_FORM_FIELD,
    field
  };
}

export function filterContacts(filter) {
  return {
    type: actionTypes.FILTER_CONTACTS,
    filter
  };
}

export function sortContacts(sortBy) {
  return {
    type: actionTypes.SORT_CONTACTS,
    sortBy
  }
}

export function submitContactsForm(e) { 
  return (dispatch, getState) => {
  
    e.preventDefault();
    let contactForm = getState().contact.toJS().form;
    appendContactToCookie(contactForm);
    
    dispatch({
      type: actionTypes.SUBMIT_CONTACTS_FORM,
      contact: contactForm
    });
  }
}

