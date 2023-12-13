import { GlobalStyle } from './GlobalStyled';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList';
import { SearchBar } from './SearchBar';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';

export const App = () => {
  const { contacts } = useSelector(selectContacts);

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
