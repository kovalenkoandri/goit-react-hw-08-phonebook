import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/phonebook/operations';
import { selectError, selectLoading } from 'redux/phonebook/selectors';
import { titleStyles } from 'styles/titleStyles';
import { boxStyles } from 'styles/boxStyles';
import { Box, Text} from '@chakra-ui/react';

export default function Tasks() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
      <title>Your tasks</title>
      {/* </Helmet> */}
      <Box sx={boxStyles}>
        <Text sx={titleStyles}>Phonebook</Text>
        <ContactForm />
        <Text sx={titleStyles}>Contacts</Text>
        <Filter />
        <ContactList />
      </Box>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
    </>
  );
}
