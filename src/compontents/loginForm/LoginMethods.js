import GoogleButton from 'react-google-button'
import { Box } from '@mui/material';
import './LoginMethods.css'

function LoginFrom() {
  return (
    <>
      <Box className="login-method">
        <GoogleButton
          className="login-button-spacing"
          onClick={() => { console.log('Google button clicked') }}
        />
      </Box>
    </>
  );
}

export default LoginFrom;
