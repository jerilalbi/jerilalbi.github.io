import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#03346E',
      },
      secondary: {
        main: '#021526',
      },
    },
    typography: {
      fontFamily: 'Noto Sans, sans-serif',
    },
    spacing: 8,
  });
  
  export default theme;