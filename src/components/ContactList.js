import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';
import { deleteContact } from '../api';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(state => state.filter);
  const visibleContact = contacts.filter(item => {
    const trueContact = item.name.toLowerCase().includes(filter.toLowerCase());
    console.log('filter');
    return trueContact;
  });

  return (
    <div>
      <ul>
        {isLoading && <b>Loading tasks...</b>}
        {error && <b>{error}</b>}
        {visibleContact.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <b>
                {name}: {number}
              </b>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
