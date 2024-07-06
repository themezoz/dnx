import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FormControlLabel: Components<Omit<Theme, 'components'>>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
    },
    label: ({ theme }) => ({
      letterSpacing: 0.5,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
      marginLeft: theme.spacing(0.75),
      userSelect: 'none',
    }),
  },
};

export default FormControlLabel;
