import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const visibleContact = contacts.filter(item => {
    const trueContact = item.name.toLowerCase().includes(filter.toLowerCase());
    return trueContact;
  });
  return (
    <div>
      <ul>
        {visibleContact.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <b>
                {name}: {number}
              </b>
              <button type="button" onClick={() => dispatch(remove(id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
