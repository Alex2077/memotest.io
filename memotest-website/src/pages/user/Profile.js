import { useContext, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
//import { updateProfile } from './actions';
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  CircularProgress,
  Alert,
  Paper
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';
import { boxStyle, buttonStyle, inputStyle } from '../../components/material/Theme';
import { AuthContext } from '../../context/AuthContext';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Profile({ 
  initialData = {
    name: '',
    email: ''
  }
}) {

  const { user } = useContext(AuthContext);

  const [state, formAction] = useFormState(null, null);
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    name: user.email,
    email: user.email,
  });

  const profileBoxStyle = { ...boxStyle, maxWidth: 800, mx: 'auto', p: 4, my: 4 };
  const formInputStyle = { ...inputStyle };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Paper elevation={3} sx={profileBoxStyle}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Profile Settings
      </Typography>
      
      {state?.success && (
        <Alert severity="success" sx={{ mb: 4 }}>
          Profile updated successfully!
        </Alert>
      )}
      
      <Box component="form" action={formAction} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
          <Avatar
            src={avatar || 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png'}
            sx={{ width: 80, height: 80 }}
          />
          <Button
            component="label"
            variant="outlined"
            sx={{backgroundColor: '#FFFFFF', color: '#92D050', borderColor: '#92D050',}}
            startIcon={<CloudUploadIcon />}
          >
            Upload Avatar
            <VisuallyHiddenInput 
              type="file" 
              name="avatar"
              onChange={handleAvatarChange}
              accept="image/*"
            />
          </Button>
        </Box>

        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={formInputStyle}
          fullWidth
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={formInputStyle}
          fullWidth
          required
        />

        {/*
        <TextField
          label="Bio"
          name="bio"
          value={formData.email}
          onChange={handleChange}
          sx={formInputStyle}
          multiline
          rows={4}
          fullWidth
        />
        */}

        <SubmitButton />
      </Box>
    </Paper>
  );
}

function SubmitButton() {

  const saveButtonStyle = { ...buttonStyle, alignSelf: 'flex-end' };
  const { pending } = useFormStatus();
  
  return (
    <Button
      type="submit"
      variant="contained"
      disabled={pending}
      startIcon={pending ? <CircularProgress size={20} /> : <EditIcon />}
      sx={ saveButtonStyle }
    >
      {pending ? 'Saving...' : 'Save Changes'}
    </Button>
  );
}