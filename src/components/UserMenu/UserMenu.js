import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Icon } from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';
import { iconStyles } from 'index.js';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
        <Icon as={MdLogout} sx={iconStyles} />
      </button>
    </div>
  );
};
