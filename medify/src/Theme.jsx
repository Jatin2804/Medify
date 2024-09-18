import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Light Blue
      // light: '#64b5f6',
      // dark: '#1976d2',
    },
    secondary: {
      main: "#ffffff", 
      // light: '#ff4081',
      // dark: '#c51162',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
})
export default theme;

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
// npm install @fontsource/poppins
 