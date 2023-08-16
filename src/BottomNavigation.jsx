import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

export default function SimpleBottomNavigation({setValueCb}) {
  const [value, setValue] = React.useState(0);

  return (
      <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, width:.27 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setValueCb(newValue)
        }}
      >
        <BottomNavigationAction label="Notes" icon={<InsertCommentOutlinedIcon />} />
        <BottomNavigationAction label="Properties" icon={<FormatListBulletedOutlinedIcon />} />
      </BottomNavigation>
  );
}
