import React from 'react'
import IconButton from '@mui/material/IconButton';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function ButtonGroup() {
  return (
    <MuiButtonGroup variant="contained" aria-label="outlined primary button group">
      <IconButton aria-label="login" size='large'>
        <LoginOutlinedIcon />
      </IconButton>
      <IconButton aria-label="comments" size='large'>
        <CommentOutlinedIcon />
      </IconButton>
      <IconButton aria-label="properties" size='large'>
        <MenuOutlinedIcon />
      </IconButton>
      <IconButton aria-label="info" size='large'>
        <InfoOutlinedIcon />
      </IconButton>
      <IconButton aria-label="more" size='large'>
        <MoreHorizOutlinedIcon />
      </IconButton>
    </MuiButtonGroup>
  );
}
