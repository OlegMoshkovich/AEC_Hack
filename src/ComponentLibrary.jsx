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
import ButtonGroupControls from './ButtonGroupControls'
import ButtonGroupOperations from './ButtonGroupOperations'
import IconButton from '@mui/material/IconButton'
import DialogEdit from './DialogEdit'
import Logo from './Logo'
import Tabs from './Tabs'
import TimeLine from './Timeline'
import Tree from './Tree'
import Card from './Card'

import Dialog from './Dialog'
import Slider from './Slider'
import CircleIcon from '@mui/icons-material/Circle';
import {colors} from './colors'
import useStore from './Store';


function ComponentLibrary({changeTheme, darkTheme}) {
  const [currentTab, setCurrentTab] = useState('General')
  const { borderRadius, setBorderRadius, setThemeScheme } = useStore();
  console.log('borderRadius', borderRadius)
  const tabList=['General', 'Card', 'Dialog', 'Input', 'SideDrawer', 'Timeline', 'Tree' ]
  return (
    <Container
      maxWidth="sm"
      // sx={{marginTop: '130px'}}
    >
      <Paper variant='background'>
          <Stack
            spacing={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="button">
              Bldrs UI components
            </Typography>
            {/* <Logo scaled={false}/> */}
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
                {/* <ButtonGroupControls/> */}
                {/* <ButtonGroupOperations/> */}
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
