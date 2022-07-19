import React, { Suspense, lazy } from 'react';
import Box from '@mui/material/Box';
import Menu from './Menu';

export default function AppSkeleton() {
  return (
    <Box component="div">
      <Box component="div">
        <Menu />
      </Box>
      <Box component="div" sx={{ top: 0, height: '68.5px' }} />
    </Box>
  );
}
