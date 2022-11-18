export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const filter = selectFilter(state).toLowerCase();
  const contacts = selectContacts(state);
  return contacts
    .filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
};
