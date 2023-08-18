import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </Tooltip>
  );
}

export default function CustomizedSlider({value, setValueCb}) {
  const handleChange = (event, newValue) => {
    setValueCb(newValue);
  };
  return (
    <Box sx={{ width: 220 }}>
      <Typography variant={'overline'} gutterBottom>Corner Radius</Typography>
      <Slider
        valueLabelDisplay="auto"
        max={26}
        slots={{
          valueLabel: ValueLabelComponent,
        }}
        aria-label="custom thumb label"
        defaultValue={0}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}
