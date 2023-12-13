import { Formik } from 'formik';
import { Form, Field, FormGroup } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const addContact = newContact => {
    dispatch(add(newContact));
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          const { name, number } = values;

          if (!name || !number) {
            alert('Please fill in both name and number fields.');
            return;
          }

          const contactExists = contacts.some(
            contact =>
              contact.name.toLowerCase() === name.toLowerCase() ||
              contact.number === number
          );

          if (contactExists) {
            alert('Contact with this name or number already exists.');
            return;
          }

          addContact(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" />
          </FormGroup>
          <FormGroup>
            Number
            <Field name="number" type="text" />
          </FormGroup>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
