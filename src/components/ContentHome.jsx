import React, {useState, useEffect } from "react";
import { Form, Button, Tooltip } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { blue } from "@mui/material/colors";
import Card from 'react-bootstrap/Card';
import Table from  'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate, useLocation} from "react-router-dom";
import {OverlayTrigger} from "react-bootstrap";
import Box from '@mui/material/Box';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/Layout";
import Modal from 'react-bootstrap/Modal';

const sidebarWidth= 240;

const ContentHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

    const renderTooltip = (props) => (
      <Tooltip id="account-tooltip" {...props}>
        My Profile
      </Tooltip>
    );

    const navigate = useNavigate(); //untuk melakukan navigasi ke rute tujuan tanpa mengambil informasi tentang rute saat ini
    const location = useLocation(); //untuk mengambil informasi tentang rute saat ini, seperti pathname, search, dan state
  
    // Ambil rute sebelumnya dari state
    // const from = location.state?.from || '/';

    const handleNavigateToAccount = () => {
      navigate('/account', { replace: true }); //'replace:true' argumen yang mengganti rute saat ini di dalam histori navigasi dengan rute baru.
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
    const handleNavigateToEdit = () => {
      navigate('/edit', { replace: true });
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <Layout title="Dashboard">
        <Box
        component="main"
        sx={{flexGrow: 1, p: 3, width: { sm: `calc(100% - ${sidebarWidth}px)`}, ml: {sm: `${sidebarWidth}px`} }}
        >
          <div className="top d-flex justify-content-end align-items-end mb-3" data-aos="fade-left" data-aos-duration="1000">
            <Form>
              <Form.Control type="search" className="search" aria-label="Search" placeholder="Search" style={{borderRadius:'50px'}}/>
              <Button variant="outline-primary me-3" style={{borderRadius:'50%', padding:' 10px'}}><SearchIcon/></Button>
            </Form>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <AccountCircleIcon sx={{ color: blue[900] , fontSize: [50], cursor:'pointer'}} onClick={handleNavigateToAccount} />
            </OverlayTrigger>
            </div>
          <div className="card-home ">
            <Card className="card-feed shadow-sm" style={{borderRadius:'15px'}} onClick={handleNavigateToAction1} data-aos="fade-up" data-aos-duration="1000">
              <Card.Body>Feed Instagram</Card.Body>
            </Card>
            <Card className="card-story shadow-sm" style={{borderRadius:'15px'}} onClick={handleNavigateToAction2} data-aos="fade-down" data-aos-duration="1000">
              <Card.Body>Story Instagram</Card.Body>
            </Card>
            <Card className="card-yt shadow-sm" style={{borderRadius:'15px'}} onClick={handleNavigateToAction3} data-aos="fade-up" data-aos-duration="1000">
              <Card.Body>Youtube</Card.Body>
            </Card>
          </div>

          <div className="form-table text-center" data-aos="fade-up" data-aos-duration="1500">
            <Table bordered responsive size="sm" >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Platform</th>
                  <th>Day</th>
                  <th>Name</th>
                  <th>Content</th>
                  <th>Keyword</th>
                  <th>References</th>
                  <th>Due Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>khdgqwd</td>
                  <td>dhqnd</td>
                  <td>djqijwi</td>
                  <td>dhqnd</td>
                  <td>dhqnd</td>  
                  <td>dhqnd</td>
                  <td>dhqnd</td>
                  <td>
                    <Button variant="outline-warning" size="sm" className="edit m-1" onClick={handleNavigateToEdit}><EditIcon fontSize="small"/></Button>
                    <Button variant="outline-danger" size="sm" onClick={handleShow}><DeleteIcon fontSize="small"/></Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Hapus Data</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Yakin ingin menghapus data ini?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Cancel
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>khdgqwd</td>
                  <td>dhqnd</td>
                  <td>djqijwi</td>
                  <td>dhqnd</td>
                  <td>dhqnd</td>
                  <td>dhqnd</td>
                  <td>dhqnd</td>
                  <td>
                    <Button variant="outline-warning" size="sm" className="edit m-1"><EditIcon fontSize="small"/></Button>
                    <Button variant="outline-danger" size="sm"><DeleteIcon fontSize="small"/></Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>khdgqwd</td>
                  <td>dhqnd</td>
                  <td>djqijwi</td>
                  <td>dhqnd</td>
                  <td>dhqnd</td>
                  <td>dhqnd</td>
                  <td>dhqnd</td>
                  <td>
                    <Button variant="outline-warning" size="sm" className="edit m-1"><EditIcon fontSize="small"/></Button>
                    <Button variant="outline-danger" size="sm"><DeleteIcon fontSize="small"/></Button>
                  </td>
                </tr>
                </tbody>
            </Table>
          </div>
        </Box>
      </Layout>
        
    );
  }

export default ContentHome;