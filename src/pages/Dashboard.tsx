import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Activity from 'components/sections/dashboard/activity';
import RunningTask from 'components/sections/dashboard/running-task';
import TaskToday from 'components/sections/dashboard/task-today';

const Dashboard = () => {
  return (
    <Stack>
      <Box p={3.5} width={`calc(100% - 460px)`} height="200vh">
        <Stack mx="auto" alignItems="center" width={1} spacing={3.5}>
          <Box minWidth={200}>
            <RunningTask />
          </Box>
          <Box width={`calc(100% - 200px)`}>
            <Activity />
          </Box>
        </Stack>
      </Box>

      <Box
        height={`calc(100vh - 90px)`}
        width={460}
        overflow="scroll"
        bgcolor="info.main"
        position="sticky"
        top={90}
        padding={0}
        sx={(theme) => ({
          '&:hover': {
            '&::-webkit-scrollbar-thumb': {
              background: theme.palette.info.darker,
              visibility: 'visible',
            },
          },
        })}
      >
        <Stack mx="auto" direction="column" spacing={3.5} p={3.5} width={1}>
          <TaskToday />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Dashboard;
