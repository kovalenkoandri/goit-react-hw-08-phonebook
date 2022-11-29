import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/phonebook/selectors';
import { addContact } from 'redux/phonebook/operations';
import { PhoneIcon, EditIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { iconStyles } from 'styles/iconStyles';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { InputStyles } from 'styles/inputStyles';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChangeName = event => setName(event.target.value);
  const handleChangePhone = event => setNumber(event.target.value);
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const handleSubmit = (name, number, event) => {
    event.preventDefault(); // except refresh page onSubmit
    if (
      items.some(el =>
        el.name.toLocaleUpperCase().includes(name.toLocaleUpperCase())
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  return (
    <form
      className={css.phonebookForm}
      onSubmit={event => handleSubmit(name, number, event)}
      autoComplete="off"
    >
      <label htmlFor="name">Name</label>
      <EditIcon sx={iconStyles} />
      <Input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.inputName}
        onChange={handleChangeName}
        placeholder="Enter name!"
        value={name}
        sx={InputStyles()}
      />
      <label htmlFor="number">Number</label>
      <PhoneIcon sx={iconStyles} />
      <Input
        sx={InputStyles()}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.inputName}
        onChange={handleChangePhone}
        placeholder="Enter number!"
        value={number}
      />
      <Button
        type="submit"
        colorScheme="teal"
        size="md"
        variant="ghost"
        rightIcon={<CheckCircleIcon sx={iconStyles} />}
        className={css.btnAddContact}
      >
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
