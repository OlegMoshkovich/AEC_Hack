import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Menu from './Menu'
import SaveIcon from '@mui/icons-material/Save';
import ImageIcon from '@mui/icons-material/Image'; // Import Image icon
import AutocompleteInput from './AutoComplete';
const tags=[
  { title: 'Note'},
  { title: 'Issue'},
]

function CardInput({ type, src ,onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const date='09.17.2023'

  const handleTitleChange = (e) => {
    console.log('in the handle title change')
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    console.log('in the handle save')
    onSave(title, content);
  };

  const menuSelect = (item) => {
    console.log('item', item)
  }

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={ <Avatar aria-label="card"> R </Avatar>}
        action={<Menu menuItems={['Edit', 'Delete']} actionCb={(item)=>menuSelect(item)}/>}
        title={  <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={title}
          size='small'
          onChange={handleTitleChange}
          sx={{ marginBottom: '10px' }}
        />}
        subheader={date}
      />
      {type === 'image' && (
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt="card image"
        />
      )}
      <CardContent>
        <TextField
          fullWidth
          label="Content"
          variant="outlined"
          multiline
          size='small'
          rows={4}
          value={content}
          onChange={handleContentChange}
          sx={{ marginBottom: '10px' }}
        />
        <Box sx={{width:'270px'}}>
          <AutocompleteInput title={'Tags'} elements={tags}/>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}> {/* Updated justifyContent */}
      <IconButton aria-label="image" onClick={() => { /* Image action here */ }}>
          <ImageIcon /> {/* Image button */}
        </IconButton>
        <IconButton aria-label="save" onClick={handleSave}>
          <SaveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardInput;
