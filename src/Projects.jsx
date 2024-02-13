import * as React from 'react';
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined'
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';


export function Projects(){
  const [repo, setRepo] = React.useState(20);
  const [org, setOrg] = React.useState('sp');
  const [file, setFile] = React.useState(10);
  const [save, setSave] = React.useState('');
  const [deleteMode, setDeleteMode] = React.useState(false);
  const [version, setVersion] = React.useState(true);

  const handleChangeRepos = (event) => {
    setRepo(event.target.value);
  };
  const handleChangeFiles = (event) => {
    setFile(event.target.value);
  };
  const handleOrgSelect = (value) =>{
    if(org === 'sp' && value==='sp'){
      setOrg('')
    }
    if(org === 'bldrs' && value==='bldrs'){
      setOrg('')
    }
    setOrg(value)
  }
  return(
    <Stack
    direction='column'
    justifyContent="center"
    sx={{overflow: 'scroll'}}
    >
      <Typography variant='overline' sx={{textAlign: 'center'}}>
        Organizations
      </Typography>
      <Stack
        direction='row'
        justifyContent="center"
        spacing={1}
        sx={{overflow: 'scroll', paddingBottom: '20px'}}
      >
        <Chip label="Swiss Property" onClick={()=>handleOrgSelect('sp')} variant={org === 'sp' ? '' : 'outlined'}/>
        <Chip label="Bldrs.ai" onClick={()=>handleOrgSelect('bldrs')} variant={org==='bldrs' ? '' : 'outlined'}/>
      </Stack>
      <Stack
        direction='row'
        justifyContent="center"
        spacing={1}
        sx={{overflow: 'scroll', paddingBottom: '20px'}}
      >
        <Chip label="Open"
          onClick={()=>{
            setSave(false)
            setDeleteMode(false)
          }
          }
          variant={(!save && !deleteMode) ? '' : 'outlined'}
          color='primary'/>
        <Chip label="Save"
         onClick={()=>{
         setSave(true)
         setDeleteMode(false)
         }} variant={save ? '' : 'outlined'} color='primary'/>
        <Chip label="Delete"
        onClick={()=>{
          setSave(false)
          setDeleteMode(true)
        }} variant={deleteMode ? '' : 'outlined'} color='primary'/>
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
          onChange={handleChangeRepos}
          size='small'
        >
          <MenuItem value={10}>...</MenuItem>
          <MenuItem value={20}>One</MenuItem>
          <MenuItem value={30}>Two</MenuItem>
          <MenuItem value={40}>Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
    { repo && !save &&
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
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={file}
          onChange={handleChangeFiles}
          size='small'
        >
          <MenuItem value={10}>...</MenuItem>
          <MenuItem value={20}>One</MenuItem>
          <MenuItem value={30}>Two</MenuItem>
          <MenuItem value={40}>Three</MenuItem>
        </Select>
      </FormControl>
      </Box>
      {deleteMode &&
        <Button sx={{marginTop:'20px'}} variant="contained" color="error" disabled={file === 10}>
          Delete
        </Button>
      }
    </>
    }
      { repo && save &&
      <>
    <Typography variant='overline' sx={{textAlign: 'center'}}>
        Folders
      </Typography>
      <Box>
      </Box>
      <Stack
        direction='row'
        justifyContent="center"
        alignContent='center'
        spacing={1}
        sx={{overflowX: 'scroll' }}
      >
        <IconButton size='small'>
          <CreateNewFolderOutlinedIcon/>
        </IconButton>
        <Chip label="Root" onClick={()=>console.log('here')} />
        <Chip label="Swiss Property" onClick={()=>console.log('here')} variant='outlined'/>
      </Stack>
      <Stack
        direction='row'
        justifyContent="center"
        spacing={1}
        sx={{overflow: 'scroll', padding: '20px 0px'}}
      >
        <Chip label="Create New Model" onClick={()=>setVersion(false)} variant={version ? 'outlined' : ''} color='primary'/>
        <Chip label="Create a Version" onClick={()=>setVersion(true)} variant={version ? '' : 'outlined'} color='primary'/>
      </Stack>
      {version &&
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={file}
            onChange={handleChangeFiles}
            size='small'
          >
            <MenuItem value={null}>...</MenuItem>
            <MenuItem value={20}>One</MenuItem>
            <MenuItem value={30}>Two</MenuItem>
            <MenuItem value={40}>Three</MenuItem>
          </Select>
        </FormControl>
        </Box>

      }
      {!version &&
        <FormControl variant="standard">
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start" size = 'small'>
              <UploadFileOutlinedIcon size = 'small'/>
            </InputAdornment>
          }
        />
      </FormControl>
      }
    </>
    }
    </Stack>
  )
}
