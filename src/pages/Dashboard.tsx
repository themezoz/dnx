import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Activity from 'components/sections/dashboard/activity';
import RunningTask from 'components/sections/dashboard/running-task';

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
        <Grid container height={"200vh"}>
          <h1>Hello!</h1>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Dashboard;
