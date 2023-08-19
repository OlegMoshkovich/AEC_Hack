import React from 'react'
import './App.css';
import ComponentLibrary from './ComponentLibrary'
import PrimaryAppBar from './AppBar'


function App({changeTheme, darkTheme}) {
  return (
    <>
      <PrimaryAppBar changeTheme={changeTheme} darkTheme={darkTheme}/>
      <ComponentLibrary changeTheme={changeTheme} darkTheme={darkTheme}/>
    </>
  );
}

export default App;
