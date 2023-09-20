import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import Menu from './Menu'

export default function MultiActionAreaCard({title, date, content, type='noImage', src,}) {
  let component
  if(type==='video'){
    component='iframe'
  }else if(type==='image'){
    component='img'
  }

  const menuSelect = (item) => {
    console.log('item', item)
  }

  return (
    <Card sx={{ maxWidth: 260 }}>
      <CardHeader
        avatar={ <Avatar aria-label="card"> R </Avatar>}
        action={<Menu menuItems={['Edit', 'Delete']} actionCb={(item)=>menuSelect(item)}/>}
        title={title}
        subheader={date}
      />
      <CardActionArea>
        <CardMedia
          component={component}
          height="200"
          title='test'
          src={src}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
          <Button size="small" color="primary">
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
