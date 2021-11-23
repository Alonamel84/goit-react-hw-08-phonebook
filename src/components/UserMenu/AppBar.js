import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log('🚀 ~ file: AppBar.js ~ line 9 ~ AppBar ~ isLoggedIn', isLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
