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
        variant='background'
        sx={{
        height: '300px',
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
          <Paper elevation={active === 0 ? 3 : 1} sx={{padding:'6px', borderRadius:'10px'}}>
              <Typography variant="caption">
                Submit drawings to the structural engineer, waiting for the feedback
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
          <Paper elevation={active === 1 ? 3 : 1} sx={{padding:'6px', borderRadius:'10px'}}>
              <Typography variant="caption">
                Submit drawings to the structural engineer, waiting for the feedback
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
            <Paper elevation={active === 2 ? 3 : 1} sx={{padding:'6px', borderRadius:'10px',}}>
              <Typography variant="caption">
                Waiting for the architect of record
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </Paper>
  );
}
