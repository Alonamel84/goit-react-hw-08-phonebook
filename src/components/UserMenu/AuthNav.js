import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AuthNav() {
  return (
    // <div>
    //   <NavLink to="/register" exact>
    //     Registration
    //   </NavLink>
    //   <NavLink to="/login" exact>
    //     Login
    //   </NavLink>
    //   {/* {isLoggedIn && <UserMenu />} */}
    // </div>

    //-=======================//
    <>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    //============
  );
}
