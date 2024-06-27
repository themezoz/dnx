import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const IconButton: Components<Omit<Theme, 'components'>>['MuiIconButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.info.main,
      background: theme.palette.info.lighter,
      color: theme.palette.text.disabled,
      marginLeft: 0,
    }),
    sizeLarge: ({ theme }) => ({
      fontSize: theme.typography.h4.fontSize,
      padding: theme.spacing(1.5),
    }),
    sizeMedium: ({ theme }) => ({
      fontSize: theme.typography.h6.fontSize,
      padding: theme.spacing(1.175),
    }),
    sizeSmall: ({ theme }) => ({
      fontSize: theme.typography.button.fontSize,
      padding: theme.spacing(0.875),
    }),
  },
};

export default IconButton;
