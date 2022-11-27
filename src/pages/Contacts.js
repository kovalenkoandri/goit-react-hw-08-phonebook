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
import { titleStyles } from 'styles/titleStyles';
import { boxStyles } from 'styles/boxStyles';
import { Box, Text, useColorMode } from '@chakra-ui/react';

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
  const Button = ({ onClick, children }) => {
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    );
  };
const StyleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  );
}
  return (
    <>
      {/* <Helmet> */}
      <title>Your tasks</title>
      {/* </Helmet> */}
      {/* <TaskEditor /> */}
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      {/* <TaskList /> */}
      {StyleColorMode()}
      <Box sx={boxStyles}>
        <Text sx={titleStyles}>Phonebook</Text>
        <ContactForm />
        <Text sx={titleStyles}>Contacts</Text>
        <Filter />
        <ContactList />
      </Box>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {/* <p>{items.length > 0 && JSON.stringify(items)}</p> */}
    </>
  );
}
