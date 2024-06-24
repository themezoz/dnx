import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const List: Components<Omit<Theme, 'components'>>['MuiList'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0),
    }),
  },
};

export default List;
