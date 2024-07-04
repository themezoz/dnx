import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Divider: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: theme.spacing(3, 0),
      backgroundColor: theme.palette.info.main,
      borderColor: theme.palette.info.lighter,
      alignItems: 'center',
      height: 2,

      '&.MuiDivider-withChildren': {
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        height: '0 !important',
        '&::before': {
          backgroundColor: theme.palette.info.main,
        },
        '&::after': {
          backgroundColor: theme.palette.info.main,
        },
      },
    }),
  },
};

export default Divider;
