import { Typography, Paper, Box, Stack } from '@mui/material';
import RunningTaskChart from './RunningTaskChart';

const chartData = [
  {
    value: 45,
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '0%'],
    },
  },
];

const RunningTask = () => {
  return (
    <Paper sx={{ height: 230, bgcolor: 'primary.dark' }}>
      <Typography variant="subtitle1" fontWeight={600} color="info.light">
        Running Task
      </Typography>
      <Typography variant="h3" fontWeight={600} color="info.light" mt={2}>
        65
      </Typography>
      <Stack mt={3} spacing={2} alignItems="center" width={1}>
        <Box height={76} width={76}>
          <RunningTaskChart data={chartData} sx={{ height: '100% !important' }} />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={600} color="info.light">
            100
          </Typography>
          <Typography variant="subtitle2" color="text.disabled" mt={0.5}>
            Task
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default RunningTask;
