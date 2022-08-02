import Header from './components/Header';
import GlobalStyles from './components/styles/Global';
import Footer from './components/Footer';
import React from 'react';
import darkScrollbar from '@mui/material/darkScrollbar';
import ScrollBar from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import 'firebase/firestore';
import 'firebase/auth';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#8a0940',
      light: '#ffffff',
    },
    secondary: {
      main: '#3f061c',
    },
    text: {
      primary: '#fff9f9',
      secondary: '#f1efef',
      disabled: 'rgba(251,248,248,0.38)',
      hint: 'rgba(239,234,234,0.38)',
    },
    background: {
      default: '#000000',
      paper: '#333333',
    },
    divider: 'rgba(0,0,0,0.12)',
    error: {
      main: '#ffffff',
    },
    warning: {
      main: '#ffffff',
    },
    info: {
      main: '#f321b1',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '10px',
        },
        '*::-webkit-scrollbar-track': {
          background: '#E4EFEF',
        },
        '*::-webkit-scrollbar-thumb': {
          background: '#1D388F61',
          borderRadius: '2px',
        },
      },
    },

    // body: theme.palette.mode === 'dark' ? darkScrollbar() : null,

    MuiButton: {
      root: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
    MuiAppBar: {
      color: 'inherit',
    },
  },
  typography: {
    fontSize: 14,
  },
  spacing: 8,
  direction: 'rtl',
  shape: {
    borderRadius: 4,
  },
});

<GlobalStyles
  styles={{
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  }}
/>;

function App() {
  return (
    <>
      <BrowserRouter>
        {console.log('ok')}
        <ScrollBar styles={{ ...darkScrollbar() }} />
        {console.log('eloasd')}
        <CssBaseline enableColorScheme />

        <ThemeProvider theme={theme}>
          {/* <Box
          m={0}
          sx={{
            color: 'white',
          }}
        > */}
          <>
            <GlobalStyles />
            <Header />
            <Footer />
          </>
          {/* </Box> */}
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
//ssh test

export default App;
