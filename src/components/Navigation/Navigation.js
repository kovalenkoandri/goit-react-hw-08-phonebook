import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import { Icon } from '@chakra-ui/react';
import { MdOutlineRequestPage, MdContactPage } from 'react-icons/md';
import { iconStyles } from 'styles/iconStyles';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
        <Icon as={MdOutlineRequestPage} sx={iconStyles} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
          <Icon as={MdContactPage} sx={iconStyles} />
        </NavLink>
      )}
    </nav>
  );
};
