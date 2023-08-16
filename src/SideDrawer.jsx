import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Card from './Card'
import {Typography} from '@mui/material';
import Accordion from './Accordian';
import BottomNavigation from './BottomNavigation'
import ListSubheader from '@mui/material/ListSubheader';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [value, setValue] = React.useState(0)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Stack>
      {value === 0 &&
        <List
        spacing={1}
        sx={{padding: '0px 10px 60px 0px'}}
        >
          <ListSubheader>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{height: '60px'}}
          >
              <Typography variant="body1">
                Notes
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={.5}
              >
              <IconButton aria-label="comments" size='small'>
                <AddCommentOutlinedIcon fontSize='small'/>
              </IconButton>
              <IconButton aria-label="comments" size='small'>
                <CloseIcon fontSize='small'/>
              </IconButton>
            </Stack>
            </Stack>
          </ListSubheader>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem >
                <Card/>
              </ListItem>
          ))}
      </List>
      }
      {value === 1 &&
        <List
        spacing={1}
        sx={{padding: '0px 10px 60px 0px'}}
        >
          <ListSubheader>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{height: '60px'}}
          >
              <Typography variant="body1">
                Properties
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={.5}
              >
              <IconButton aria-label="comments" size='small'>
                <AddIcon fontSize='small'/>
              </IconButton>
              <IconButton aria-label="comments" size='small'>
                <CloseIcon fontSize='small'/>
              </IconButton>
            </Stack>
            </Stack>
          </ListSubheader>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem sx={{width:'378px'}}>
                <Accordion/>
              </ListItem>
          ))}
        </List>
      }

    </Stack>
  );

  return (
    <div>
      {['Trigger side Drawer'].map((anchor) => (
        <React.Fragment key={'right'}>
          <Button variant='contained' onClick={toggleDrawer('right', true)}>{'Trigger side Drawer'}</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list()}
            <BottomNavigation setValueCb = {setValue}/>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
