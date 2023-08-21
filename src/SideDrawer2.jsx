import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Logo from './Logo'
import Stack from '@mui/material/Stack'
import FolderIcon from '@mui/icons-material/Folder';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppBar from './AppBar'
import NotesList from './NotesList'
import PropertiesList from './PropertiesList'
const drawerWidth = 280;


export default function SideDrawer2({side, isOpen, topPanel, bottomPanel}) {
  const [state, setState] = React.useState(false)
  const [isFirstPanel, setIsFirstPanel] = React.useState(true)
  const [isSecondPanel, setIsSecondPanel] = React.useState(true)

  const toggleDrawer = () => {
    setState(!state)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="temporary"
        anchor={side}
        open={isOpen}
        color='primary'
        elevation={0}
        hideBackdrop
        disableScrollLock
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            overflow:'hidden'},
        }}
      >
        <Toolbar />
            {isFirstPanel &&
              <Box
                sx={{
                  minHeight:'50%',
                  overflow: 'scroll'
                }}>
                {topPanel}
              </Box>
            }
            {isSecondPanel &&
              <Box
                sx={{
                  minHeight:'50%',
                  overflow: 'scroll',
                }}>
              {bottomPanel}
              </Box>
            }
      </Drawer>
    </Box>
  );
}
