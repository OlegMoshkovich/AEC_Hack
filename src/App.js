import React from 'react'
import './App.css';
import ComponentLibrary from './ComponentLibrary'
import PrimaryAppBar from './AppBar'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SegmentIcon from '@mui/icons-material/Segment';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';


function App({changeTheme, darkTheme}) {
  return (
    <>
      <PrimaryAppBar changeTheme={changeTheme} darkTheme={darkTheme}/>
      <Box sx={{marginTop: '100px'}}>
        <ComponentLibrary changeTheme={changeTheme} darkTheme={darkTheme}/>
      </Box>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed', top: '70px', height:'88%'}}
      >
      <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <SegmentIcon size='inherit' color='default'/>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <InfoOutlinedIcon size='inherit' color='default'/>
        </IconButton>
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed', right: '14px', top: '70px', height:'88%'}}
      >
      <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <MenuOutlinedIcon size='inherit' color='default'/>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AutoFixHighOutlinedIcon size='inherit' color='default'/>
        </IconButton>
      </Stack>
    </>
  );
}

export default App;
