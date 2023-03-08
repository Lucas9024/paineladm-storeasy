import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [pay, setPay] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPay(event.target.value as string);
  };

  return (
    <Box sx={{ m: 1, minWidth: 50 }} style={{margin: '30px auto 20px auto', width: '205px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Forma de pagamento</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pay}
          label="Forma de pagamento"
          onChange={handleChange}
        >
          <MenuItem value={1}>Pix</MenuItem>
          <MenuItem value={2}>Debito/Credito</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
