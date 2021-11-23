// import ContactForm from './components/ContactForm';
import './App.css';
// import FilterName from './components/FilterName';
// import ContactList from './components/ContactsList/ContactsList';
import s from './components/data/data.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import operations from './redux/contacts/contacts-operations';
// import { filterContactSuccess } from './redux/contacts/actions';
// import { getNameFilter, getContacts } from './redux/contacts/contacts-selectors';
// import { Route } from 'react-router';
import { Routes } from 'react-router';
import { Switch, Route } from 'react-router-dom';
// import RegisterView from './components/views/RegisterView';
// import LogInView from './components/views/LoginView';
import { lazy, useEffect, Suspense } from 'react';
import authOperations from './redux/auth/auth-operations';
// import HomeView from './components/views/HomeView';
import AppBar from './components/UserMenu/AppBar';
import PrivateRoute from './components/UserMenu/PrivateRoute';

const HomeView = lazy(() => import('./components/views/HomeView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));
const LogInView = lazy(() => import('./components/views/LoginView'));
const ContactView = lazy(() => import('./components/views/ContactView'));

const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  // const manualFilter = useSelector(getNameFilter);

  useEffect(() => {
    console.log('hello');
    dispatch(authOperations.getCurrentUser());
  }, []);

  // function filterName(e) {
  //   e.preventDefault();
  //   dispatch(filterContactSuccess(e.currentTarget.value));
  // }

  // const filterArr = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(manualFilter.toLowerCase()),
  //   );
  // };

  // const onDelete = id => {
  //   dispatch(operations.deleteContact(id));
  // };

  // const filterContacts = filterArr();

  return (
    <div className={s.container}>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <AppBar />
        <Switch>
          <Routes>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/register" component={RegisterView} />
            <Route path="/login" component={LogInView} />
            <PrivateRoute path="/contacts">
              <ContactView />
              {/* <Route path="/contacts" component={ContactView} /> */}
              {/* <h1 className={s.title}>Phonebook</h1>
            <ContactForm contact={contacts}></ContactForm>
            <h2 className={s.title}>Contacts</h2>
            <FilterName onChange={filterName}></FilterName>
            <ContactList filterContacts={filterContacts} onDelete={onDelete}></ContactList> */}
            </PrivateRoute>
            {/* </Route> */}
          </Routes>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
