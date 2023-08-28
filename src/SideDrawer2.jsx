import React, {useEffect} from 'react';
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
import CloseIcon from '@mui/icons-material/Close';
import Card from './Card'
import {Typography} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
const drawerWidth = 280;



export default function SideDrawer2({side, isOpen, setIsOpen, topPanel, topPanelName, topPanelButton, bottomPanelName, bottomPanelButton, bottomPanel}) {
  // const [state, setState] = React.useState(true)
  const [isFirstPanel, setIsFirstPanel] = React.useState(true)
  const [isSecondPanel, setIsSecondPanel] = React.useState(true)

  useEffect(() => {
    if(!isFirstPanel && !isSecondPanel){
      setIsOpen(false)
      setIsFirstPanel(true)
      setIsSecondPanel(true)
    }
  }, [setIsFirstPanel,setIsSecondPanel, isFirstPanel, isSecondPanel])


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
        ModalProps={{
          slots: { backdrop: "div" },
          slotProps: {
            root: { //override the fixed position + the size of backdrop
              style: {
                position: "absolute",
                top: "unset",
                bottom: "unset",
                left: "unset",
                right: "unset",
              },
            },
          },
        }}
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
                <List
                  spacing={1}
                  >
                    <ListSubheader>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{height: '60px'}}
                    >
                        <Typography variant="body1">
                          {topPanelName}
                        </Typography>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={.5}
                        >
                          {topPanelButton}
                        <IconButton aria-label="comments" size='small' onClick={()=>setIsFirstPanel(false)}>
                          <CloseIcon fontSize='small'/>
                        </IconButton>
                      </Stack>
                      </Stack>
                    </ListSubheader>
                    {topPanel}
                </List>
                {/* {topPanel} */}
              </Box>
            }
            {isSecondPanel &&
              <Box
                sx={{
                  minHeight:'50%',
                  overflow: 'scroll'
                }}>
                <List
                  spacing={1}
                  >
                    <ListSubheader>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{height: '60px'}}
                    >
                        <Typography variant="body1">
                          {bottomPanelName}
                        </Typography>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={.5}
                        >
                          {bottomPanelButton}
                        <IconButton aria-label="comments" size='small' onClick={()=>setIsSecondPanel(false)}>
                          <CloseIcon fontSize='small'/>
                        </IconButton>
                      </Stack>
                      </Stack>
                    </ListSubheader>
                    {bottomPanel}
                </List>
                {/* {topPanel} */}
              </Box>
            }
      </Drawer>
    </Box>
  );
}
