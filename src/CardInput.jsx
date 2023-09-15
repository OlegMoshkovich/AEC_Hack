import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import ImageIcon from '@mui/icons-material/Image'; // Import Image icon

function CustomCard({ date, type, src ,onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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

  return (
    <Card sx={{ maxWidth: 345 }}>
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
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          fullWidth
          label="Content"
          variant="outlined"
          multiline
          rows={4}
          value={content}
          onChange={handleContentChange}
        />
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

export default CustomCard;
