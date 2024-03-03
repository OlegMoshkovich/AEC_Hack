import React, {useState} from 'react'
import './App.css';
import Map from './Map';
import useStore from './Store';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AppBar from './AppBar'
import Drawer from './SideDrawer3'
import Dialog from './Dialog'
import NotesList from './NotesList'
import PropertiesList from './PropertiesList'
import VersionPanel from './VersionPanel'
import TreePanel from './TreePanel'
import MobileDrawer from './DrawerMobile'
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';
import Circle from './Circle';
import ChatUI from './ChatUI'
import ChatIcon from '@mui/icons-material/Chat';



const AboutShare = () => {
  return(
    <Stack sx={{height: '220px', overflow: 'scroll', paddingTop: '20px'}}>
    <Typography variant='body1' color='default'>
      Share - 3D integration environment.
    </Typography>
    <Typography variant='body1'>
      Upload your 3D/CAD/BIM model, position the camera and share the link.
    </Typography>
    <Typography variant='body1'>
      With "Share" link everyone has access to the same context in digital space.
    </Typography>
  </Stack>
  )

}

const AboutImagine = () =>{
  return(
    <Stack sx={{height: '220px', overflow: 'scroll', paddingTop: '20px'}}>
      <Typography variant='body1' color='default' >
        Imagine - AI renderer.
      </Typography>
      <Typography variant='body1'>
        Upload your model to "Share", position the camera and grab "Share" link.
      </Typography>

      <Typography variant='body1'>

        Paste the link&nbsp;
        <Link href="https://discord.com/channels/853953158560743424/1126526910495740005" color="inherit">
          to discord
        </Link>&nbsp;and input a prompt, our copilot will generate a rendering using AI model.
      </Typography>
    </Stack>
  )
}

const AboutRepo = () =>{
  return(
    <Stack sx={{height: '220px', overflow: 'scroll', paddingTop: '20px'}}>
    <Typography variant='body1' color='default'>
      We are open source.
    </Typography>
    <Typography variant='body1'>
      Please visit  &nbsp;
      <Link href="https://github.com/bldrs-ai/Share" color="inherit">
      GitHub
      </Link>
    , give us a star, fork "Share" and  contribute to the project.
    </Typography>
    </Stack>
  )
}

function App({changeTheme, darkTheme}) {
  const {
    rightDrawer,
    leftDrawer,
    toggleRightDrawer  } = useStore();

  const {showComments, toggleShowComments} = useStore();
  const {showComponents} = useStore();
  const [showChatUI, setShowChatUI] = useState(false)
  const {circles} = useStore();
  const {setCircles} = useStore();
  const isMobile = useMediaQuery('(max-width:600px)');

  const PropertiesButtons = () => {
    return(
      <IconButton aria-label="comments" size='small'>
        <AddIcon fontSize='small'/>
      </IconButton>
    )
  }

  const handleWindowClick = (e) => {
    // Get the click coordinates
    const x = e.clientX;
    const y = e.clientY;

    // Create a new circle
    const newCircle = <Circle key={`${Date.now()}-circle`} x={x} y={y} />;

    // Add the new elements to the state
    setCircles([...circles, newCircle]);
  };


  return (
    <>
    <AppBar darkTheme={darkTheme} changeTheme={changeTheme}/>
    {!isMobile &&
      <Drawer
        topPanelName={'Properties'}
        topPanel={<PropertiesList/>}
        topPanelButton={ <PropertiesButtons/>}
        side={'right'}
        isOpen={rightDrawer}
        setIsOpen={toggleRightDrawer}
        showFirstPanel={true}
        showSecondPanel={false}
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

      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed',  left: leftDrawer ? '288px': '18px', top: '67px', height:'88%', zIndex:100}}
      >
          {!isMobile &&
          <Stack spacing={0}>
          </Stack>
          }
          <Dialog
            iconButton={true}
            tabs={true}
            tabList={['Share', 'Imagine', 'Repo']}
            dialogTitle={
            <Stack
            alignItems={'center'}
            spacing={2}
            >
                {/* <Logo/> */}
                <Typography variant={'body2'}>
                  BLDRS.AI
                </Typography>
              </Stack>
            }
            dialogContent1={
              <AboutShare/>
            }
            dialogContent2={
              <AboutImagine/>
            }
            dialogContent3={
              <AboutRepo/>
            }
            icon={<InfoOutlinedIcon size='inherit' color='default'/>}
          />
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed', right: (rightDrawer && !isMobile) ? '300px' : '20px', top: '67px', height:'88%'}}
      >
        {!isMobile &&
          <Stack spacing={0}>
            <Tooltip placement={'left'} title={'Information'}>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={()=>toggleRightDrawer()}
            >
              <MenuOutlinedIcon size='inherit' />
            </IconButton>
            </Tooltip>
          </Stack>
        }

        <IconButton
          size="small"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          onClick={()=>setShowChatUI(!showChatUI)}
        >
          <ChatIcon size='inherit' color={showChatUI ? "primary" : "default"}/>
        </IconButton>
      </Stack>

      {(showChatUI && !isMobile) &&
        <Box
        sx={{
          position: 'fixed',
          bottom: '3%',
          right: rightDrawer ? '350px' : '70px',
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
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        // onClick={showComments ? (e)=>handleWindowClick(e) : ()=>{}}
        sx={{
          position:'absolute',
          width:'100%',
          height: '100%',
          backgroundColor: `lightGrey`,
          // cursor: showComments ? 'context-menu':'default',
          zIndex:-100}}
      >
          <Map/>
      </Stack>
    </>
  );
}

export default App;
