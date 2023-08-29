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
    <Stack justifyContent={'center'} alignItems={'center'}>
      <List
      spacing={1}
      >
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem >
              <Card/>
            </ListItem>
        ))}
    </List>
  </Stack>
  );
}
