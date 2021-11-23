import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../components/ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogInView = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'password':
        setPassword(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className={s.title}>Log In Page</h1>
      <form className={s.form} onSubmit={onFormSubmit}>
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
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button variant="success" type="submit">
          Log In
        </Button>
      </form>
    </>
  );
};

export default LogInView;

// RegisterView.propTypes = {
//   contact: PropTypes.array,
//   onSubmit: PropTypes.func,
// };
