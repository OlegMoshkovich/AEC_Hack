import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack'

export function Projects(){
  const [repo, setRepo] = React.useState('');
  const [save, setSave] = React.useState('');
  const handleChange = (event) => {
    setRepo(event.target.value);
  };
  return(
    <Stack
    direction='column'
    justifyContent="center"
    sx={{overflow: 'scroll'}}
    >
      {


      }
      <Typography variant='overline' sx={{textAlign: 'center'}}>
        Organizations
      </Typography>
      <Stack
        direction='row'
        justifyContent="center"
        spacing={1}
        sx={{overflow: 'scroll', paddingBottom: '20px'}}
      >
        <Chip label="Swiss Property" onClick={()=>console.log('here')} />
        <Chip label="Bldrs.ai" onClick={()=>console.log('here')} variant='outlined'/>
      </Stack>
      <Typography variant='overline' sx={{textAlign: 'center'}}>
        Repositories
      </Typography>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={repo}
          onChange={handleChange}
          size='small'
        >
          <MenuItem value={null}>...</MenuItem>
          <MenuItem value={20}>One</MenuItem>
          <MenuItem value={30}>Two</MenuItem>
          <MenuItem value={40}>Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
    { repo &&
      <>
    <Typography variant='overline' sx={{textAlign: 'center'}}>
        Folders
      </Typography>
      <Stack
        direction='row'
        justifyContent="center"
        alignContent='center'
        spacing={1}
        sx={{overflow: 'scroll'}}
      >
        <Chip label="Root" onClick={()=>console.log('here')} />
        <Chip label="Swiss Property" onClick={()=>console.log('here')} variant='outlined'/>
        <Chip label="Bldrs.ai" onClick={()=>console.log('here')} variant='outlined'/>
      </Stack>
      <Typography variant='overline' sx={{textAlign: 'center'}}>
        Files
      </Typography>
      <Stack
        direction='column'
        justifyContent="center"
        alignContent='center'
        spacing={1}
        sx={{overflow: 'scroll', paddingBottom: '20px', height: '100px'}}
      >
        <Box/>
        <Box/>
        <Chip label="Momentum.ifc" onClick={()=>console.log('here')} variant='outlined'/>
        <Chip label="Momentum.ifc" onClick={()=>console.log('here')} variant='outlined'/>
        <Chip label="Momentum.ifc" onClick={()=>console.log('here')} variant='outlined'/>
        <Chip label="Momentum.ifc" onClick={()=>console.log('here')} variant='outlined'/>
        <Chip label="Momentum.ifc" onClick={()=>console.log('here')} variant='outlined'/>
        <Chip label="Momentum.ifc" onClick={()=>console.log('here')} variant='outlined'/>
        <Chip label="Momentum.ifc" onClick={()=>console.log('here')} variant='outlined'/>
        <Chip label="Momentum.ifc" onClick={()=>console.log('here')} variant='outlined'/>
      </Stack>
    </>
    }
    </Stack>
  )
}
