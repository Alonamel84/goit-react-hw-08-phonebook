import { NavLink } from 'react-router-dom';

const styles = {
  activeLink: {
    color: 'red',
  },
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact activeStyle={styles.activeLink}>
        {' '}
        Main
      </NavLink>
      <NavLink to="/contacts" exact activeStyle={styles.activeLink}>
        Contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;
