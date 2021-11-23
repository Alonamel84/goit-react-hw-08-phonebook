import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMenu from './UserMenu';
import s from '../data/data.module.css';
const styles = {
  customsLink: {
    color: 'grey',
    marginRight: 10,
    display: 'block',
    padding: 10,
    textDecoration: 'none',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    // <nav>
    //   <NavLink to="/" exact activeStyle={styles.activeLink}>
    //     Main
    //   </NavLink>
    // <NavLink to="/contacts" exact activeStyle={styles.activeLink}>
    //   Contacts
    // </NavLink>
    // </nav>
    //================
    <>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" exact style={styles.customsLink}>
            Home
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/contacts" exact style={styles.customsLink}>
              Contacts
            </NavLink>
            <Navbar.Collapse className="justify-content-end">
              <UserMenu className="userMenuStyle" />
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
