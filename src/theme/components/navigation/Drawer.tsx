import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Drawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  styleOverrides: {
    root: {
      '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
      },
    },
    paper: ({ theme }) => ({
      padding: theme.spacing(0, 3.5),
      height: '100vh',
      width: 252,
      border: 0,
      borderRadius: 0,
      backgroundColor: theme.palette.info.lighter,
      boxSizing: 'border-box',
    }),
  },
};

export default Drawer;
