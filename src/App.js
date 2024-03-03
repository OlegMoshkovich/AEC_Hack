import React, {useState, useRef} from 'react'
import './App.css';
import useStore from './Store';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AppBar from './AppBar'
import Drawer from './SideDrawer3'
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
import ChatUI from './ChatUI'
import TextsmsIcon from '@mui/icons-material/Textsms';
import Map from './Map'


function App({changeTheme, darkTheme}) {
  const {
    rightDrawer,
    leftDrawer,
    toggleRightDrawer,
    toggleLeftDrawer,
    showViewer
  } = useStore();

  const [showChatUI, setShowChatUI] = useState(false)
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const mapComponentRef = useRef();

  const PropertiesButtons = () => {
    return(
      <IconButton aria-label="comments" size='small'>
        <AddIcon fontSize='small'/>
      </IconButton>
    )
  }
  const NavigationButtons = () =>{
    return(
      <IconButton aria-label="comments" size='small'>
        <AddOutlinedIcon fontSize='small'/>
      </IconButton>
    )
  }
  const TimelineButtons = () => {
    return(
      <IconButton aria-label="comments" size='small'>
          <SaveOutlinedIcon fontSize='small'/>
        </IconButton>
    )
  }

  const triggerGoToLocation = (lat, lang) => {
    if (mapComponentRef.current) {
      mapComponentRef.current.goToLocation(lat, lang);
    }
  };


  return (
    <>
    <AppBar darkTheme={darkTheme} changeTheme={changeTheme} onGoToLocation={triggerGoToLocation}/>
    {!isMobile &&
      <Drawer
        topPanelName={'Info'}
        topPanel={<PropertiesList/>}
        topPanelButton={<PropertiesButtons/>}
        side={'right'}
        isOpen={rightDrawer}
        setIsOpen={toggleRightDrawer}
        showFirstPanel={true}
        showSecondPanel={false}
      />
    }
    {!isMobile &&
      <Drawer
        topPanelName={'Spatial navigation'}
        topPanel={<TreePanel/>}
        topPanelButton={ <NavigationButtons/>}
        bottomPanelName={'Timeline'}
        bottomPanel={<VersionPanel/>}
        bottomPanelButton={<TimelineButtons/>}
        side={'left'}
        isOpen={leftDrawer}
        setIsOpen={toggleLeftDrawer}
        showFirstPanel={true}
        showSecondPanel={true}
      />
    }
    {isMobile &&
      <MobileDrawer
        panels={[
          <TreePanel/>,
          <PropertiesList/>,
          <NotesList/>,
          <VersionPanel/>]}
      />
    }
    {/* Image setup */}
      <Box
        sx={{
          position:'fixed',
          width:'100%',
          height: '100%',
          backgroundColor: `${theme.palette.background.default}`,
          zIndex:-100}}
      >
        <Map ref={mapComponentRef}/>
      </Box>

      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed', right: (rightDrawer && !isMobile) ? '400px' : '20px', top: '77px', height:'82%'}}
      >
        {!isMobile &&
          <Stack spacing={0}>
            <Tooltip placement={'left'} title={'Information'}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={()=>toggleRightDrawer()}
            >
              <MenuOutlinedIcon size='inherit' color={rightDrawer ? 'primary' : 'default'}/>
            </IconButton>
            </Tooltip>
          </Stack>
        }
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={()=>setShowChatUI(!showChatUI)}
        >
          <TextsmsIcon size='inherit' color={showChatUI ? "primary" : "default"}/>
        </IconButton>
      </Stack>

      {(showChatUI && !isMobile) &&
        <Box
        sx={{
          position: 'fixed',
          bottom: '7%',
          right: rightDrawer ? '450px' : '70px',
        }}
        >
          <ChatUI closeWindow={()=>setShowChatUI(false)}/>
        </Box>
      }

      {(showChatUI && isMobile) &&
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'fixed',
          top: '140px',
          width: '100%',
        }}
        >
          <ChatUI closeWindow={()=>setShowChatUI(false)}/>
        </Stack>
      }
      {
        showViewer &&
        <Box
        id='viewer'
        sx={{
          position:'absolute',
          top:120,
          left:10,
          width:360,
          height:360,
          backgroundColor:'#0D0D0D',
          borderRadius:'20px'}}>
          <iframe
            style={{borderRadius: '10px'}}
            src="https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/bldrs-ai/test-models/main/MC-ARCH_2019_w_rooms.ifc/106/2701979/116/211/178372/178543#c:102.999,12.491,124.849,-15.437,-23.396,-9.741" width="360" height="360" frameborder="0">
                Your browser does not support iframes.
          </iframe>
          </Box>
        }



    </>
  );
}

export default App;
