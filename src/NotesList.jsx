import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Card from './Card'
import useStore from './Store';

export default function NotesList() {
  const {notes} = useStore();

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <List
      spacing={1}
      >
        {notes.map((item, index) => (
            <ListItem key={index}>
              <Card
              key={item.title}
              title={item.title}
              date={item.date}
              content={item.content}
              type={item.type}
              src={item.src}
              />
            </ListItem>
        ))}
    </List>
  </Stack>
  );
}
