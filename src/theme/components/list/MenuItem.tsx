import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const MenuItem: Components<Omit<Theme, 'components'>>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0.75, 1.25),
      transition: 'all 0.3s ease-in-out',
      fontSize: theme.typography.body2.fontSize,
      borderRadius: theme.shape.borderRadius * 1.5,
      fontWeight: 500,
      '&:hover': {
        background: theme.palette.info.dark,
      },
    }),
  },
};

export default MenuItem;
