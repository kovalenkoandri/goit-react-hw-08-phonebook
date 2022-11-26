import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/phonebook/selectors';
import { addContact } from 'redux/phonebook/operations';
import { PhoneIcon, EditIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { iconStyles } from 'styles/iconStyles';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const handleChangeName = event => setName(event.target.value);
  const handleChangePhone = event => setPhone(event.target.value);
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const handleSubmit = (name, number, event) => {
    event.preventDefault(); // except refresh page onSubmit
    const form = event.target;
    if (
      items.some(el =>
        el.name.toLocaleUpperCase().includes(name.toLocaleUpperCase())
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };
  return (
    <form
      className={css.phonebookForm}
      onSubmit={event => handleSubmit(name, phone, event)}
      autoComplete="off"
    >
      <label htmlFor="name">Name</label>
      <EditIcon sx={iconStyles} />
      <input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.inputName}
        onChange={handleChangeName}
        placeholder="Enter name!"
        // value={name}
        //remove value attributes, the reset will set all the values to blank
      />
      <label htmlFor="number">Number</label>
      <PhoneIcon sx={iconStyles} />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.inputName}
        onChange={handleChangePhone}
        placeholder="Enter number!"
        // value={number}
        // if uncomment from.reset() doesn't work at App.jsx
      />
      <button type="submit">
        Add contact
        <CheckCircleIcon sx={iconStyles} />
      </button>
    </form>
  );
};

export default ContactForm;
