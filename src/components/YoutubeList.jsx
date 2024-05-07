import React, {useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import Table from  'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/material";
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/Layout";

const sidebarWidth = 240;

const YoutubeList = () => {
  useEffect(()=>{
    AOS.init();
  }, []);

    return (
        <>
        <Layout title="Youtube">
          <Box component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${sidebarWidth}px)`}, ml: {sm: `${sidebarWidth}px`} }}>
            <div className="title" style={{color:"#002653"}}>
              <h5 data-aos="fade-right" data-aos-duration="1000">Data Youtube</h5><hr />
            </div>
            <div className="top d-flex justify-content-end align-items-center" data-aos="fade-left" data-aos-duration="1000">
                <Form className="d-flex">
                  <Form.Control type="search" className="search" aria-label="Search" placeholder="Search" style={{borderRadius:'50px'}}/>
                  <Button variant="outline-primary me-3" style={{borderRadius:'50%', padding:' 10px'}}><SearchIcon/></Button>
                </Form>
            </div>
            <div className="form-table text-center" data-aos="fade-up" data-aos-duration="1000">
              <Table bordered responsive size="sm">
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
                      <Button variant="outline-warning" size="sm" className="m-1"><EditIcon fontSize="small"/></Button>
                      <Button variant="outline-danger" size="sm"><DeleteIcon fontSize="small"/></Button>
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
                      <Button variant="outline-warning" size="sm" className="m-1"><EditIcon fontSize="small"/></Button>
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
                      <Button variant="outline-warning" size="sm" className="m-1"><EditIcon fontSize="small"/></Button>
                      <Button variant="outline-danger" size="sm"><DeleteIcon fontSize="small"/></Button>
                    </td>
                  </tr>
                  </tbody>
              </Table>
            </div>
          </Box>
        </Layout>
        
        
        </>
    )
}

export default YoutubeList;