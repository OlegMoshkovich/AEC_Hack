import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import FolderIcon from '@mui/icons-material/Folder';
import SearchIcon from '@mui/icons-material/Search';
import SegmentIcon from '@mui/icons-material/Segment';


export default function ButtonGroup() {
  return (
    <MuiButtonGroup variant="contained" size='large' aria-label="outlined primary button group">
      <IconButton aria-label="delete" color='primary' size='large'>
        <FolderIcon />
      </IconButton>
      <IconButton aria-label="delete" size='large'>
        <SearchIcon />
      </IconButton>
      <IconButton aria-label="delete" size='large'>
        <SegmentIcon />
      </IconButton>
    </MuiButtonGroup>
  );
}
