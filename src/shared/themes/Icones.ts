import { createTheme} from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const IconesTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      dark: '#ffffff',
      light: '#dedede',
      contrastText: "#ffffff",
    },
    secondary: {
      main: '#0c4861',
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff",
    },
    background: {
      default: '#f7f6f3',
      paper: "#ffffff",
    }
  }

});