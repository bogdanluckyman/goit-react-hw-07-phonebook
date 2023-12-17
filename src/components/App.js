import { GlobalStyle } from './GlobalStyled';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList';
import { SearchBar } from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'api';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBar />
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </div>
  );
};
