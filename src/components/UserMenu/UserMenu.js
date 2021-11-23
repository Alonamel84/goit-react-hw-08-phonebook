import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUSerName);
  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
}
