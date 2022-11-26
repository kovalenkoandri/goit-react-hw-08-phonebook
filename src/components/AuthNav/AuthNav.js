import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Icon } from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';

export const AuthNav = () => {
   const basicBoxStyles = {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     textAlign: 'center',
     boxSize: '250px',
     color: 'white',
     textShadow: '0 0 20px black',
     fontWeight: 'bold',
     fontSize: '20px',
     px: 4,
     background:
       'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',
   };
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
        <Icon as={MdLogin} w={8} h={8} color="red.500" m={1} />
      </NavLink>
    </div>
  );
};
