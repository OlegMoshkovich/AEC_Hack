import React from 'react'
import './App.css';
import ComponentLibrary from './ComponentLibrary'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App({changeTheme, darkTheme}) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ComponentLibrary changeTheme={changeTheme} darkTheme={darkTheme} />,
    },
    {
      path: "/layout",
      element: <div>layout</div>,
    },

  ]);

  return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
