import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import LogoImg from 'assets/images/Logo.png';
import LanguageSelect from './LanguageSelect';
import ProfileMenu from './ProfileMenu';

interface TopbarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isClosing, mobileOpen, setMobileOpen }: TopbarProps) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack
      px={3.5}
      py={2.5}
      alignItems="center"
      justifyContent="space-between"
      bgcolor="info.light"
      position="sticky"
      top={0}
    >
      <Stack spacing={2} alignItems="center">
        <Toolbar sx={{ display: { xm: 'block', lg: 'none' } }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <IconifyIcon icon="mingcute:menu-line" />
          </IconButton>
        </Toolbar>

        <ButtonBase
          component={Link}
          href="/"
          disableRipple
          sx={{ display: { xm: 'block', lg: 'none' } }}
        >
          <Image src={LogoImg} alt="logo" height={24} width={24} />
        </ButtonBase>

        <TextField
          variant="filled"
          placeholder="Search Task"
          sx={{ width: 350 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon={'mynaui:search'} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack spacing={2} alignItems="center">
        <LanguageSelect />
        <Tooltip title="Notifications">
          <IconButton size="large">
            <Badge color="error" variant="dot">
              <IconifyIcon icon="solar:bell-outline" />
            </Badge>
          </IconButton>
        </Tooltip>
        <ProfileMenu />
      </Stack>
    </Stack>
  );
};

export default Topbar;
