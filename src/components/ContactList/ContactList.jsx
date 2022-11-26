import css from './ContactList.module.css';
import { deleteContact } from 'redux/phonebook/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, selectFilter } from 'redux/phonebook/selectors';
import { DeleteIcon } from '@chakra-ui/icons';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const renderContacts = () => {
    return items.filter(el => el.name.includes(filter));
  };
  return (
    <ul>
      {renderContacts().map(element => {
        const { id, name, number } = element;
        return (
          <li key={id} className={css.renderLi}>
            {`${name}: ${number} `}
            <button
              type="button"
              className={css.renderBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
              <DeleteIcon w={8} h={8} color="red.500" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
