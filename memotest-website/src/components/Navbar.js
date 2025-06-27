import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoggedInNavbar from '../pages/navbar/LoggedInNavbar';
import GuestNavbar from '../pages/navbar/GuestNavbar';
import './Navbar.css';

const Navbar = () => {

  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <LoggedInNavbar /> : <GuestNavbar />;
};

export default Navbar;