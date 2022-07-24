import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

export default function AboutIndex() {
  return (
    // <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: 1 }}>
      <Box sx={{ backgroundColor: '#fffff7', border: '2px solid #cceeef', borderRadius: 3, width: '100vh', height: '135px', p: 3, textAlign: 'left' }}>
        {/* <Box sx={{ width: '100vh', height: '70vh', p: 1, textAlign: 'left' }}> */}
        <Box>
          <Box sx={{ fontSize: 30 }}>
            About
          </Box>
          {/* <Box sx={{ mt: 1 }}>
            <Link rel="noopener" target="_blank" href="https://github.com/shu-a" underline="none" color="rgba(0, 0, 0, 0.6)">
              <GitHubIcon fontSize='large' sx={{ position: 'relative', top: '8px' }} /> <Box component="span" sx={{ fontSize: 25 }}>GitHub</Box>
            </Link>
          </Box> */}
          <Box sx={{ mt: 1 }}>
            <Link rel="noopener" target="_blank" href="mailto:pjsekaiscore@shu-a.app" underline="none" color="rgba(0, 0, 0, 0.6)" sx={{ verticalAlign: 'middle' }}>
              <MailIcon fontSize='large' sx={{ position: 'relative', top: '8px' }} /> <Box component="span" sx={{ fontSize: 25 }}>Mail</Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}