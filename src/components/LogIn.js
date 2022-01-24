import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import StyledLog from '../components/styles/Log.styled';
import { makeStyles } from "@material-ui/core/styles";
// import firebase  from '../Firebase/firebase';
import {Grid, Box, Typography ,Avatar, CssBaseline, Paper, TextField, Checkbox, Button,  FormControlLabel,  Link} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    background: "rgb(232, 241, 250)"
  }

}));

 const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  function LogIn(){
	  const classes = useStyles();
	  return(
		<>
			<h1>Login to Your Accound</h1>
			 <Grid container component="main" sx={{ height: '100vh' }}>
        
     
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
				{/* <StyledLog> */}

              <TextField
			  InputProps={{ className: classes.input }}
			  color="secondary"
			  margin="normal"
			  required
			  fullWidth
			  id="email"
			  label="Email Address"
			  name="email"
                autoComplete="email"
	  variant="filled"
              />
              <TextField
      InputProps={{ className: classes.input }}

			  color="secondary"
			  variant="filled"
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
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
              />
              <Button
			  color="secondary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link color="secondary" href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
			  <Button
			  color="secondary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Sing in with Google
              </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
			</>
	)
}
export default LogIn;