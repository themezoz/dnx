import { Grid } from '@mui/material';
import Activity from 'components/sections/dashboard/activity';
import RunningTask from 'components/sections/dashboard/running-task';

const Dashboard = () => {
  return (
    <Grid container>
      <Grid container lg={8} sx={{ height: '200vh' }} p={3.5} spacing={3.5}>
        <Grid item lg={3}>
          <RunningTask />
        </Grid>
        <Grid item lg={9}>
          <Activity/>
        </Grid>
      </Grid>

      <Grid
        container
        lg={4}
        sx={{
          height: 'calc(100vh - 200px)',
          bgcolor: '#ddd',
          overflow: 'scroll',
          position: 'sticky',
          top: 100,
        }}
      >
        <Grid container sx={{ height: '200vh' }}>
          <Grid item>
            <h1>Box2!</h1>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
