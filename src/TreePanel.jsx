import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import {Typography} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Tree from './Tree'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function TreePanel() {
  return (
    <Stack>
      <List
      spacing={1}
      >
        <ListItem >
          <Tree/>
        </ListItem>
    </List>
  </Stack>
  );
}
