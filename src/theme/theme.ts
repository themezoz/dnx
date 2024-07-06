import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
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
import InputBase from './components/input/InputBase';
import FilledInput from './components/input/FilledInput';
import OutlinedInput from './components/input/OutlinedInput';
import InputAdornment from './components/input/InputAdornment';
import Badge from './components/data-display/Badge';
import Select from './components/input/Select';
import Card from './components/card/Card';
import CardHeader from './components/card/CardHeader';
import CardMedia from './components/card/CardMedia';
import CardContent from './components/card/CardContent';
import Slider from './components/input/Slider';
import AvatarGroup from './components/data-display/AvatarGroup';
import Divider from './components/data-display/Divider';
import CardActions from './components/card/CardActions';
import FormControlLabel from './components/input/FormControlLabel';
import Checkbox from './components/input/Checkbox';
import DataGrid from './components/data-grid/DataGrid';
import Chip from './components/data-display/Chip';
import PaginationItem from './components/pagination/PaginationItem';

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
    MuiInputBase: InputBase,
    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputAdornment: InputAdornment,
    MuiFormControlLabel: FormControlLabel,
    MuiCheckbox: Checkbox,
    MuiSelect: Select,
    MuiSlider: Slider,
    MuiBadge: Badge,
    MuiChip: Chip,
    MuiCard: Card,
    MuiCardMedia: CardMedia,
    MuiCardHeader: CardHeader,
    MuiCardContent: CardContent,
    MuiCardActions: CardActions,
    MuiAvatarGroup: AvatarGroup,
    MuiDivider: Divider,
    MuiDataGrid: DataGrid,
    MuiPaginationItem: PaginationItem,
    MuiCssBaseline: CssBaseline,
  },
});
