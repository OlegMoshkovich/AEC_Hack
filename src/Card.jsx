import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Menu from './Menu'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="card">
            R
          </Avatar>
        }
        action={
          <Menu menuItems={['Edit', 'Delete']}/>
        }
        title="Welcome to Bldrs: Share"
        subheader="September 14, 2016"
      />
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
          <Button size="small" color="secondary">
            Attached view
          </Button>
          <IconButton
            aria-label="Comments"
            size="medium"
            sx={{ marginLeft: 'auto'}}>
            <QuestionAnswerOutlinedIcon fontSize="inherit" />
          </IconButton>
      </CardActions>
    </Card>
  );
}
