import React, {useEffect, useState} from 'react';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/Layout";
import { Button, Card, CardBody, CardLink, CardTitle, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
    <Layout title="Login">
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <Card className='card-login shadow-sm border-0 bg-transparent' style={{width:'25rem', marginTop:'13rem'}}>
          <CardBody className=''>
            <CardTitle className='fw-bold text-center' style={{fontSize:'30px', color:'#002653'}}>Login</CardTitle>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex flex-column mt-4">
                <Form.Group as={Col}>
                <InputGroup className="mb-2" size="md" hasValidation>
                  <Form.Control id="username" type="text" placeholder="Username" style={{ height:'50px', borderRadius: '5px'}} required  />
                  <Form.Control.Feedback type="invalid">
                    Please fill in your username.
                  </Form.Control.Feedback>
                </InputGroup>
                <InputGroup className="mb-2" size="md" hasValidation>
                  <Form.Control id="password" type="password" placeholder="Password" style={{ height:'50px', borderRadius: '5px'}} required  />
                  <Form.Control.Feedback type="invalid">
                    Please fill in your password.
                  </Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
                <Form.Group className='d-grid gap-2 text-center'>
                  <Button variant="primary" type="submit" className="px-3">Login</Button>
                  <text className='text-secondary' style={{fontSize:'12px'}}>Haven't a account? <Link className='link-underline link-underline-opacity-0'>Register</Link></text>
                </Form.Group>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Layout>
  )
}

export default Login;
