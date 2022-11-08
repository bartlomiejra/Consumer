import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import StyledLog from '../components/styles/Log.styled';

// import {pink } from '@material-ui/core/colors';
import { pink } from '@mui/material/colors';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { makeStyles } from '@mui/material/styles';
import {
  Grid,
  Box,
  Typography,
  Avatar,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Link,
} from '@mui/material';
// import { auth } from '../../components/firebase/firebase';
import { auth } from '../../../Firebase/firebase';

// const styles = (theme) => ({
//   textField: {
//     width: '90%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     paddingBottom: 0,
//     marginTop: 0,
//     fontWeight: 500,
//     color: pink[800],
//   },
//   input: {
//     color: 'white',
//   },
// });

function LogIn() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <Grid component="main" sx={{ height: '100vh', alignItems: 'center' }}>
        <Box
          sx={{
            padding: '10px',
            // backgroundColor: '#333333',
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* <StyledLog> */}

            <TextField
              onChange={(e) => setLoginEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setLoginPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* </StyledLog> */}
            <FormControlLabel
              labelStyle={{ color: 'white' }}
              iconStyle={{ fill: 'white' }}
              control={
                <Checkbox
                  labelStyle={{ color: 'white' }}
                  iconStyle={{ fill: 'white' }}
                  //  checked={pink}
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600],
                    },
                  }}
                  value="remember"
                />
              }
              label="Remember me"
            />

            <Button
              color="secondary"
              fullWidth
              variant="contained"
              onClick={login}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link color="secondary" href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Button
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sing in with Google
              </Button>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            padding: '10px',
            // backgroundColor: '#333333',
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* <StyledLog> */}

            <TextField
              onChange={(e) => setRegisterEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setRegisterPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              color="secondary"
              onClick={register}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link color="secondary" href="#" variant="body2">
                  {'Do you have an account? Sign in'}
                </Link>
              </Grid>
              <Button
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sing up with Google
              </Button>
              Log as: {user?.email}
              <button onClick={logout}>Logout</button>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
export default LogIn;
