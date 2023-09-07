import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DialogEdit from './DialogEdit'


export default function CustomizedTimeline() {
  const [active, setActive] = useState(0)
  return (
      <Paper
        sx={{
        overflow: 'scroll'}}
        >
      <Timeline>
        <TimelineItem onClick={()=>setActive(0)} sx={{cursor: 'pointer'}}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color={active === 0 ? "text.primary" : "text.secondary"}
          >
              <Typography variant="body1" >
                Version 1
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <DialogEdit/>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                color={active === 0 ? 'primary' : 'secondary'}
              >
              <EngineeringIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight:'1em' }} >
            <Paper
              variant='background'
              elevation={active === 0 ? 4 : 1}
              sx={{padding:'8px'}}
            >
              <Typography variant="caption">
                Add initial model
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem onClick={()=>setActive(1)} sx={{cursor: 'pointer'}}>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color={active === 1 ? "text.primary" : "text.secondary"}
          >
              <Typography variant="body1" >
                Version 2
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <DialogEdit/>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                sx={{cursor: 'pointer'}}
                color={active === 1 ? 'primary' : 'secondary'}
                onClick={()=>setActive(1)}
              >
              <ArchitectureIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight:'1em' }} >
            <Paper
            variant='background'
            elevation={active === 1 ? 4 : 1}
            sx={{padding:'8px'}}
            >
              <Typography variant="caption">
                Change exterior form based on structural input
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem onClick={()=>setActive(2)} sx={{cursor: 'pointer'}}>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color={active === 2 ? "text.primary" : "text.secondary"}
          >
              <Typography variant="body1" >
                Version 3
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <DialogEdit/>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                color={active === 2 ? 'primary' : 'secondary'}
              >
              <ArchitectureIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight:'1em' }} >
            <Paper
              elevation={active === 2 ? 4 : 1}
              variant='background'
              sx={{padding:'8px'}}
            >
              <Typography variant="caption">
                Cost corrected mechanism
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem onClick={()=>setActive(3)} sx={{cursor: 'pointer'}}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color={active === 3 ? "text.primary" : "text.secondary"}
          >
              <Typography variant="body1" >
                Version 4
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <DialogEdit/>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                color={active === 3 ? 'primary' : 'secondary'}
              >
              <EngineeringIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight:'1em' }} >
            <Paper
              variant='background'
              elevation={active === 3 ? 4 : 1}
              sx={{padding:'8px'}}
            >
              <Typography variant="caption">
                Add initial model
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem onClick={()=>setActive(4)} sx={{cursor: 'pointer'}}>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color={active === 4 ? "text.primary" : "text.secondary"}
          >
              <Typography variant="body1" >
                Version 5
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <DialogEdit/>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                sx={{cursor: 'pointer'}}
                color={active === 4 ? 'primary' : 'secondary'}
                onClick={()=>setActive(5)}
              >
              <ArchitectureIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight:'1em' }} >
            <Paper
            variant='background'
            elevation={active === 4 ? 4 : 1}
            sx={{padding:'8px'}}
            >
              <Typography variant="caption">
                Change exterior form based on structural input
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem onClick={()=>setActive(6)} sx={{cursor: 'pointer'}}>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color={active === 6 ? "text.primary" : "text.secondary"}
          >
              <Typography variant="body1" >
                Version 6
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <DialogEdit/>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                color={active === 6 ? 'primary' : 'secondary'}
              >
              <ArchitectureIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight:'1em' }} >
            <Paper
              elevation={active === 6 ? 4 : 1}
              variant='background'
              sx={{padding:'8px'}}
            >
              <Typography variant="caption">
                Cost corrected mechanism
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </Paper>
  );
}
