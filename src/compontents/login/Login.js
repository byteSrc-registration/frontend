import './Login.css';
import { Box } from '@mui/material';
import LoginForm from "../loginForm/LoginMethods";

function Login() {
  return (
    <>
      <Box className="container">
        <Box className="login-container">
          <Box className="login-content">
            <h1>
              byteSrc
            </h1>
            <p>
              Please sign in using one of the methods below.
            </p>
            <LoginForm/>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
