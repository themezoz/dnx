import { useState } from 'react';
import { MenuItem } from 'routes/sitemap';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from 'components/base/IconifyIcon';

const ListItem = ({ subheader, icon, path, active }: MenuItem) => {
  const [open, setOpen] = useState(false);

  const isActivePath = active && path === '/';

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItemButton
      component={Link}
      href={path}
      onClick={handleClick}
      sx={{ mb: 3, bgcolor: isActivePath ? 'neutral.light' : null }}
    >
      <ListItemIcon>
        {icon && (
          <IconifyIcon
            icon={icon}
            fontSize="h4.fontSize"
            sx={{
              color: isActivePath ? 'text.primary' : null,
            }}
          />
        )}
      </ListItemIcon>
      <ListItemText
        primary={subheader}
        sx={{
          '& .MuiListItemText-primary': {
            ml: 0.75,
            color: isActivePath ? 'text.primary' : null,
            fontWeight: isActivePath ? 600 : 500,
            fontSize: 'body2.fontSize',
          },
        }}
      />
    </ListItemButton>
  );
};

export default ListItem;
