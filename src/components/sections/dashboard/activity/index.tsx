import { Box, Stack, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ActivityChart from './ActivityChart';

const Activity = () => {
    const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Paper sx={{ bgcolor: 'info.dark' }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="body1" color={'text.primary'} fontWeight={700}>
          Activity
        </Typography>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Box height={130} bgcolor="info.light" borderRadius={3}>
        <ActivityChart sx={{height: '100% !important'}}/>
      </Box>
    </Paper>
  );
};

export default Activity;
