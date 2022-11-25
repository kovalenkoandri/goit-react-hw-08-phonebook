import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';
import css from './Tasks.module.css';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/phonebook/operations';
import { selectError, selectLoading } from 'redux/phonebook/selectors';
export default function Tasks() {
  const dispatch = useDispatch();
  // console.log(useSelector(selectItems));
  // const items = useSelector(selectItems);
  // const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
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
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
      {selectLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {/* <p>{items.length > 0 && JSON.stringify(items)}</p> */}
    </>
  );
}
