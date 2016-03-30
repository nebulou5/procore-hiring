import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import contactReducer from './contactReducer';
import * as actionTypes from '../../actionTypeConstants';

describe('contactReducer', () => {

  it('returns a default state', () => {
    const action = { 
      type: 'UNKNOWN_ACTION'
    }
    expect(contactReducer(action, action)).to.equal(action);
  });
  
  it('sets the initial state', () => {
  
    const action = {
      type: actionTypes.SET_INITIAL_STATE,
      contacts: [{
        firstName: 'Richard',
        lastName: 'Harrington'
      }]
    };

    const initialState = Map();
    const nextState = contactReducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      contacts: [{
        firstName: 'Richard',
        lastName: 'Harrington'
      }],
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
    }));
  });

  it('filters a list of contacts', () => {
    
    const initialState = contactReducer(Map(), {
      type: actionTypes.SET_INITIAL_STATE,
      contacts: [{
        firstName: 'Richard',
        lastName: 'Harrington'
      }, {
        firstName: 'Roger',
        lastName: 'Waters'
      }, {
        firstName: 'Robert',
        lastName: 'Plant'
      }]
    });

    expect(initialState.toJS().filteredContacts.length).to.equal(0);

    expect(contactReducer(initialState, {
      type: actionTypes.FILTER_CONTACTS,
      filter: 'Ro'
    }).toJS().filteredContacts).to.eql([{
      firstName: 'Roger',
      lastName: 'Waters'
    }, {
      firstName: 'Robert',
      lastName: 'Plant'
    }]);
  });

  it('sorts a list of contacts by field in ascending order', () => {

    const initialState = contactReducer(Map(), {
      type: actionTypes.SET_INITIAL_STATE,
      contacts: [{
        firstName: 'Led',
        lastName: 'Zeppelin'
      }, {
        firstName: 'Armando',
        lastName: 'Esquodrez'
      }, {
        firstName: 'Bernado',
        lastName: 'Carnadas'
      }, {
        firstName: 'Carlos',
        lastName: 'Smith'
      }]
    });

    const nextState = contactReducer(initialState, {
      type: actionTypes.SORT_CONTACTS,
      sortBy: 'firstName'
    });

    expect(nextState.toJS().contacts).to.eql([{
      firstName: 'Armando',
      lastName: 'Esquodrez'
    }, {
      firstName: 'Bernado',
      lastName: 'Carnadas'
    }, {
      firstName: 'Carlos',
      lastName: 'Smith'
    }, {
      firstName: 'Led',
      lastName: 'Zeppelin'
    }]);
  });

  it('sorts a list of contacts by field in descending order', () => {

    const initialState = contactReducer(Map(), {
      type: actionTypes.SET_INITIAL_STATE,
      contacts: [{
        firstName: 'Led',
        lastName: 'Zeppelin'
      }, {
        firstName: 'Armando',
        lastName: 'Esquodrez'
      }, {
        firstName: 'Bernado',
        lastName: 'Carnadas'
      }, {
        firstName: 'Carlos',
        lastName: 'Smith'
      }]
    });

    let nextState = contactReducer(initialState, {
      type: actionTypes.SORT_CONTACTS,
      sortBy: 'firstName'
    });

    nextState = contactReducer(nextState, {
      type: actionTypes.SORT_CONTACTS,
      sortBy: 'firstName'
    });

    expect(nextState.toJS().contacts).to.eql([{
      firstName: 'Led',
      lastName: 'Zeppelin'
    }, {
      firstName: 'Carlos',
      lastName: 'Smith'
    }, {
      firstName: 'Bernado',
      lastName: 'Carnadas'
    }, {
      firstName: 'Armando',
      lastName: 'Esquodrez'
    }]);
  });
});
