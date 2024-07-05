import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
} from 'data/images';

const rows = [
  {
    id: 1,
    task: 'Designing Landing Page',
    members: [Avatar6, Avatar8, Avatar2],
    progress: 60,
    status: 'in-progress',
    timeLeft: '2 Days',
  },
  {
    id: 2,
    task: 'Setting Up Analytics',
    members: [Avatar1, Avatar7, Avatar3, Avatar8],
    progress: 100,
    status: 'completed',
    timeLeft: '2 Days',
  },
  {
    id: 3,
    task: 'Fixing Critical Bugs',
    members: [Avatar2, Avatar5, Avatar8, Avatar4, Avatar7, Avatar1, Avatar6, Avatar3],
    progress: 100,
    status: 'completed',
    timeLeft: '2 Days',
  },
  {
    id: 4,
    task: 'Creating Wireframes',
    members: [Avatar8, Avatar3, Avatar5],
    progress: 75,
    status: 'in-progress',
    timeLeft: '2 Days',
  },
  {
    id: 5,
    task: 'Fixing UI/UX Issues',
    members: [Avatar7, Avatar4, Avatar1, Avatar5, Avatar2],
    progress: 0,
    status: 'pending',
    timeLeft: '2 Days',
  },
  {
    id: 6,
    task: 'Writing Unit Tests',
    members: [Avatar4, Avatar6, Avatar1, Avatar5],
    progress: 40,
    status: 'in-progress',
    timeLeft: '2 Days',
  },
  {
    id: 7,
    task: 'Conducting User Testing',
    members: [Avatar5, Avatar2, Avatar7, Avatar3, Avatar1],
    progress: 80,
    status: 'in-progress',
    timeLeft: '2 Days',
  },
  {
    id: 8,
    task: 'Planning Product Launch',
    members: [Avatar3, Avatar1, Avatar6],
    progress: 55,
    status: 'in-progress',
    timeLeft: '2 Days',
  },
  {
    id: 9,
    task: 'Updating Website Content',
    members: [Avatar2, Avatar1, Avatar4, Avatar8],
    progress: 70,
    status: 'in-progress',
    timeLeft: '2 Days',
  },
  {
    id: 10,
    task: 'Deploying Application',
    members: [Avatar5, Avatar2],
    progress: 80,
    status: 'in-progress',
    timeLeft: '2 Days',
  },
];

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'task',
    headerName: 'Task',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 220,
  },
  {
    field: 'members',
    headerName: 'Members',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 140,
    renderCell: (params) => {
      return (
        <Stack height={1} alignItems="center">
          <AvatarGroup max={5}>
            {params.value.map((avatar: string) => (
              <Avatar key={avatar} alt="avatar_img" src={avatar} />
            ))}
          </AvatarGroup>
        </Stack>
      );
    },
  },
  {
    field: 'progress',
    headerName: 'Progress',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 210,
    renderCell: (params) => {
      return (
        <Stack alignItems="center" gap={1} sx={{ height: 1, width: 1 }}>
          <Typography variant="body2" minWidth={40}>
            {params.value}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={params.value}
            sx={{
              width: 1,
              maxWidth: 240,
              height: '0.2rem',
              borderRadius: 4,
            }}
          />
        </Stack>
      );
    },
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    flex: 1,
    minWidth: 140,
    renderCell: (params) => {
      const color =
        params.value === 'in-progress'
          ? 'primary'
          : params.value === 'completed'
            ? 'success'
            : params.value === 'pending'
              ? 'warning'
              : 'info';
      return (
        <Stack direction="column" alignItems="flex-end" justifyContent="center" height={1}>
          <Chip label={params.value} size="small" color={color} />
        </Stack>
      );
    },
  },
  {
    field: 'timeLeft',
    headerName: 'Time Left',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    flex: 1,
    minWidth: 120,
  },
];

const TaskOverviewTable = () => {
  return (
    <DataGrid
      density="standard"
      columns={columns}
      rows={rows}
      rowHeight={60}
      disableColumnResize
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      autosizeOptions={{
        includeOutliers: true,
        includeHeaders: false,
        outliersFactor: 1,
        expand: true,
      }}
      autoHeight
      pageSizeOptions={[5]}
    />
  );
};

export default TaskOverviewTable;
