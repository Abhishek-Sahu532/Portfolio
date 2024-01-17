import React from "react";
import "./experience.css";
import "../Certificates/certificates.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaHashtag } from "react-icons/fa";
import WorldsoftITSolutionLogo from "../../assets/img/WorldsoftITSolutionLogo.png";
import topntownLogo from "../../assets/img/topntownLogo.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Experience = () => {
  const experiences = [
    {
      compLogo: WorldsoftITSolutionLogo,
      compName: "Worldsoft IT Solution Pvt. Ltd",
      workingDuration: "Nov 22-Present",
      profile: "Full Stack Developer",
      roles:
        "My role is to develop complete front end, back end projects i.e., a Full Stack Software Developer.",
    },
    {
      compLogo: WorldsoftITSolutionLogo,
      compName: "Worldsoft IT Solution Pvt. Ltd",
      workingDuration: "May 22 - Nav 22",
      profile: "Full Stack Trainee",
      roles:
        "My role is to develop complete front end, back end projects i.e., a Full Stack Software Developer.",
    },
    {
      compLogo: topntownLogo,
      compName: "Ramani Ice-cream Co. Ltd.",
      workingDuration: "Jan 19 - Apr 22",
      profile: "MIS Executive",
      roles: "To Complete Daily MIS Reports of the Sales Department.",
    },
  ];
  return (
    <section className="experiences">
      <Container>
        <Row>
          <Col>
            <h2>Experiences</h2>
            <p className="Experiences-section-heading">
              I am working in an evolving startup as Full Stack Developer,
              Designer and Software Developer. I have also worked with some well
              established companies as an MIS Executinve. I love organising
              events and that is why I am also involved with many opensource
              communities and also as a representative.
            </p>

            {experiences.map((experience, index) => (
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInLeft" : ""
                    }
                  >
                    <Col key={index}>
                      <div className="degreeCards">
                        <div className="instituteLogoSection">
                          <img src={experience.compLogo} alt="compLogo" />
                        </div>
                        <hr />
                        <div className="instituteSection">
                          <div>
                            <h4>{experience.compName}</h4>
                            <p className="passedYear">
                              {experience.workingDuration}
                            </p>{" "}
                            <h5>{experience.profile}</h5>
                          </div>
                          <hr />
                          <div className="courseDescription">
                            <p>
                              <FaHashtag />
                              {experience.roles}
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </Col>
                  </div>
                )}
              </TrackVisibility>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
