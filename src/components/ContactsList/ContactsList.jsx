import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ContactsItem } from '../ContactsItem/ContactsItem';
import { Loader } from 'components/Loader/Loader';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { fetchContactsSuccess, fetchContactsError } from 'redux/contacts/contacts-actions';

import { List } from './ContactsList.styled';


export const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  },[dispatch]
  );

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {!fetchContactsSuccess && fetchContactsError && (
        <Loader />
      )}

    <List>
      {filteredContacts.map(item => {
      const { id, name, number } = item;
        return (
          <ContactsItem
            contact={{ id, name, number }}
            key={id}
            onDelete={id => dispatch(contactsOperations.deleteContact(id))}
          />
        );
      })}
      </List>
      </>
  );
}
