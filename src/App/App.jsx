import { useFetchContactsQuery } from '../components/redux/api-service';

import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

import { Container, Title } from './App.styled';


function App() {
  const fetchContacts = useFetchContactsQuery()

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm contacts={fetchContacts} />
        <Title>Contacts</Title>
        <Filter
        title="Find contact by name" />
        <ContactsList contacts={fetchContacts} />
      </Container>
    );
}

export { App };
