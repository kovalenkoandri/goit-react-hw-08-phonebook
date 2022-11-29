import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Icon } from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';
import { iconStyles } from 'styles/iconStyles';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        onClick={() => dispatch(logOut())}
        colorScheme="teal"
        size="md"
        variant="ghost"
      >
        Logout
        <Icon as={MdLogout} sx={iconStyles} />
      </Button>
    </div>
  );
};
