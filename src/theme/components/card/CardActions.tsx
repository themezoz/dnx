import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CardActions: Components<Omit<Theme, 'components'>>['MuiCardActions'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginTop: theme.spacing(7),
      padding: 0,
    }),
  },
};

export default CardActions;
