import * as React from 'react';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Tabs({currentTab, tabList}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    currentTab(newValue)
  };

  return (
    <MuiTabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
      scrollable
      scrollButtons="auto">
      {tabList.map((tab) => <Tab label={tab} />)}
    </MuiTabs>
  );
}
