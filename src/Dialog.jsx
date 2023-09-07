import React, {useState} from 'react';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tabs from './Tabs'
import {Stack} from '@mui/system';

export default function Dialog({
  buttonLabel='dialog',
  buttonColor='primary',
  dialogTitle='dialog',
  dialogContent='sample content',
  tabs=false,
  actionTitle='ok'
}) {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" size='small' onClick={handleClickOpen} color={buttonColor}>
        {buttonLabel}
      </Button>
      <MuiDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack spacing={1}>
              {tabs &&
               <Tabs
                tabList = {['tab 1', 'tab 2', 'tab 3']}
                currentTab={(tabNumber)=>setCurrentTab(tabNumber)}
              />
              }
            <Typography variant={'body1'}>
            {dialogContent}
            </Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" size='small' onClick={handleClose} startIcon={<GitHubIcon /> }>{actionTitle}</Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
}
