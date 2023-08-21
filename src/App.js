import React, {useState} from 'react'
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
import SideDrawer2 from './SideDrawer2'
import AppBar from './AppBar'
import Drawer from './SideDrawer2'
import NotesList from './NotesList'
import PropertiesList from './PropertiesList'
import Tree from './Tree'
import VersionPanel from './VersionPanel'



function App({changeTheme, darkTheme}) {
  const[left, setLeft] = useState(true)
  const[right, setRight] = useState(true)

  return (
    <>
    <AppBar/>
    <Drawer
      topPanel={<NotesList/>}
      bottomPanel={<PropertiesList/>}
      side={'right'}
      isOpen={right}/>
    <Drawer
      topPanel={<Tree/>}
      bottomPanel={<VersionPanel/>}
      side={'left'}
      isOpen={left}/>
    <ComponentLibrary/>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed',  left: left ? '280px': '14px', top: '70px', height:'88%'}}
      >
      <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          onClick={()=>setLeft(!left)}
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
        sx={{position:'fixed', right: right ? '300px' : '20px', top: '70px', height:'88%'}}
      >
      <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          onClick={()=>setRight(!right)}
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
