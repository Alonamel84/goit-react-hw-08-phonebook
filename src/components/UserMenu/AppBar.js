import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import Navigation from './Navigation';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <header>{isLoggedIn ? <Navigation /> : <AuthNav />}</header>;
}
