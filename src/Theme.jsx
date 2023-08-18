import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';


const themeComponent = {
  spacing: 8,
  shape: {
    borderRadius: 10,
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
      main: '#3C5414',
    },
    secondary: {
      main: grey[900],
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
      main: '#3C5414',
    },
    secondary: {
      main: grey[100],
    },
    background: {
      paper: grey[900],  // Change to your desired color
    },
  },
  ...themeComponent,
})



export { lightTheme, darkTheme };
