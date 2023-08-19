import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import {ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import useStore from './Store';

const Sample = () =>{
const [dark, setDark] = useState(false)
const { borderRadius } = useStore();
const { themeScheme } = useStore()

const colors = [
  {primary: '#253B1E'},
  {primary: '#6D8752'},
  {primary: '#70AB32'},
  {primary: '#30443C'},
]
const themeComponent = {
  spacing: 8,
  shape: {
    borderRadius: borderRadius,
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: 'background' },
          style: ({ ownerState, theme }) => ({
            boxShadow: theme.shadows[ownerState.elevation],
            padding:'1em',
            overflow:'scroll',
          })
        },
      ]
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          textAlign: 'center',
        }
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
        }
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
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
}
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors[themeScheme].primary,
    },
    secondary: {
      main: grey[700],
    },
    background: {
      paper: grey[100],  // Change to your desired color
    },
  },
  ...themeComponent,
})
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors[themeScheme].primary,
    },
    secondary: {
      main: grey[500],
    },
    background: {
      paper: grey[900],  // Change to your desired color
    },
  },
  ...themeComponent,
})

  return(
    <React.StrictMode>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          <App changeTheme={() => setDark(!dark)} darkTheme={dark}/>
        </ThemeProvider>
      </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


