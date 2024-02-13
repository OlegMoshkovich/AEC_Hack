import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Logo from './Logo'
import Stack from '@mui/material/Stack'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import AutocompleteExample from './AutoComplete'
import AvatarGroup from './AvatarGroup'
import useStore from './Store';
import Dialog from './Dialog'
import {Projects} from './Projects'

const searchElements = [
  { title: 'Surfaces' },
  { title: 'Case' },
  { title: 'Gears' },
  { title: 'Electonics' },
]
function Recent(){
  return(
    <Stack
    direction='column'
    justifyContent="center"
    spacing={1}
    sx={{overflow: 'scroll'}}
  >
  <Typography variant='overline' sx={{textAlign: 'center', paddingTop: '10px'}}>
    Samples
  </Typography>
    <Chip label="Momentum" onClick={()=>console.log('here')} variant='outlined'/>
    <Chip label="Schneestock" onClick={()=>console.log('here')} variant='outlined'/>
    <Chip label="Momentum" onClick={()=>console.log('here')} variant='filled' color='primary'/>
  <Typography variant='overline' sx={{textAlign: 'center', paddingTop: '10px'}}>
    Recent
  </Typography>
    <Chip label="Momentum" onClick={()=>console.log('here')} variant='outlined'/>
    <Chip label="Schneestock" onClick={()=>console.log('here')} variant='outlined'/>
    <Chip label="Momentum" onClick={()=>console.log('here')} variant='outlined'/>
  </Stack>
  )
}

export default function PrimaryAppBar({darkTheme, changeTheme}) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const {toggleShowComponents} = useStore();
  const {toggleShowComments, showComments} = useStore();
  const {toggleRightDrawer} = useStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color='default'
        elevation={0}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        size='large'
      >
      <Toolbar>
        <Stack
          direction='row'
          alignItems="center"
          spacing={1}
          sx={{marginLeft:'-10px'}}
        >
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={toggleShowComponents}
          >
              <Logo scaled={true}/>
            </IconButton>
            <Dialog
              actionTitle={'OK'}
              buttonLabel={'Files'}
              buttonColor={'secondary'}
              tabs={true}
              tabList={['Projects','Recent']}
              dialogTitle={
                <Typography>
                  OPEN
                </Typography>
              }
              dialogContent2={
                <Recent/>
              }
              dialogContent1={
                <Projects/>
              }
            />
            <Tooltip title={'Add notes'} placement={'right'}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={
                  ()=>{
                     toggleRightDrawer()
                    toggleShowComments()
                  }
                }
              >
                <MapsUgcOutlinedIcon
                size='inherit'
                color= {showComments ? 'primary' : 'default'}
                />
              </IconButton>
            </Tooltip>
        </Stack>
        {!isMobile && <Stack
          direction='row'
          alignItems="center"
          justifyContent="center"
          sx={{width:'72%'}}
          spacing={1}
        >
          <AutocompleteExample title={"Search"} elements={searchElements}/>
        </Stack>
        }
        <Box sx={{ flexGrow: 1 }} />
          <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{marginRight:'-15px'}}
          >
          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={changeTheme}
            >
              {darkTheme ?
                <NightlightOutlinedIcon size='inherit' color='default'/>:
                <LightModeOutlinedIcon size='inherit' color='default'/>
              }
            </IconButton>
            {!isMobile && <AvatarGroup/>}
            <Button
              variant="contained"
              size="large"
              color='primary'
              disableElevation
              onClick={()=>window.open('https://bldrs.ai')}
            >
              Share
            </Button>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <PortraitOutlinedIcon size='inherit' color='default'/>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
