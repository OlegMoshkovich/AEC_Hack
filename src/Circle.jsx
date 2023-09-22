import React, { useState } from 'react';
import CardInput from './CardInput';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Card from './Card'
import { useTheme } from '@mui/material/styles';
import useStore from './Store';

function Circle({ x, y }) {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [info, setInfo] = useState(null); // To store title and content
  const theme = useTheme();
  const {notes} = useStore();
  const {setNotes} = useStore();

  const handleSave = (title, content) => {
    setInfo({ title, content });
    setNotes([...notes,   {
      title:title,
      date: '17.09.2023',
      content:content,
      type:'image',
      src:'https://i.pinimg.com/564x/ac/6d/50/ac6d50ccbde053337dae0390bd44a193.jpg'
    },]);
  };

  return (
    <div
      className="circle"
      style={{
        position: 'fixed',
        left: `${x}px`,
        top: `${y}px`,
        // zIndex: 10,
      }}
    >
      {/* <Tooltip title={clicked?"Click to show a note":'Click to hide a note'} placement={'top'} open={hover}> */}
        <div
          className="circle"
          onClick={() => setClicked(!clicked)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            width: (clicked || hover) ? '20px':'10px',
            height: (clicked || hover) ? '20px':'10px',
            borderRadius:'14px',
            backgroundColor: `${theme.palette.primary.main}`,
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.5s, height 0.5s'
          }}
        />
      {/* </Tooltip> */}
      {/* {((hover && info) || (clicked && info)) &&  (
        <Box sx={{ zIndex: 1000}}>
          <Card title={info.title} content={info.content} date={'today'}/>
        </Box>
      )} */}

      {/* {clicked && !info && (
        <Box sx={{ zIndex: 1000 }}>
          <CardInput onSave={handleSave} />
        </Box>
      )} */}
    </div>
  );
}

export default Circle;
