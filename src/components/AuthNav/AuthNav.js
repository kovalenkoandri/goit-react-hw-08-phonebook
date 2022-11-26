import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Icon } from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';
import { iconStyles } from 'index.js';
export const AuthNav = () => {
   
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
        <Icon
          as={MdLogin}
          sx={iconStyles}
        />
      </NavLink>
    </div>
  );
};
