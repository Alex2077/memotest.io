import { MenuItem } from "@mui/material";
import AccountBox from '@mui/icons-material/AccountBox';


const BarMenuItem = ({icon: Icon = AccountBox, onClick, text='?'}) => {
  return(
    <MenuItem 
      onClick={onClick}
      sx={{ 
        '&:hover': { backgroundColor: 'action.hover' },
        display: 'flex',
        alignItems: 'center'
      }}>
      <Icon sx={{mr:1}} />
      {text}
    </MenuItem>
  );
}

export default BarMenuItem;