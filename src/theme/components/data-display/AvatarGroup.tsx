import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const AvatarGroup: Components<Omit<Theme, 'components'>>['MuiAvatarGroup'] = {
  styleOverrides: {
    root: {},
    avatar: {
      height: 24,
      width: 24,
    },
  },
};

export default AvatarGroup;
