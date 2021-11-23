import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';
// import operations from '../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <>
      <h1 className={s.title}>Registration Page</h1>
      <form className={s.form} onSubmit={onFormSubmit}>
        <label className={s.label}>
          Name
          <input
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            title="email должен состоять букв и @, не
            может содержать пробелы, круглые скобки и может начинаться с +"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={s.addButton} type="submit">
          Register
        </button>
      </form>
    </>
  );
};

// const mapDispatchToProps = {
//   addContact,
// };
export default RegisterView;

// RegisterView.propTypes = {
//   contact: PropTypes.array,
//   onSubmit: PropTypes.func,
// };
