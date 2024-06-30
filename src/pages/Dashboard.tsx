import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Activity from 'components/sections/dashboard/activity';
import RunningTask from 'components/sections/dashboard/running-task';
import TaskToday from 'components/sections/dashboard/task-today';

const Dashboard = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Box p={3.5} width={{ xs: 1, md: 'calc(100% - 460px)' }}>
        <Stack width={1} spacing={3.5} alignItems="center" direction={{ xs: 'column', sm: 'row' }}>
          <Box width={1} maxWidth={{ xs: 1, sm: 200 }}>
            <RunningTask />
          </Box>
          <Box width={{ xs: 1, md: 'calc(100% - 200px)' }}>
            <Activity />
          </Box>
        </Stack>
      </Box>

      <Box
        height={{ xs: 'auto', md: 'calc(100vh - 90px)' }}
        width={{ xs: 1, md: 460 }}
        overflow="scroll"
        bgcolor="info.main"
        position="sticky"
        top={90}
        padding={0}
        sx={{
          '&:hover': {
            '&::-webkit-scrollbar-thumb': {
              background: 'info.darker',
              visibility: 'visible',
            },
          },
        }}
      >
        <Stack mx="auto" p={3.5} width={1} spacing={3.5} direction="column">
          <TaskToday />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Dashboard;
