import s from '../ContactItem/ContactItem.module.css'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const ContactItem = ({ name,  number, onDelete,id }) => {
  return (

        <>
            <li className={s.contactItem} id={ id}>{name} {number}
            <Button variant="danger" type='button' onClick={() => { onDelete(id) }}>Delete</Button>
           </li>
            </>
    )
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.string,
};
export default ContactItem;