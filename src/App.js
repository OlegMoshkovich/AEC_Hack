import React from 'react'
import './App.css';
import ComponentLibrary from './ComponentLibrary'


function App({changeTheme, darkTheme}) {
  return (
    <ComponentLibrary changeTheme={changeTheme} darkTheme={darkTheme}/>
  );
}

export default App;
