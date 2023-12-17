import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from '../redux/selectors';
import { deleteContact } from '../api';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const trueContact = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul>
        {isLoading && <b>Loading tasks...</b>}
        {error && <b>{error}</b>}
        {trueContact.map(({ id, name, number }) => {
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
