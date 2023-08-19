import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import NotesList from './NotesList'
import PropertiesList from './PropertiesList'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false)
  const [isNotes, setIsNotes] = React.useState(true)
  const [isProperties, setIsProperties] = React.useState(true)

  const toggleDrawer = () => {
    setState(!state)
  }

  return (
    <div>
        <React.Fragment key={'right'}>
          <Button variant='contained' onClick={toggleDrawer}>{'Trigger side Drawer'}</Button>
          <Drawer
            anchor={'right'}
            open={state}
            onClose={toggleDrawer}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              sx={{
                width: '390px',
                padding: '10px 0px',
              }}
            >
              <Button
                variant={isNotes ? 'contained' : 'outlined'}
                onClick={() => setIsNotes(!isNotes)}
                size='small'
              >
                Notes
              </Button>
              <Button
                size='small'
                variant={isProperties ? 'contained' : 'outlined'}
                onClick={() => setIsProperties(!isProperties)}
              >
                Properties
              </Button>
              <Button
                size='small'
                variant={'contained'}
                onClick={toggleDrawer}
              >
                Close drawer
              </Button>
            </Stack>
            {isNotes &&
              <Box
                sx={{
                  minHeight:'50%',
                  overflow: 'scroll'
                }}>
                <NotesList/>
              </Box>
            }
            {
              isNotes && isProperties &&
              <Divider/>
            }
            {isProperties &&
              <Box
                sx={{
                  minHeight:'50%',
                  overflow: 'scroll',
                }}>
                <PropertiesList/>
              </Box>
            }
          </Drawer>
        </React.Fragment>
    </div>
  );
}
