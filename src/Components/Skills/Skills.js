import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import "./Skills.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {  
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skill">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__fadeInLeft" : ""
              }
            >
              <Row>
                <Col>
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      Proficient in JavaScript, SQL, and Python with a
                      demonstrated ability to develop scalable web applications.
                      Adept at data analysis and visualization using MS Office.
                      I bring a problem-solving approach to software
                      development, leveraging creativity and efficiency to
                      deliver high-quality solutions.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src={meter1} alt="Node JS" />
                        <h5>Node JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="Express JS" />
                        <h5>Express JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="Mongo DB" />
                        <h5>Mongo DB</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="My SQL" />
                        <h5>My SQL</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="React JS" />
                        <h5>React JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="TailwindCSS" />
                        <h5>TailwindCSS</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="BootStrap 5" />
                        <h5>BootStrap 5</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="CSS" />
                        <h5>CSS</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="HTML" />
                        <h5>HTML</h5>
                      </div>
                    </Carousel>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt='' /> */}
    </section>
  );
};
