import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TaskOverviewTable from './TaskOverviewTable';

const TaskOverview = () => {

  return (
    <Stack direction="column" spacing={1.75} width={1}>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Task Overview</Typography>
        <Stack alignItems="center" justifyContent="center">
          <Typography>Search...</Typography>
        </Stack>
      </Stack>

      <Paper sx={{ mt: 1.5, py: 0, height: 'auto', width: 1 }}>
        <TaskOverviewTable />
      </Paper>
    </Stack>
  );
};

export default TaskOverview;
