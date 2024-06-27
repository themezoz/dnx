import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RunningTaskChart from './RunningTaskChart';

const chartData = [
  {
    value: 45,
    detail: {
      valueAnimation: false,
      offsetCenter: ['0%', '0%'],
    },
  },
];

const RunningTask = () => {
  return (
    <Paper sx={{ height: 220, bgcolor: 'primary.dark' }}>
      <Typography variant="subtitle1" fontWeight={600} color="info.lighter">
        Running Task
      </Typography>
      <Typography variant="h3" fontWeight={600} color="info.lighter" mt={2.5}>
        65
      </Typography>
      <Stack mt={2.5} spacing={2} alignItems="center" width={1}>
        <Box height={76} width={76}>
          <RunningTaskChart data={chartData} sx={{ height: '100% !important' }} />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={600} color="info.lighter">
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
