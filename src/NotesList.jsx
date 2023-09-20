import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Card from './Card'
import useStore from './Store';

export default function NotesList() {
  const {notes} = useStore();
  console.log('notes', notes)
  // const data=[
  //   {
  //     title:'Welcome to Share',
  //     date: '17.09.2023',
  //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     type:'image',
  //     src:'https://i.pinimg.com/564x/ac/6d/50/ac6d50ccbde053337dae0390bd44a193.jpg'
  //   },
  //   {
  //     title:'Note 1',
  //     date: '17.09.2023',
  //     content:'Sample Video about innner organization of an engine',
  //     type:'video',
  //     src:'https://www.youtube.com/embed/ZQvfHyfgBtA'
  //     },
  // ]
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
