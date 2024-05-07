import React, {useEffect} from "react";
import {Card, Button, Row, Col, Image} from "react-bootstrap";
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Box from  '@mui/material/Box';
import Layout from "../components/Layout";

const sidebarWidth = 240;

function Account () {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
        <Layout title="Account">
            <Box
            component="main"
            sx={{flexGrow: 1, p: 3, width: { sm: `calc(100% - ${sidebarWidth}px)`}, ml: {sm: `${sidebarWidth}px`} }}
            >
                <div className="title" style={{color:"#002653"}}>
                <h5 data-aos="fade-right" data-aos-duration="1000">My Account</h5><hr />
                </div>
                <div className="card-account">
                    <Card bg="transparent" border="secondary" text="dark" data-aos="fade-up" data-aos-duration="1500">
                        <Card.Body className=" ">
                            <Row className="mt-3 mb-3 d-flex justify-content-center align-items-center">
                                <Col md={3}>
                                    <Image src="/src/assets/img/profil.png" className="img-thumbnail img-fluid" roundedCircle />
                                </Col>
                                <Col md={4} xs={10}>
                                    <Card.Title as="h2" style={{color:"#002653"}}>Marcella Indarwati</Card.Title>
                                    <Card.Text>
                                        Anggota Divisi Humas
                                    </Card.Text>
                                    <footer className="blockquote-footer">
                                        <cite title="Aslab Informatika">Asisten Laboratorium Informatika</cite>
                                    </footer>
                                    <Button size="md" variant="danger">Logout</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Box>
        </Layout>
        </>
    )
}

export default Account;