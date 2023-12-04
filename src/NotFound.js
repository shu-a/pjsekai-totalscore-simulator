import { Box } from '@mui/system';
import React from 'react';

export default function NotFound() {
  return (
    <Box component="div">
      <Box
        component="div"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        display="flex"
        sx={{ fontSize: 30 }}
      >
        존재하지 않는 페이지입니다.
      </Box>
    </Box>
  );
}
