import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import {Typography} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Timeline from './Timeline'

export default function TreePanel() {
  return (
    <Stack>
      <List>
        <ListItem >
          <Timeline/>
        </ListItem>
    </List>
  </Stack>
  );
}
