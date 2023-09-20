import React, { useState } from 'react';
import CardInput from './CardInput';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Card from './Card'
import { useTheme } from '@mui/material/styles';
import useStore from './Store';

function Circle({ x, y }) {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(true);
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
        zIndex: 10,
      }}
    >
      <Tooltip title={clicked?"Click to hide a note":'Click to show a note'} placement={'top'}>
        <div
          className="circle"
          onClick={() => setClicked(!clicked)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '10px',
            backgroundColor: hover || clicked ? 'lime':`${theme.palette.primary.main}`,
          }}
        />
      </Tooltip>
      {((hover && info) || (clicked && info)) &&  (
        <Box sx={{ zIndex: 1000}}>
          <Card title={info.title} content={info.content} date={'today'}/>
        </Box>
      )}

      {clicked && !info && (
        <Box sx={{ zIndex: 1000 }}>
          <CardInput onSave={handleSave} />
        </Box>
      )}
    </div>
  );
}

export default Circle;
