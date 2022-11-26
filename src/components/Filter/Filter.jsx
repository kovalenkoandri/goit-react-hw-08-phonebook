import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterTask } from 'redux/phonebook/filterSlice';
import { selectFilter } from 'redux/phonebook/selectors';
import { Search2Icon } from '@chakra-ui/icons';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <Search2Icon w={8} h={8} color="red.500" />
      <input
        type="text"
        name="filter"
        className={css.inputName}
        onChange={event => dispatch(filterTask(event.target.value))}
        value={filter}
      />
    </>
  );
};

export default Filter;
