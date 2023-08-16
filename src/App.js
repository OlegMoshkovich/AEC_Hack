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
import Accordian from './Accordian'
import ButtonGroupControls from './ButtonGroupControls'
import ButtonGroupOperations from './ButtonGroupOperations'
import Dialog from './Dialog'
import DialogEdit from './DialogEdit'
import Logo from './Logo'
import Tabs from './Tabs'
import TimeLine from './Timeline'
import Tree from './Tree'
import Card from './Card'


function App({changeTheme, darkTheme}) {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: '20px'
      }}
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
            <Logo/>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{width:'100%'}}
            >
              <Tabs
                tabList = {['General', 'Card', 'SideDrawer', 'Timeline', 'Tree', ]}
                currentTab={(tabNumber)=>setCurrentTab(tabNumber)}
              />
            </Stack>

            {currentTab===0 &&
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <ButtonGroupControls/>
                <ButtonGroupOperations/>
                <Typography variant="overline">
                  <FormControlLabel
                    value="switch"
                    control={<Switch onChange={changeTheme}/>}
                    label={darkTheme ? 'Dark' : 'Light'}
                    labelPlacement="end"
                  />
                </Typography>
                <Stack
                  spacing={3}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Dialog/>
                  <DialogEdit/>
                </Stack>
                <AutocompleteExample/>
                <Accordian/>
              </Stack>
            }
            {currentTab===3 &&
                <TimeLine/>
            }
            {currentTab===4 &&
                <Tree/>
            }
            {currentTab===1 &&
                <Card/>
            }
            {currentTab===2 &&
                <SideDrawer/>
            }
          </Stack>
      </Paper>
    </Container>
  );
}

export default App;
