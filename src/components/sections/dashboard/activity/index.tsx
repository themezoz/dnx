import { Box, Stack, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ActivityChart from './ActivityChart';
import IconifyIcon from 'components/base/IconifyIcon';

const Activity = () => {
  const [week, setWeek] = useState('this-week');
  const [open, setOpen] = useState(false);

  return (
    <Paper sx={{ height: 230, bgcolor: 'info.dark' }}>
      <Stack alignItems="center" justifyContent="space-between" mt={-0.5}>
        <Typography variant="body1" color={'text.primary'} fontWeight={700}>
          Activity
        </Typography>

        <FormControl variant="filled" sx={{ width: 110 }}>
          <Select
            id="select-filled"
            value={week}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onChange={(event: SelectChangeEvent) => {
              setWeek(event.target.value);
            }}
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
        <ActivityChart sx={{ height: '100% !important' }} />
      </Box>
    </Paper>
  );
};

export default Activity;
