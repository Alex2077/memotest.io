
const primaryColor = '#92D050';
const textColor = '#4F545D';
const bgFormColor = '#F6F8Fa';
const borderFormColor = '#eaecef';
const txtFormColor = '#24292e';

export const boxStyle = {
  backgroundColor: bgFormColor,
  color: txtFormColor,
  border: '1px',
  borderStyle: 'solid',
  borderColor: borderFormColor,
  borderRadius: '6px',
  boxShadow: '0',
}

export const inputStyle = {
  backgroundColor: '#FFFFFF',
  color: txtFormColor,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.23)"
    },
    "&.Mui-focused fieldset": {
      border: '2px',
      borderStyle: 'solid',
      borderColor: '#0366d6',
    }
  }
}

export const buttonStyle = { 
  backgroundColor: primaryColor,
  color: '#FFFFFF',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '6px',
  fontSize: '16px',
  fontFamily: ['"Arial"', 'sans-serif'].join(','),
  marginTop: '15px',
  boxShadow: '0',
  textTransform: 'capitalize',
  '&:hover': { 
    opacity: '0.9',
    boxShadow: '0' 
  } 
};