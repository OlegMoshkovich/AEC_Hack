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
import {lightTheme, darkTheme} from './Theme'

const Sample = () =>{
const [dark, setDark] = useState(false)
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


