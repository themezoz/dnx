declare module '@mui/material/styles' {
  interface Theme {
    customShadows: string[];
  }
  interface ThemeOptions {
    customShadows?: string[];
  }
}

const customShadows = ['5px 5px 20px 0px rgba(170,170,170,1)'];

export default customShadows;
