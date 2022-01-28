import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import StyledLog from '../components/styles/Log.styled';
// import {pink } from '@material-ui/core/colors';
import { pink } from '@mui/material/colors';

import { makeStyles } from "@material-ui/core/styles";
// import firebase  from '../Firebase/firebase';
import {Grid, Box, Typography ,Avatar, CssBaseline, Paper, TextField, Checkbox, Button,  FormControlLabel,  Link} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  input: {
    background: "rgb(232, 241, 250)"
  }

}));
const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        color: pink[800],
    },
    input: {
        color: 'white'
    }
});
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
			 <Grid  component="main" sx={{ height: '100vh', alignItems: "center" }}>
        
     
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
                  className={classes.textField}


                InputProps={{
        className: classes.input,
    }}
                      sx={{input: {color: '#fffffff'},
                    
                      input: {
    color: "#2EFF22"
  }
}}
                      
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

// color="secondary"
variant="outlined"
margin="normal"
required
fullWidth
name="password"
label="Password"
type="password"
id="password"
autoComplete="current-password"
InputProps={{ className: classes.input }}
				/>
				{/* </StyledLog> */}
              <FormControlLabel 
                  labelStyle={{color: 'white'}}
                  iconStyle={{fill: 'white'}}
                control={
                  
                  
                  <Checkbox 
                  labelStyle={{color: 'white'}}
  iconStyle={{fill: 'white'}}
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