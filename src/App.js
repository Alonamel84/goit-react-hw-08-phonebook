import './App.css';
import s from './components/data/data.module.css';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import authOperations from './redux/auth/auth-operations';
import AppBar from './components/UserMenu/AppBar';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import React from 'react';
import PublicRoute from './components/UserMenu/PublicRoute';
const HomeView = lazy(() => import('./components/views/HomeView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));
const LogInView = lazy(() => import('./components/views/LoginView'));
const ContactView = lazy(() => import('./components/views/ContactView'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    // }, [dispatch]);
  }, []);
  return (
    <div className={s.container}>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LogInView />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <ContactView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
