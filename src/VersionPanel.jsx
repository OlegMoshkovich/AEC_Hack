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
              Version History
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={.5}
            >
            <IconButton aria-label="comments" size='small'>
              <SaveOutlinedIcon fontSize='small'/>
            </IconButton>
            <IconButton aria-label="comments" size='small'>
              <CloseIcon fontSize='small'/>
            </IconButton>
          </Stack>
          </Stack>
        </ListSubheader>
        <ListItem >
          <Timeline/>
        </ListItem>
    </List>
  </Stack>
  );
}
