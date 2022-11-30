import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/phonebook/selectors';
import { addContact } from 'redux/phonebook/operations';
import { PhoneIcon, EditIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { iconStyles } from 'styles/iconStyles';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { InputStyles } from 'styles/inputStyles';
import { Formik } from 'formik';

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={values => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Required';
        } else if (
          !/[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
            values.name
          )
        ) {
          errors.name = 'Invalid name';
        }
        if (!values.number) {
          errors.number = 'Required';
        } else if (
          !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
            values.number
          )
        ) {
          errors.number = 'Invalid number';
        }

        return errors;
      }}
      onSubmit={(values, formHelpers) => {
        const { name } = values;
        const { number } = values;
        if (
          items.some(el =>
            el.name.toLocaleUpperCase().includes(name.toLocaleUpperCase())
          )
        ) {
          alert(`${name} is already in contacts.`);
          return;
        }
        dispatch(addContact({ name, number }));
        formHelpers.resetForm();
      }}
    >
      {({
        values,

        errors,

        touched,

        handleChange,

        handleSubmit,

        isSubmitting,

        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Name may contain only letters, apostrophe, dash and spaces. For
            example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan
            <EditIcon sx={iconStyles} />
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="type name here"
              value={values.name}
              sx={InputStyles()}
              className={css.inputName}
            />
          </label>
          {errors.name && touched.name && errors.name}
          <label>
            Phone number must be digits and can contain spaces, dashes,
            parentheses and can start with +
            <PhoneIcon sx={iconStyles} />
            <Input
              type="tel"
              name="number"
              onChange={handleChange}
              placeholder="type number here"
              value={values.number}
              sx={InputStyles()}
              className={css.inputName}
            />
          </label>
          {errors.number && touched.number && errors.number}
          <Button
            type="submit"
            disabled={isSubmitting}
            colorScheme="teal"
            size="md"
            variant="ghost"
            rightIcon={<CheckCircleIcon sx={iconStyles} />}
            className={css.btnAddContact}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
