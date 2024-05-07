import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import AddToPhotos from "@mui/icons-material/AddToPhotos";
import FolderIcon from '@mui/icons-material/Folder';
import Instagram from "@mui/icons-material/Instagram";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import Youtube from "@mui/icons-material/Youtube";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { PropTypes } from 'prop-types';
import { Form, Button, Tooltip } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {OverlayTrigger} from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import { blue } from "@mui/material/colors";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";

    const sidebarWidth= 240;

const Sidebar = (props) => {
    const {window} = props;
    const [open, setOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // true if closing, false if opening
    // const [isHome, setHome] = useState(false);

    // const homeFunc = () => {
    //   setHome ((prev) => (prev = !prev));
    // };

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
    const container = window !== undefined ? () => window().document.body : undefined;

    const renderTooltip = (props) => (
      <Tooltip id="account-tooltip" {...props}>
        My Profile
      </Tooltip>
    );

    const navigate = useNavigate();
    const handleNavigateToHome = () => {
      navigate('/', { replace: true });
    };
    const handleNavigateToInput = () => {
      navigate('/input', { replace: true });
    };
    const handleNavigateToAction1 = () => {
      navigate('/action1', { replace: true });
    };
    const handleNavigateToAction2 = () => {
      navigate('/action2', { replace: true });
    };
    const handleNavigateToAction3 = () => {
      navigate('/action3', { replace: true });
    };

    const sdbar = (
      <div className="sidebar">
      <Navbar collapseOnSelect>
        <Container className="flex-column">
          <Navbar.Brand onClick={handleNavigateToHome} style={{ cursor: 'pointer' }} >SIE<i>HUMES</i></Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex-column mt-4 pe-3">
              <Nav.Link onClick={handleNavigateToHome}><Home fontSize="small"/> Dashboard</Nav.Link>
              <Nav.Link onClick={handleNavigateToInput} ><AddToPhotos fontSize="small"/> Input Data</Nav.Link>
              <NavDropdown title={<><FolderIcon fontSize="small"/> Data Post</>} id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={handleNavigateToAction1}><Instagram fontSize="small"/> Feed Instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleNavigateToAction2}>
                <PhoneAndroid fontSize="small"/>
                 Story Instagram
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleNavigateToAction3}><Youtube fontSize="small" /> Youtube</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    );

    
    return (
    <>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
          position="inherit"
            color="primary"
            aria-label="open sdbar"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ml:2, mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
      {/* <AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${sidebarWidth}px)` },
        //   ml: { sm: `${sidebarWidth}px` },
        //   bgcolor: 'white',
        //   boxShadow:'1',
        //   color:"#002653",
        //   fontWeight: "bold"
        // }}
      >
        <Toolbar>
          
          {/* <Typography variant="h6" noWrap component="div" sx={{fontFamily:'Poppins'}}>
              Dashboard
              {/* {isHome ? 'Dashboard' : 'Form Input Data'}
            </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth},
          }}
        >
          {sdbar}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth, color:'white'},
            
          }}
          open
        >
          {sdbar}
        </Drawer>
      </Box>
      </Box>
    </>
    )
};

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;