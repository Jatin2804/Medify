import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content with "My Bookings" button
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box variant="h6" sx={{ my: 2 }}>
        <img src="./logo.png" height="40px" width="120px" alt="Logo" />
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Find Doctors" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/search">
            <ListItemText primary="Hospitals" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Medicines" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Surgeries" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Software for Provider" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Facilities" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* "My Bookings" button in Drawer */}
      
      <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Link to="/bookings" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ color: 'white', backgroundColor: 'primary.main' }}>
          My Bookings
        </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', marginX: "2%", padding: "5px" }}>
      <CssBaseline />
      <AppBar position="static" sx={{ background: "linear-gradient(to right, #E7F0FF , #E8F1FF78)", color: 'black', boxShadow: 0 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, width: '20%' }}>
            <img src="./logo.png" height="40px" width="120px" alt="Logo" />
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'space-evenly', alignItems: 'center', width: '80%', flexWrap: "wrap" }}>
            <Typography sx={{ color: 'black', px: 2, width: "fit-content" }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                Find Doctors
              </Link>
            </Typography>
            <Typography sx={{ color: 'black', px: 2, width: "fit-content" }}>
              <Link to="/search" style={{ textDecoration: 'none', color: 'black' }}>
                Hospitals
              </Link>
            </Typography>
            <Typography sx={{ color: 'black', px: 2, width: "fit-content" }}>Medicines</Typography>
            <Typography sx={{ color: 'black', px: 2, width: "fit-content" }}>Surgeries</Typography>
            <Typography sx={{ color: 'black', px: 2, width: "fit-content" }}>Software for Provider</Typography>
            <Typography sx={{ color: 'black', px: 2, width: "fit-content" }}>Facilities</Typography>
            <Link to="/bookings" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ color: 'white', backgroundColor: 'primary.main' }}>
                My Bookings
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default DrawerAppBar;
