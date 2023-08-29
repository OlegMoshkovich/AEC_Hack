import React, {useState} from 'react'
import './App.css';
import ComponentLibrary from './ComponentLibrary'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SegmentIcon from '@mui/icons-material/Segment';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import AppBar from './AppBar'
import Drawer from './SideDrawer2'
import NotesList from './NotesList'
import PropertiesList from './PropertiesList'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import VersionPanel from './VersionPanel'
import TreePanel from './TreePanel'
import MobileDrawer from './DrawerMobile'
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from './Logo'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/Add';



function App({changeTheme, darkTheme}) {
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)
  const [componentsVisible, setComponentsVisible] = useState(false)
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
    <AppBar/>
    {!isMobile &&
      <Drawer
      topPanel={<NotesList/>}
      topPanelName={'Notes'}
      topPanelButton={
        <IconButton aria-label="comments" size='small'>
          <AddCommentOutlinedIcon fontSize='small'/>
        </IconButton>
      }
      bottomPanel={<PropertiesList/>}
      bottomPanelName={'Properties'}
      bottomPanelButton={
        <IconButton aria-label="comments" size='small'>
          <AddIcon fontSize='small'/>
        </IconButton>
      }
      side={'right'}
      isOpen={right}
      setIsOpen={()=>setRight()}/>
    }
    {!isMobile && <Drawer
      topPanel={<TreePanel/>}
      topPanelName={'Navigation'}
      topPanelButton={
        <IconButton aria-label="comments" size='small'>
          <AddOutlinedIcon fontSize='small'/>
        </IconButton>
      }
      bottomPanel={<VersionPanel/>}
      bottomPanelName={'Versions'}
      bottomPanelButton={
        <IconButton aria-label="comments" size='small'>
          <SaveOutlinedIcon fontSize='small'/>
        </IconButton>
      }
      side={'left'}
      isOpen={left}
      setIsOpen={()=>setLeft()}/>
    }
      {isMobile && <MobileDrawer panels={[<NotesList/>, <PropertiesList/>,<VersionPanel/>]}/>}
    <Container
      // maxWidth="sm"
      sx={{marginTop: '140px', marginBottom: '20px', width:'300px'}}
    >
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button disableFocusRipple={true} disableRipple={true} onClick={()=>setComponentsVisible(!componentsVisible)}>
        <Logo scale={4} />
      </Button>
      <Typography variant={'overline'} color='primary'
      sx={{marginTop: '30px'}}
      >bldrs.ai</Typography>
    </Stack>
    </Container>
    {
      componentsVisible && <ComponentLibrary changeTheme={changeTheme} darkTheme={darkTheme}/>
    }
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed',  left: left ? '288px': '14px', top: '70px', height:'88%', zIndex:100}}
      >
        {!isMobile &&
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
        }
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
        {!isMobile &&
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
        }

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
