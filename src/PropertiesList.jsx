import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import {Typography} from '@mui/material';
import Accordion from './Accordian';
import ListSubheader from '@mui/material/ListSubheader';

export default function PropertiesList() {
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
        {[1,2,3,4,5,6,7,8,9].map((text, index) => (
            <ListItem >
              <Accordion/>
            </ListItem>
        ))}
      </List>
  </Stack>
  );
}
