import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterTask } from 'redux/phonebook/filterSlice';
import { selectFilter } from 'redux/phonebook/selectors';
import { Search2Icon } from '@chakra-ui/icons';
import { iconStyles } from 'styles/iconStyles';
import { Input } from '@chakra-ui/react';
import { InputStyles } from 'styles/inputStyles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <Search2Icon sx={iconStyles} />
      <Input
        type="text"
        name="filter"
        className={css.inputName}
        onChange={event => dispatch(filterTask(event.target.value))}
        value={filter}
        sx={InputStyles()}
      />
    </>
  );
};

export default Filter;
