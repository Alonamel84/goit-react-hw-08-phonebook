import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import s from '../data/data.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUSerName);
  return (
    <div>
      <span className={s.nameSpan}>Welcome, {name}</span>
      <Button type="button" variant="secondary" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </Button>
    </div>
  );
}
