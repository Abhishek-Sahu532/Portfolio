import React from "react";
import {  Card, Col, Row } from "react-bootstrap";
import hackerRank from '../../assets/img/hackerRank.png'
import './certificates.css'
import colorSharp2 from '../../assets/img/color-sharp2.png'



const Certificates = () => {

const CertificatesList =[
{
    Verifiedlink:'',
    title:'',
    issuedBy:'',
    logo: hackerRank
}
]




  return (
    <>
    <section className="certificates">
     
     <h2>Certificates</h2>
            <p className='certificates-section-heading'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
        <Row>
           
          <Col sm={6} md={4} >
            <Card style={{ width: "18rem" }} className='certificatesCard' >
              <Card.Img variant="top" src={hackerRank} />
              <Card.Body>
                <Card.Title>javascript</Card.Title>
            <Card.Text> - hackerRank </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
    {/* <img src={colorSharp2} alt="" className="colorsharp" /> */}
      
      </section>
    </>
  );
};

export default Certificates;
