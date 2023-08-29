import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Tabs from './Tabs'


export default function FileSystemNavigator() {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%'
      }}
      >
      <Stack
        spacing={1}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Tabs
            tabList={['elements', 'types', 'sets']}
            currentTab={(tab) => console.log(tab)}
            scrollable={true}
          />
        </Stack>
        <TreeView
            aria-label="Model navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label="Model 1">
            <TreeItem nodeId="2" label="Item 1" />
          </TreeItem>
          <TreeItem nodeId="5" label="Model 2">
            <TreeItem nodeId="10" label="Item 1" />
            <TreeItem nodeId="6" label="Item 2">
              <TreeItem nodeId="8" label="Sub Item 1" />
              <TreeItem nodeId="8" label="Sub Item 1" />
              <TreeItem nodeId="8" label="Sub Item 1" />
              <TreeItem nodeId="8" label="Sub Item 1" />
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Stack>
    </Paper>
  );
}
