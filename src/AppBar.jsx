import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Logo from './Logo'
import Stack from '@mui/material/Stack'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import AutocompleteExample from './AutoComplete'
import AvatarGroup from './AvatarGroup'
import useStore from './Store';
import Dialog from './Dialog'



const industries=[
  '.IFC',
  '.OBJ',
  '.STL',
  '.STEP',
  '.FBX',
  '.SLDPRT/SLDASM',
  '.3DM',]

const searchElements = [
  { title: 'Surfaces' },
  { title: 'Case' },
  { title: 'Gears' },
  { title: 'Electonics' },
]


function Files(){

  return(
    <Stack
      spacing={1}
        sx={{height: '280px', overflow: 'scroll', marginTop: '10px'}}
    >
      {industries.map((item,index) => {
        return(
          <Button key={item} variant='contained' size='small' color='primary' onClick={()=>console.log(item)}>
            {item}
          </Button>
        )
      })
      }
    </Stack>
  )
}

export default function PrimaryAppBar({darkTheme, changeTheme}) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const {toggleShowComponents} = useStore();
  const {toggleShowComments, showComments} = useStore();
  const {toggleRightDrawer, rightDrawer} = useStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color='default'
        elevation={0}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        size='small'
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
              buttonLabel={'Files'}
              buttonColor={'secondary'}
              dialogTitle={
                <Typography>
                  OPEN
                </Typography>
              }
              dialogContent1={<Files/>}
              dialogContent2={
                <Stack
                direction='row'
                justifyContent="center"
                sx={{height: '280px', overflow: 'scroll', marginTop: '10px'}}
                >
                  <Button key={1} variant='contained' size='small' color='primary' onClick={()=>console.log(1)}>
                  Open Local model
                  </Button>
                </Stack>
              }
              actionTitle={'OK'}
              tabs={true}
              tabList={['Samples','Projects']}
            />
            <Tooltip title={'Add notes'} placement={'right'}>
              <IconButton
                size="medium"
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
              size="medium"
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
            <Button variant="contained"  size="small" color='primary' disableElevation>
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
