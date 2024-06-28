import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Activity from 'components/sections/dashboard/activity';
import RunningTask from 'components/sections/dashboard/running-task';
import TaskToday from 'components/sections/dashboard/task-today';

const Dashboard = () => {
  return (
    <Stack>
      <Box flex={5} height='200vh' p={3.5}>
        <Stack mx="auto" alignItems="center" width={1} maxWidth={760} spacing={3.5}>
          <Box flex={3}>
            <RunningTask />
          </Box>
          <Box flex={9}>
            <Activity />
          </Box>
        </Stack>
      </Box>

      <Box flex={3} height={`calc(100vh - 90px)`} overflow="scroll" bgcolor="info.main" position="sticky" top={90}>
        <Stack mx="auto" spacing={3.5} p={3.5} width={1} maxWidth={450}>
          <TaskToday/>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Dashboard;
