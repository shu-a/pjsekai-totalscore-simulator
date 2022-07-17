import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from './Header';

export default function AppSkeleton(props) {
  return (
    <Box>
      <Grid>
        <Header />
      </Grid>
      <Grid sx={{ mt: 8, p: 1 }}>
        {props.content}
      </Grid>
    </Box>
  );
}
