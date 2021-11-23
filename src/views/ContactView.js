import s from '../data/data.module.css';
import { useDispatch, useSelector } from 'react-redux';
import FilterName from '../FilterName';
import ContactList from '../ContactsList/ContactsList';
import { getNameFilter, getContacts } from '../../redux/contacts/contacts-selectors';
import { filterContactSuccess } from '../../redux/contacts/actions';
import ContactForm from '../ContactForm/ContactForm.jsx';
import operations from '../../redux/contacts/contacts-operations';

const ContactView = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const manualFilter = useSelector(getNameFilter);

  function filterName(e) {
    e.preventDefault();
    dispatch(filterContactSuccess(e.currentTarget.value));
  }

  const filterArr = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(manualFilter.toLowerCase()),
    );
  };

  const onDelete = id => {
    dispatch(operations.deleteContact(id));
  };

  const filterContacts = filterArr();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm contact={contacts}></ContactForm>
      <h2 className={s.title}>Contacts</h2>
      <FilterName onChange={filterName}></FilterName>
      <ContactList filterContacts={filterContacts} onDelete={onDelete}></ContactList>
    </div>
  );
};

export default ContactView;
