import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Checkbox: Components<Omit<Theme, 'components'>>['MuiCheckbox'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      color: theme.palette.neutral.lighter,
    }),
    sizeMedium: ({ theme }) => ({
      '& .MuiBox-root': {
        fontSize: theme.typography.h4.fontSize,
      },
    }),
    sizeSmall: ({ theme }) => ({
      '& .MuiBox-root': {
        fontSize: theme.typography.h5.fontSize,
      },
    }),
  },
};

export default Checkbox;
