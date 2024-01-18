import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./certificates.css";
import CertificateCard from "./CertificateCard";
import Devsnest from "../../assets/img/devsnest.svg";
import Almabetter from "../../assets/img/almabetter.png";
import HackerRank from "../../assets/img/hackerRank.png";
import Coursera from "../../assets/img/COURSERA.png";
import samLogo from "../../assets/img/samLogo.jpeg";
import { FaHashtag } from "react-icons/fa";

const Certificates = () => {
  const CertificatesList = [
    {
      Verifiedlink: "https://devsnest.in/certificate/_Or3QpK5dM0",
      title: "Front-End Web Development",
      issuedBy: "Devsnest",
      logo: Devsnest,
    },
    {
      Verifiedlink: "https://devsnest.in/certificate/NcT82xNDPg4",
      title: "Back-End Web Development",
      issuedBy: "Devsnest",
      logo: Devsnest,
    },
    {
      Verifiedlink:
        "https://certificates.almabetter.com/en/verify/85843576690962",
      title: "Full-Stack Web Development",
      issuedBy: "Alma Better",
      logo: Almabetter,
    },
    {
      Verifiedlink: "https://www.hackerrank.com/certificates/e6e91877a913",
      title: "SQL - Structured Query Language",
      issuedBy: "Hacker Rank",
      logo: HackerRank,
    },
    {
      Verifiedlink: "https://www.hackerrank.com/certificates/04c751743d4f",
      title: "JavaScript",
      issuedBy: "Hacker Rank",
      logo: HackerRank,
    },
    {
      Verifiedlink:
        "https://coursera.org/share/eeda7e8dae85f9c4c279c6e63cefd8aa",
      title: "Excel Skills for Data Analytics and Visualization",
      issuedBy: "Coursera- MACQUARIE UNIVERSITY",
      logo: Coursera,
    },
  ];
  return (
    <section className="certificates">
      <Container>
        <Row>
          <Col>
            <h2>Certifications</h2>
            <p className="certificates-section-heading">
              My projects makes use of vast variety of latest technology tools.
              My best experience is to create Full Stack projects and deploy
              them to web applications using cloud infrastructure and web
              servers.
            </p>

            <Col>
              <h3>Degrees Received </h3>
              <hr />

              <div className="degreeCards">
                <div className="instituteLogoSection">
                  <img src={samLogo} alt="samLogo" />
                </div>
                <hr />
                <div className="instituteSection">
                  <div>
                    <h4>SAM College Of Engineering & Technology </h4>
                    <p className="passedYear">2016-2018</p>{" "}
                    <h5>Master of Computer Application</h5>
                  </div>
                  <hr />
                  <div className="courseDescription">
                    <p>
                      <FaHashtag />I have studied basic software engineering
                      subjects like DS, Algorithms, DBMS, OS, IoT, ML etc.
                    </p>
                  </div>{" "}
                </div>
              </div>
            </Col>
            <hr />
            <Row>
              {CertificatesList.map((item, index) => {
                return <CertificateCard key={index} certificate={item} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
