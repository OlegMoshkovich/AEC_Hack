import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Logo from './Logo'
import Stack from '@mui/material/Stack'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import AutocompleteExample from './AutoComplete'
import AvatarGroup from './AvatarGroup'
import useStore from './Store';


export default function PrimaryAppBar({darkTheme, changeTheme}) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const {toggleShowComponents} = useStore();

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
            <Button variant="contained"  size="small" color='secondary' disableElevation>
              Files
            </Button>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <MapsUgcOutlinedIcon size='inherit' color='default'/>
            </IconButton>
        </Stack>
        {!isMobile && <Stack
          direction='row'
          alignItems="center"
          justifyContent="center"
          sx={{width:'72%'}}
          spacing={1}
        >
          <AutocompleteExample/>
        </Stack>
        }
        <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" alignItems="center" spacing={1}>
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
