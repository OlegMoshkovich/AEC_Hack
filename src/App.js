import React, {useState} from 'react'
import './App.css';
import useStore from './Store';
import ComponentLibrary from './ComponentLibrary'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import SegmentIcon from '@mui/icons-material/Segment';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import AppBar from './AppBar'
import Drawer from './SideDrawer2'
import Dialog from './Dialog'
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
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Logo from './Logo'
import ChatUI from './ChatUI'

const AboutShare = () => {
  return(
    <Stack sx={{height: '200px', overflow: 'scroll', paddingTop: '20px'}}>
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
    <Stack sx={{height: '200px', overflow: 'scroll', paddingTop: '20px'}}>
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
    <Stack sx={{height: '200px', overflow: 'scroll', paddingTop: '20px'}}>
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
    toggleRightDrawer,
    toggleLeftDrawer
  } = useStore();

  const {showComments, toggleShowComments} = useStore();
  const {showComponents} = useStore();
  const [showChatUI, setShowChatUI] = useState(false)
  const {circles} = useStore();
  const {setCircles} = useStore();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  const NoteButtons = () =>{
    return(
      <Stack
      direction='row'
      spacing={1}
    >
      <IconButton aria-label="comments" size='small'>
        <VisibilityOutlinedIcon fontSize='small' onClick={toggleShowComments} color={showComments ? 'primary' : 'default'}/>
      </IconButton>
      {/* <IconButton aria-label="comments" size='small'>
        <AddCommentOutlinedIcon fontSize='small' onClick={toggleShowComments} color={showComments ? 'primary' : 'default'}/>
      </IconButton> */}
    </Stack>
    )
  }
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

  const handleWindowClick = (e) => {
    // Get the click coordinates
    const x = e.clientX;
    const y = e.clientY;

    // Create a new circle
    const newCircle = <Circle key={`${Date.now()}-circle`} x={x} y={y} />;

    // Add the new elements to the state
    setCircles([...circles, newCircle]);
  };

  const closeWindow = () => {
    setShowChatUI(false);
  };

  return (
    <>
    <AppBar darkTheme={darkTheme} changeTheme={changeTheme}/>
    {!isMobile &&
      <Drawer
        topPanelName={'Notes'}
        topPanel={<NotesList/>}
        topPanelButton={ <NoteButtons/>}
        bottomPanelName={'Properties'}
        bottomPanel={<PropertiesList/>}
        bottomPanelButton={<PropertiesButtons/>}
        side={'right'}
        isOpen={rightDrawer}
        setIsOpen={toggleRightDrawer}
        isFirstPanelInput={false}
        isSecondPanelInput={false}
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
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        onClick={showComments ? (e)=>handleWindowClick(e) : ()=>{}}
        sx={{
          position:'absolute',
          width:'100%',
          height: '100%',
          backgroundColor: `${theme.palette.background.default}`,
          cursor: showComments ? 'context-menu':'default',
          zIndex:-100}}
      >
        {darkTheme ?
          <img
            alt="bldrs"
            src={`${process.env.PUBLIC_URL}/engine_dark.png`}
            style={{
              maxWidth: '70%',
              zIndex:-100}}
          /> :
          <img
          alt="bldrs"
          src={`${process.env.PUBLIC_URL}/engine_light.png`}
          style={{
            maxWidth: '70%',
            zIndex:-100}}
        />
        }
      </Stack>

      <div>
        {showComments && circles}
      </div>

      {
        showComponents && <ComponentLibrary changeTheme={changeTheme} darkTheme={darkTheme}/>
      }
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{position:'fixed',  left: leftDrawer ? '288px': '18px', top: '67px', height:'88%', zIndex:100}}
      >
          {!isMobile &&
          <Stack spacing={0}>
            <Tooltip placement={'right'} title={'Spatial Navigation'}>
              <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={()=>toggleLeftDrawer()}
              >
                <SegmentIcon size='inherit' color={leftDrawer ? 'primary' : 'default'}/>
              </IconButton>
            </Tooltip>
            {/* <Tooltip placement={'right'} title={'Version history'}>
              <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={()=>toggleLeftDrawer()}
              >
                <HistoryIcon size='inherit' color='default'/>
              </IconButton>
            </Tooltip> */}
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
                <Logo/>
                <Typography variant={'body2'}>
                  BLDRS
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
              <MenuOutlinedIcon size='inherit' color={rightDrawer ? 'primary' : 'default'}/>
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
          <AutoFixHighOutlinedIcon size='inherit' color={showChatUI ? "primary" : "default"}/>
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
    </>
  );
}

export default App;
