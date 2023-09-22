import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack'
import CloseIcon from '@mui/icons-material/Close';
import {Typography} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import ListIcon from '@mui/icons-material/List';
const drawerWidth = 280;


export default function SideDrawer2({
    side,
    isOpen,
    setIsOpen,
    topPanel,
    topPanelName,
    topPanelButton,
    bottomPanelName,
    bottomPanelButton,
    bottomPanel,
    isFirstPanelInput=false,
    isSecondPanelInput=false,
  }) {
  const [isFirstPanel, setIsFirstPanel] = React.useState(true)
  const [isSecondPanel, setIsSecondPanel] = React.useState(true)

  useEffect(() => {
    if(!isFirstPanel && !isSecondPanel){
      setIsOpen()
      setIsFirstPanel(true)
      setIsSecondPanel(true)
      console.log('in the use effect')
    }
  }, [setIsFirstPanel, setIsSecondPanel, isFirstPanel, isSecondPanel, setIsOpen])


  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="temporary"
        disableEnforceFocus
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
            backgroundColor: (theme) => theme.palette.background.default,
            boxSizing: 'border-box',
            overflow:'hidden'},
        }}
      >
        <Toolbar />
            {(isFirstPanel || isFirstPanelInput) &&
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
                      sx={{height: '40px'}}
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
                          {!isSecondPanel &&
                              <IconButton aria-label="comments" size='small' onClick={()=>setIsSecondPanel(true)}>
                                <ListIcon fontSize='small'/>
                              </IconButton>
                          }
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
            {(isSecondPanel || isSecondPanelInput) &&
              <Box
                sx={{
                  minHeight:'40%',
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
                      sx={{height: '40px'}}
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
                        {!isFirstPanel &&
                              <IconButton aria-label="comments" size='small' onClick={()=>setIsFirstPanel(true)}>
                                <ListIcon fontSize='small'/>
                              </IconButton>
                        }
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
