import React from "react";
import { Card, Col } from "react-bootstrap";
import "./certificates.css";

const CertificateCard = ({ certificate }) => {
  return (
    <Col sm={6} md={4}>
      <Card
        style={{ width: "20rem", height: "17rem" }}
        className="certificatesCard"
      >
        <a href={certificate.Verifiedlink} target="_blank" rel="noreferrer">
          <Card.Img
            variant="top"
            className="certificateLogo"
            style={{ height: "170px", width: '320px' }}
            src={certificate.logo}
          />
        </a>
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{certificate.title}</Card.Title>
          <Card.Text><span>Institute</span>  - {certificate.issuedBy} </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CertificateCard;
