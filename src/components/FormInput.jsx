import React, {useEffect, useState} from "react";
import { Col, Form, Row, InputGroup, Button, Alert} from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {useNavigate, useLocation} from "react-router-dom";
import Box from  '@mui/material/Box';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/Layout";

const sidebarWidth = 240;

const FormInput = () => {
    const navigate = useNavigate(); //untuk melakukan navigasi ke rute tujuan tanpa mengambil informasi tentang rute saat ini
    const location = useLocation(); //untuk mengambil informasi tentang rute saat ini, seperti pathname, search, dan state

    // Simpan rute saat ini sebagai rute sebelumnya
    useEffect(() => {
      return () => {
        location.state = { from: location };
      };
    }, [location]);

    useEffect(() => {
      AOS.init();
    }, []);
    
    // const handleGoBack = () => {
    //   if (location.state?.from) {
    //     navigate(location.state.from);
    //   } else {
    //     navigate(-1);
    //   }
    // };
    
    const handleNavigateToHome = () => {
      navigate('/', { state: { from: location } });
    };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return (
        <>
        <Layout title="Input Data">
          <Box component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${sidebarWidth}px)`}, ml: {sm: `${sidebarWidth}px`} }}>
          <div className="title" style={{color:"#002653"}}>
            <h5 data-aos="fade-right" data-aos-duration="1000">Form Input Data</h5><hr />
          </div>

          <div data-aos="fade-left" data-aos-duration="1000">
            {[
          'warning'
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            Please fill in all available data!
          </Alert>
        ))}
          </div>

          <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex flex-column">
            <Row className="g-2 w-100">
              <Form.Group as={Col} controlId="validationPlatform">
              <FloatingLabel
                  controlId="floatingSelectGrid platform"
                  label="Select a platform"
                >
                  <Form.Select required>
                    <option></option>
                    <option value="1">Feed Instagram</option>
                    <option value="2">Story Instagram</option>
                    <option value="3">Youtube</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please choose a platform.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="validationDay">
                <FloatingLabel
                  controlId="floatingSelectGrid day"
                  label="Select a day"
                >
                  <Form.Select required>
                    <option></option>
                    <option value="1">Senin</option>
                    <option value="2">Selasa</option>
                    <option value="3">Rabu</option>
                    <option value="4">Kamis</option>
                    <option value="5">Jum'at</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please choose a day.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="validationDate">
                <FloatingLabel
                  controlId="floatingDateGrid"
                  label=""
                >
                  <InputGroup className="mb-2" size="lg" hasValidation>
                    <Form.Control type="date" style={{ height:'58px', borderRadius: '0.30rem', fontSize:'15px'}} required/>
                    <Form.Control.Feedback type="invalid">
                    Please choose a date.
                  </Form.Control.Feedback>
                  </InputGroup>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row className="g-2 w-100">
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <InputGroup className="mb-2" size="md" hasValidation>
                  <Form.Control id="form-name" type="text" style={{ height:'50px', borderRadius: '0.30rem'}} required  />
                  <Form.Control.Feedback type="invalid">
                    Please fill in your name.
                  </Form.Control.Feedback>
                </InputGroup>
                <Form.Label>Keyword</Form.Label>
                <InputGroup className="mb-2" size="md" hasValidation>
                  <Form.Control id="form-name" type="text" style={{ height:'50px', borderRadius: '0.30rem'}} required  />
                  <Form.Control.Feedback type="invalid">
                    Please fill in your keyword.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Content</Form.Label>
                <InputGroup className="mb-2" size="md" hasValidation>
                  <Form.Control id="form-name" as="textarea" type="text" style={{ height:'140px', borderRadius: '0.30rem'}} rows={4} required  />
                  <Form.Control.Feedback type="invalid">
                    Please fill in your content.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>References</Form.Label>
                <InputGroup className="mb-2" size="md" hasValidation>
                  <Form.Control id="form-name" type="text" style={{ height:'50px', borderRadius: '0.30rem'}} required  />
                  <Form.Control.Feedback type="invalid">
                    Please fill in your references.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="d-flex justify-content-end">
                <Button variant="warning" as="a" style={{color:'white'}} className="mx-2 px-3" onClick={handleNavigateToHome}>Cancel</Button>  {/*onClick={handleGoBack}*/}
                <Button variant="primary" type="submit" className="px-3">Save</Button> {/*onClick={handleNavigateToHome}*/}
              </Form.Group>
              
            </Row>
          </Form>
          </Box>
        </Layout>
        
        
        </>
    );
};

export default FormInput;