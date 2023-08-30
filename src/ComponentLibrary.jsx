import React, {useState} from 'react'
import './App.css';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import SideDrawer from './SideDrawer'
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel'
import AutocompleteExample from './AutoComplete'
import IconButton from '@mui/material/IconButton'
import DialogEdit from './DialogEdit'
import Tabs from './Tabs'
import TimeLine from './Timeline'
import Tree from './Tree'
import Card from './Card'
import Dialog from './Dialog'
import Slider from './Slider'
import CircleIcon from '@mui/icons-material/Circle';
import {colors} from './colors'
import useStore from './Store';
import CloseIcon from '@mui/icons-material/Close';


function ComponentLibrary({changeTheme, darkTheme}) {
  const [currentTab, setCurrentTab] = useState('General')
  const { borderRadius, setBorderRadius, setThemeScheme } = useStore();
  const {toggleShowComponents} = useStore();
  const tabList=['Theme', 'Card', 'Dialog', 'Input', 'SideDrawer', 'Timeline', 'Tree' ]
  return (
    <Container
      maxWidth="sm"
    >
      <Paper variant='background'
        sx={{
          maxHeight: '400px',
          overflow: 'scroll',
      }}
      >
      <Stack
            spacing={3}
            direction="row"
            justifyContent="flex-end"
          >
        <IconButton onClick={toggleShowComponents}>
            <CloseIcon/>
          </IconButton>
        </Stack>
          <Stack
            spacing={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="button">
              Bldrs UI components
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{width:'100%'}}
            >
              <Tabs
                tabList = {tabList}
                currentTab={(tabNumber)=>setCurrentTab(tabList[tabNumber])}
              />
            </Stack>

            {currentTab==='General' &&
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Stack direction="column" alignItems="center" >
                  <Typography variant='overline'>Theme colors</Typography>
                  <Stack direction="row" alignItems="center" spacing={3}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      {colors.map((color, index)=>{
                        return(
                          <IconButton
                          onClick={()=>setThemeScheme(index)}
                          sx={{backgroundColor:color.primary}}
                          size="small"
                        >
                          <CircleIcon fontSize="inherit" color='secondary'/>
                        </IconButton>
                        )
                      })
                      }
                    </Stack>
                    <Typography variant="overline">
                      <FormControlLabel
                        value="switch"
                        control={<Switch onChange={changeTheme}/>}
                        label={
                          darkTheme ?
                            <Typography variant={'overline'}>Dark</Typography> :
                            <Typography variant={'overline'}>Light</Typography>
                          }
                        labelPlacement="end"
                      />
                    </Typography>
                  </Stack>
                </Stack>
                <Slider
                  value={borderRadius}
                  setValueCb={(value)=>setBorderRadius(value)}
                  label={'Component border radius'}
                 />
                 <Dialog label={'Welcome'}/>
              </Stack>
            }
            {currentTab==='Timeline' &&
                <TimeLine/>
            }
            {currentTab==='Tree' &&
                <Tree/>
            }
            {currentTab==='Card' &&
                <Card/>
            }
            {currentTab==='SideDrawer' &&
                <SideDrawer/>
            }
            {currentTab==='Dialog' &&
              <Stack
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Dialog label={'Standard Dialog'}/>
                <DialogEdit/>
              </Stack>
            }
            {currentTab==='Input' &&
                <AutocompleteExample/>
            }
          </Stack>
      </Paper>
    </Container>
  );
}

export default ComponentLibrary;
