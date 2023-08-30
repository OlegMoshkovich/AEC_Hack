import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AutocompleteExample() {
  return (
    <Stack spacing={3} sx={{minWidth:'280px'}}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={elements}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        size='small'
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search"
            size='small'
          />
        )}
      />
    </Stack>
  );
}

const elements = [
  { title: 'Wall' },
  { title: 'Slab' },
  { title: 'Door' },
  { title: 'Ceiling' },
];
