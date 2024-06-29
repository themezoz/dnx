import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { gray, darkGray, red, green, blue, yellow, white } from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    state?: string;
  }
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    state: string;
  }
}

const palette: PaletteOptions = {
  neutral: {
    lighter: gray[200],
    light: gray[400],
    main: gray[500],
    darker: gray[900],
  },
  primary: {
    main: blue[500],
    dark: darkGray[500],
  },
  secondary: {
    main: blue[200],
  },
  info: {
    lighter: white[100],
    light: white[200],
    main: white[300],
    dark: white[400],
    darker: white[500],
  },
  success: {
    main: green[500],
  },
  warning: {
    main: yellow[500],
  },
  error: {
    main: red[500],
  },
  text: {
    primary: darkGray[500],
    secondary: gray[400],
    disabled: gray[300],
  },
};

export default palette;
