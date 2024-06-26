import { Box, Stack, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ActivityChart from './ActivityChart';
import IconifyIcon from 'components/base/IconifyIcon';
import Button from '@mui/material/Button';

const chartData = {
  '2': [2.9, 2.5, 3, 1, 2, 1, 2],
  '0': [1.7, 2, 1.4, 3, 1.8, 2.4, 1.9],
  '1': [1.3, 2, 1, 3, 1, 2.6, 2.8],
};

const Activity = () => {
  const [data, setData] = useState(chartData['0']);
  const [week, setWeek] = useState('this-week');
  const [open, setOpen] = useState(false);

  const handleClick = (str: string) => {
    let data: number[] = [];

    if (str === 'week1') {
      data = chartData['0'];
      setData(data);
    } else if (str === 'week2') {
      data = chartData['1'];
      setData(data);
    } else if (str === 'week3') {
      data = chartData['2'];
      setData(data);
    }
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setWeek(event.target.value);
    setTimeout(() => {
      if (event.target.value === 'this-week') {
        handleClick('week1')
      } else if (event.target.value === 'last-week') {
        handleClick('week2')
      } else {
        handleClick('week3')
      }
    }, 100);
  };

  return (
    <Paper sx={{ height: 230, bgcolor: 'info.dark' }}>
      <Stack alignItems="center" justifyContent="space-between" mt={-0.5}>
        <Typography variant="body1" color={'text.primary'} fontWeight={700}>
          Activity
        </Typography>

        <Stack>
          <Button onClick={() => handleClick('week1')}>Week1</Button>
          <Button onClick={() => handleClick('week2')}>Week2</Button>
          <Button onClick={() => handleClick('week3')}>Week3</Button>
        </Stack>

        <FormControl variant="filled" sx={{ width: 110 }}>
          <Select
            // id="select-filled"
            value={week}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onChange={handleSelectChange}
            IconComponent={() => (
              <IconifyIcon
                icon="iconamoon:arrow-down-2-duotone"
                sx={{
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            )}
          >
            <MenuItem value="this-week">This Week</MenuItem>
            <MenuItem value="last-week">Last Week</MenuItem>
            <MenuItem value="two-weeks-ago">Two Weeks Ago</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Box mt={2} height={140} bgcolor="info.light" borderRadius={3}>
        <ActivityChart data={data} sx={{ height: '100% !important' }} />
      </Box>
    </Paper>
  );
};

export default Activity;
