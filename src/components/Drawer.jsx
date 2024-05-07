import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import { Form, Button, Tooltip } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {OverlayTrigger} from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import { blue } from "@mui/material/colors";
import Home from '@mui/icons-material/Home';
import AddToPhotos from '@mui/icons-material/AddToPhotos';
import Folder from '@mui/icons-material/Folder';


const drawerWidth= 240;

const DrawerSidebar = (props) => {
    const {window} = props;
    const [open, setOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // true if closing, false if opening

    const handleDrawerClose = () => {
        setIsClosing(true);
        setOpen(false);
    };
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
    const handleDrawerToggle =  () => {
        if (!isClosing) {
            setOpen(!open);
        };
    };
    const drawer = (
        <div>
            <Toolbar />
              <Typography variant="h6" noWrap component="div"
              sx={{
                justifyContent:'center',
                alignItems: 'center' ,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white'
              }}>
              SIE<i style={{color: '#FFDD2B'}} >HUMES</i>
              </Typography>
                <Divider />
                <List>
                    {['Dashboard', 'Input Data', 'Data Post'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemIcon sx={{color:'white'}}>
                            {index === 0 ? (
                              <Home />
                            ) : index === 1 ? (
                              <AddToPhotos />
                            ) : (
                              <Folder />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={text}
                        secondary={
                          index === 2 && (
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <Typography variant="body2" color="white">
                                Feed Instagram
                              </Typography>
                              <Typography variant="body2" color="white">
                                Story Instagram
                              </Typography>
                              <Typography variant="body2" color="white">
                                Youtube
                              </Typography>
                            </Box> )}/>
                        </ListItemButton>
                    </ListItem>
        
                    ))}
                </List>
                <Divider />
            </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    const renderTooltip = (props) => (
        <Tooltip id="account-tooltip" {...props}>
          My Profile
        </Tooltip>
      );
  return (
    <div >
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'transparent',
          boxShadow: 'none',
          color:'#FFDD2B',
          justifyContent:'end',
          alignItems:'end'
        }}
      >
        <Toolbar>
          <IconButton
          position="fixed"
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mt:2, mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <div className="top d-flex justify-content-center align-items-center mt-3">
            <Form>
              <Form.Control type="search" className="search" aria-label="Search" placeholder="Search" style={{borderRadius:'50px'}}/>
              <Button variant="outline-primary me-3" style={{borderRadius:'50%', padding:' 10px'}}><SearchIcon/></Button>
            </Form>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <AccountCircleIcon sx={{ color: blue[900] , fontSize: [50], cursor:'pointer'}}  />
            </OverlayTrigger>
            </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#002653", color:'white'},
            
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
    </div>
  )
};
DrawerSidebar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
  };

export default DrawerSidebar;
