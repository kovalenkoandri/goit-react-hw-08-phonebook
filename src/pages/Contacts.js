import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';
// import css from './Tasks.module.css';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/phonebook/operations';
import { selectError, selectLoading } from 'redux/phonebook/selectors';
// import { titleStyles } from 'index';
import { theme } from 'index';
import { Box, Text } from '@chakra-ui/react';

export default function Tasks() {
  const dispatch = useDispatch();
  // console.log(useSelector(selectItems));
  // const items = useSelector(selectItems);
  // const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    // dispatch(fetchTasks());
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <>
      {/* <Helmet> */}
      <title>Your tasks</title>
      {/* </Helmet> */}
      {/* <TaskEditor /> */}
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      {/* <TaskList /> */}
      <Text sx={theme.titleStyles}>Phonebook</Text>
      <Box theme>Phonebook</Box>
      <ContactForm />
      <Text sx={theme.titleStyles}>Contacts</Text>
      <Filter />
      <ContactList />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {/* <p>{items.length > 0 && JSON.stringify(items)}</p> */}
    </>
  );
}
