import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';
import { contactsOperations } from 'redux/contacts/contacts-operations';

import { List } from './ContactsList.styled';


export const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  },[dispatch]
  );

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
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
  );
}
