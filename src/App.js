import React, {useState} from 'react'
import './App.css';
import useStore from './Store';
import ComponentLibrary from './ComponentLibrary'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
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
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import Circle from './Circle';


function App({changeTheme, darkTheme}) {
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)
  const {showComments} = useStore();
  const {showComponents} = useStore();
  const {notes} = useStore();
  const {setNotes} = useStore();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  const handleWindowClick = (e) => {
    // Get the click coordinates
    const x = e.clientX;
    const y = e.clientY;

    // Create a new circle
    const newNote = <Circle key={`${Date.now()}-circle`} x={x} y={y} />;

    // Create a new card


    // Add the new elements to the state
    setNotes([...notes, newNote]);
  };



  return (
    <>
    <AppBar darkTheme={darkTheme} changeTheme={changeTheme}/>
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
      topPanelName={'Spatial navigation'}
      topPanelButton={
        <IconButton aria-label="comments" size='small'>
          <AddOutlinedIcon fontSize='small'/>
        </IconButton>
      }
      bottomPanel={<VersionPanel/>}
      bottomPanelName={'Timeline'}
      bottomPanelButton={
        <IconButton aria-label="comments" size='small'>
          <SaveOutlinedIcon fontSize='small'/>
        </IconButton>
      }
      side={'left'}
      isOpen={left}
      setIsOpen={()=>setLeft()}/>
    }
      {isMobile && <MobileDrawer panels={[<TreePanel/>, <PropertiesList/>,<NotesList/>,<VersionPanel/>]}/>}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        onClick={showComments ? (e)=>handleWindowClick(e) : ()=>{}}
        sx={{
          position:'absolute',
          width:'100%',
          height: isMobile ? '30%' : '100%',
          backgroundColor: `${theme.palette.background.default}`,
          cursor: 'grabbing',
          zIndex:-100}}
      >
        {darkTheme ?
          <img
            alt="bldrs"
            src={`${process.env.PUBLIC_URL}/engine_dark.png`}
            style={{
              maxWidth: '70%',
              zIndex:-100}}
          />:  <img
          alt="bldrs"
          src={`${process.env.PUBLIC_URL}/engine_light.png`}
          style={{
            maxWidth: '70%',
            zIndex:-100}}
        />
        }
      </Stack>
      <div>
        {showComments && notes}
      </div>
    {
      showComponents && <ComponentLibrary changeTheme={changeTheme} darkTheme={darkTheme}/>
    }
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed',  left: left ? '288px': '14px', top: '64px', height:'88%', zIndex:100}}
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
