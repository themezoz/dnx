import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FormControlLabel: Components<Omit<Theme, 'components'>>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginLeft: theme.spacing(0),
    }),
    label: ({ theme }) => ({
      letterSpacing: 0.5,
      marginLeft: theme.spacing(0.75),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
      userSelect: 'none',
    }),
  },
};

export default FormControlLabel;
