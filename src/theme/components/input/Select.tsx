import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Select: Components<Omit<Theme, 'components'>>['MuiSelect'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(1.25),
      '&.MuiInputBase-root': {
        background: 'transparent !important',
      },
      '& .MuiBox-root': {
        fontSize: theme.typography.h5.fontSize,
      },
    }),
    select: ({ theme }) => ({
      paddingRight: '0 !important',
      background: 'transparent !important',
      fontSize: theme.typography.caption.fontSize,
      color: theme.palette.text.primary,
      fontWeight: 600,
    }),
  },
};

export default Select;
