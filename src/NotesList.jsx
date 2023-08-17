import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import Card from './Card'
import {Typography} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

export default function NotesList() {
  return (
    <Stack>
      <List
      spacing={1}
      sx={{padding: '0px 10px 0px 0px'}}
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
  </Stack>
  );
}
