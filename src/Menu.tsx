import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TotalScore from './pages/Card/TotalSocre'
import { Link, NavLink, useLocation } from 'react-router-dom';

const pages = ['Home', 'Manual', 'About'];

const ResponsiveAppBar = () => {
  const { pathname } = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null>(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [disabled, setDisabled] = React.useState(false);
  React.useEffect(() => {
    pathname === '/' ? setDisabled(false) : setDisabled(true);
  }, [pathname]);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#00b3a4' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link} to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Project Sekai Total Score Simulator
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={NavLink} to={page === 'Home' ? '/' : page}
                sx={{
                  backgroundColor: pathname === '/' && page === 'Home' ? '#00b3a4' : pathname === '/' + page ? '#00b3a4' : '',
                  color: pathname === '/' && page === 'Home' ? '#ffffff' : pathname === '/' + page ? '#ffffff' : ''
                }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link} to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Project Sekai Total<br />Score Simulator
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  backgroundColor: pathname === '/' && page === 'Home' ? '#008075' : pathname === '/' + page ? '#008075' : '',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                  }
                }}
                component={Link} to={page === 'Home' ? '/' : page}
              >
                {page}
              </Button>
            ))}
          </Box>
          <TotalScore disabled={disabled} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
