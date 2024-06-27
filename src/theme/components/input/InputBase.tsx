import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.info.main,
      borderRadius: theme.shape.borderRadius,
      background: `${theme.palette.info.lighter} !important`,
      fontSize: theme.typography.subtitle2.fontSize,
      color: theme.palette.neutral.light,
      padding: theme.spacing(1.25, 2.5),
      letterSpacing: 0.5,

      '& input::placeholder': {
        color: theme.palette.neutral.light,
        opacity: 1,
      },
      '&:before, &:after': {
        display: 'none',
      },
    }),
    colorSecondary: ({ theme }) => ({
      background: `${theme.palette.info.dark} !important`,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 1.25),
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default InputBase;
