import { createTheme} from '@mui/material';
import { blue, cyan, green, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: green[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff",
    },
    background: {
      paper: "#303134",
      default: '#202124',
    },

  
  }
  // interface ILayoutBasePaginaProps{
  //   children: React.ReactNode;
  // }
  // interface ILayoutBasePaginaProps{
  //   titulo: string;
  //   children?: ReactNode;
  //   barraDeFerramentas?: ReactNode
  // }
});