import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Activity from 'components/sections/dashboard/activity';
import RunningTask from 'components/sections/dashboard/running-task';
import TaskToday from 'components/sections/dashboard/task-today';

const Dashboard = () => {
  return (
    <Stack>
      <Grid container flex={5} sx={{ height: '200vh' }} p={3.5} spacing={3.5}>
        <Grid item lg={3.5}>
          <RunningTask />
        </Grid>
        <Grid item lg={8.5}>
          <Activity />
        </Grid>
      </Grid>

      <Box flex={3} height={`calc(100vh - 90px)`} overflow="scroll" bgcolor="info.main" position="sticky" top={90}>
        <Stack height={"200vh"} spacing={3.5} p={3.5}>
          <TaskToday/>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Dashboard;
