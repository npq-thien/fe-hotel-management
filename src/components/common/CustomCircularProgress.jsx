import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    customColor: {
      main: '#FA9191', // Customize this color as per your requirement
    },
  },
});

const CustomCircularProgress = () => {
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress
        sx={{
          color: 'customColor.main',
        }}
      />
    </ThemeProvider>
  );
};

export default CustomCircularProgress;