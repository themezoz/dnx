import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';
import Stack from './components/layout/Stack';
import Drawer from './components/navigation/Drawer';
import Paper from './components/surfaces/Paper';
import CssBaseline from './components/utils/CssBaseline';
import Button from './components/buttons/Button';
import ButtonBase from './components/buttons/ButtonBase';
import IconButton from './components/buttons/IconButton';
import Toolbar from './components/buttons/Toolbar';
import Link from './components/navigation/Link';
import Collapse from './components/list/Collapse';
import List from './components/list/List';
import ListItemButton from './components/list/ListItemButton';
import ListItemText from './components/list/ListItemText';
import MenuItem from './components/list/MenuItem';
import ListItemIcon from './components/list/ListItemIcon';

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiStack: Stack,
    MuiDrawer: Drawer,
    MuiLink: Link,
    MuiPaper: Paper,
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,
    MuiCollapse: Collapse,
    MuiList: List,
    MuiListItemButton: ListItemButton,
    MuiListItemText: ListItemText,
    MuiListItemIcon: ListItemIcon,
    MuiMenuItem: MenuItem,
    MuiCssBaseline: CssBaseline,
  },
});
