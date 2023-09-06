import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={2}
      sx={{
        '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
      }}
    >
      <Avatar alt="User 1" />
      <Avatar alt="User 2" />
      <Avatar alt="User 3" />
      <Avatar alt="User 4" />
    </AvatarGroup>
  );
}
