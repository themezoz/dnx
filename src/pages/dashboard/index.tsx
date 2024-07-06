import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Activity from 'components/sections/dashboard/activity';
import TaskToday from 'components/sections/dashboard/task-today';
import RunningTask from 'components/sections/dashboard/running-task';
import UpcomingTask from 'components/sections/dashboard/upcoming-task';
import WeekCalendar from 'components/sections/dashboard/week-calendar';
import MonthlyMentors from 'components/sections/dashboard/monthly-mentors';
import TaskOverview from 'components/sections/dashboard/task-overview';

const Dashboard = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Stack p={3.5} spacing={3.5} direction="column" width={{ xs: 1, md: 'calc(100% - 460px)' }}>
        <Stack
          width={1}
          spacing={3.5}
          direction={{ xs: 'column', sm: 'row', md: 'column', xl: 'row' }}
          alignItems="center"
        >
          <RunningTask />
          <Activity />
        </Stack>

        <MonthlyMentors />
        <UpcomingTask />
        <TaskOverview />
      </Stack>

      <Box
        width={{ xs: 1, md: 460 }}
        height={{ xs: 'auto', md: 'calc(100vh - 90px)' }}
        overflow="scroll"
        bgcolor="info.main"
        position="sticky"
        top={90}
        sx={{
          '&:hover, &:focus': {
            '&::-webkit-scrollbar-thumb': {
              visibility: 'visible',
            },
          },
        }}
      >
        <Stack p={3.5} spacing={3.5} width={1} direction="column">
          <WeekCalendar />
          <TaskToday />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Dashboard;
