import { useContext, useState } from "react";
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import AccountBox from '@mui/icons-material/AccountBox'; 
import ManageAccounts from '@mui/icons-material/ManageAccounts'; 
import Logout from '@mui/icons-material/Logout'; 
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import BarMenuItem from "./BarMenuItem";

const LoggedInNavbar = () => {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout} = useContext(AuthContext);

  //const handleChange = (event) => {
    //setAuth(event.target.checked);
  //};

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/profile');
    handleClose();
  };

  const userLogout = () => {
    logout();
  };

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #e0e0e0',
          color: '#4F545D',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
        <Container maxWidth="lg">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    sx={{ ml: 'auto', color: 'black' }}
                >
                <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                  <BarMenuItem onClick={handleProfile} icon={AccountBox} text="Profile" />
                  <BarMenuItem onClick={handleClose} icon={ManageAccounts} text="My account" />
                  <BarMenuItem onClick={userLogout} icon={Logout} text="Sign out" />
                </Menu>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default LoggedInNavbar;