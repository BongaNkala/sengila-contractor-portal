import React from 'react';
import { Box } from '@mui/material';
import InnovativeBackground from '../Background/InnovativeBackground';
import Header from './Header';

const MainLayout = ({ children, showHeader = true }) => {
  return (
    <InnovativeBackground>
      <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {showHeader && <Header />}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </InnovativeBackground>
  );
};

export default MainLayout;
