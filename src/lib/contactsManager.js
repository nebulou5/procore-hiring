import _ from 'lodash';
import cookie from 'js-cookie';
import { CONTACTS_STORE_COOKIE } from '../config/constants';

export function getContactsFromCookie() {

  let contacts = cookie.get(CONTACTS_STORE_COOKIE) && 
    JSON.parse(cookie.get(CONTACTS_STORE_COOKIE));

  return _.isArray(contacts) ? contacts : [];
}

export function appendContactToCookie(contact) {
  let contacts = getContactsFromCookie();
  contacts.push(contact);
  cookie.set(CONTACTS_STORE_COOKIE, JSON.stringify(contacts));
}
