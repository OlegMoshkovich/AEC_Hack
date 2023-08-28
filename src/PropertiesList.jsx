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
        {[1,2,3,4,5,6,7,8,9].map((text, index) => (
            <ListItem >
              <Accordion/>
            </ListItem>
        ))}
      </List>
  </Stack>
  );
}
