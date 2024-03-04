import AppBar from './AppBar';
import Box from '@mui/material/Box';
import ChatUI from './ChatUI';
import CircularProgress from '@mui/material/CircularProgress';
import Close from '@mui/icons-material/Close';
import Drawer from './SideDrawer3';
import IconButton from '@mui/material/IconButton';
import Map from './MapBox';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileDrawer from './DrawerMobile';
import PropertiesList from './PropertiesList';
import React, { useState, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStore from './Store';
import {useTheme} from '@mui/material/styles';
import './App.css';

import './App.css';

function App({ changeTheme, darkTheme }) {
  const {
    rightDrawer,
    toggleRightDrawer,
    showViewer
  } = useStore();

  const [showChatUI, setShowChatUI] = useState(false);
  const [viewerLoading, setViewerLoading] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const mapComponentRef = useRef();

  const PropertiesButtons = () => (
    <IconButton aria-label="add property" size='small'>
      <AddIcon fontSize='small'/>
    </IconButton>
  );

  const triggerGoToLocation = (lat, lang) => {
    mapComponentRef.current?.goToLocation(lat, lang);
  };

  return (
    <>
      <AppBar darkTheme={darkTheme} changeTheme={changeTheme} onGoToLocation={triggerGoToLocation} />
      {!isMobile && (
        <Drawer
          topPanelName={'Info'}
          topPanel={<PropertiesList />}
          topPanelButton={<PropertiesButtons />}
          side={'right'}
          isOpen={rightDrawer}
          setIsOpen={toggleRightDrawer}
          showFirstPanel={true}
          showSecondPanel={false}
        />
      )}
      {isMobile && (
        <MobileDrawer panels={[<PropertiesList />]} />
      )}
      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.background.default,
          zIndex: -100
        }}
      >
        <Map ref={mapComponentRef} />
      </Box>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          position: 'fixed',
          right: rightDrawer && !isMobile ? '400px' : '20px',
          top: '77px',
          height: isMobile ? '78%' : '82%',
          // border:'1px solid red'
        }}
      >
        {!isMobile && (
          <Tooltip placement={'left'} title={'Information'}>
            <IconButton
              onClick={() => toggleRightDrawer()}
              aria-label="toggle drawer"
              color={rightDrawer ? 'primary' : 'default'}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
        <IconButton
          onClick={() => setViewerLoading(!viewerLoading)}
          aria-label="loading viewer"
        />
        <IconButton
          onClick={() => setShowChatUI(!showChatUI)}
          aria-label="toggle chat UI"
          sx={{ border: '1px solid #F2B138' }}
        >
          <Typography variant='overline' sx={{ width: 30, height: 30, fontWeight: 'bold' }}>
            GPT
          </Typography>
        </IconButton>
      </Stack>

      {showChatUI && !isMobile && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '7%',
            right: rightDrawer ? '460px' : '80px',
          }}
        >
          <ChatUI closeWindow={() => setShowChatUI(false)} />
        </Box>
      )}
      {showChatUI && isMobile && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '21%',
            right: '20px',
          }}
        >
          <ChatUI closeWindow={() => setShowChatUI(false)} />
        </Box>
      )}
        {
          showViewer &&
        <Stack
        id='viewer'
        spacing={1}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          position:'absolute',
          top:120,
          left:10,
          width:360,
          height:360,
          color:'white',
          backgroundColor:'#0D0D0D',
          borderRadius:'20px'}}>
            <CircularProgress color='primary' />
            <Typography variant='overline' >Loading a model</Typography>
          </Stack>
        }
      {viewerLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 120,
            left: 10,
            width: 360,
            height: 360,
            backgroundColor: '#0D0D0D',
            borderRadius: '20px'
          }}
        >
          <IconButton
            onClick={() => setViewerLoading(false)}
            aria-label="close viewer"
            sx={{ position: 'absolute', right: '10px', top: '18px' }}
          >
            <Close />
          </IconButton>
          <iframe
            style={{ borderRadius: '10px', border: '2px solid #F2B138' }}
            width="360"
            height="360"
            frameBorder="0"
            src="https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/bldrs-ai/test-models/main/MC-ARCH_2019_w_rooms.ifc/106/2701979/116/211/178372/178543#c:102.999,12.491,124.849,-15.437,-23.396,-9.741"
            title="Model Viewer"
          >
            Your browser does not support iframes.
          </iframe>
        </Box>
      )}
    </>
  );
}

export default App;
