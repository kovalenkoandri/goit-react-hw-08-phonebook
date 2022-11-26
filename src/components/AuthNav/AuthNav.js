import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Icon } from '@chakra-ui/react';
import { MdLogin, MdAppRegistration } from 'react-icons/md';
import { iconStyles } from 'styles/iconStyles';
export const AuthNav = () => {
   
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
        <Icon as={MdAppRegistration} sx={iconStyles} />
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
        <Icon as={MdLogin} sx={iconStyles} />
      </NavLink>
    </div>
  );
};
