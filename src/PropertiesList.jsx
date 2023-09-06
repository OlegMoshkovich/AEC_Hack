import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from './Accordian';

export default function PropertiesList() {
  return (
    <Stack>
      <List
      spacing={1}
      >
        {['Structural Information','Manufactorability','Schedule',"Cost Estimation","Vendors"].map((text, index) => (
            <ListItem >
              <Accordion title={text} content={'Properties table'}/>
            </ListItem>
        ))}
      </List>
  </Stack>
  );
}
