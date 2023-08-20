import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AutocompleteExample() {
  return (
    <Stack spacing={3} sx={{minWidth:'200px'}}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={walls}
        getOptionLabel={(option) => option.title}
        defaultValue={[walls[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            // label="Search"
            placeholder="Search by ifc Name"
            size='small'
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const walls = [
  { title: 'Wall' },
  { title: 'Slab' },
  { title: 'Door' },
  { title: 'Ceiling' },
];
