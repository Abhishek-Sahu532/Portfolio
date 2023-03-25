import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import project1 from "../assets/img/kids-learning-center.png";
import project2 from "../assets/img/binaryCalculator.png";
import project3 from "../assets/img/portfolio.png";
import project4 from "../assets/img/flashcard-generator.png";
import project5 from "../assets/img/weater-app.png";
import project6 from "../assets/img/zomato-clone.png";


import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "KIDS LEARNING CENTER",
      tech: 'HTML, CSS, BootStrap',
      description: "Design & Development",
      imgUrl: project1,
      deployedLink: 'https://abhishek-sahu532.github.io/kids-learning-center/',
      githubLink: 'https://github.com/Abhishek-Sahu532/kids-learning-center.git'
     
    },
    {
      title: "Binary Calculator",
      tech: 'HTML, CSS, JS',
      description: "Design & Development",
      imgUrl: project2,
      deployedLink: 'https://abhishek-sahu532.github.io/Binary-calculator/',
      githubLink: 'https://github.com/Abhishek-Sahu532/Binary-calculator',
    },
    {
      title: "Portfolio",
      tech: 'React Js, Express JS',
      description: "Design & Development",
      imgUrl: project3,
      deployedLink: 'https://abhishek-sahu532.github.io/Binary-calculator/',
      githubLink: 'https://github.com/Abhishek-Sahu532/Portfolio.git',
    },
    {
      title: "Flashcard Generator",
      tech: 'React Js, Tailwind CSS',
      description: "Design & Development",
      imgUrl: project4,
      deployedLink: 'https://flashcardgenerator.netlify.app/',
      githubLink: 'https://github.com/Abhishek-Sahu532/flashcard_generator_react_project',
    },
    {
      title: "Weather App",
      tech: 'HTML, CSS, JS, Weather API',
      description: "Design & Development",
      imgUrl: project5,
      deployedLink: 'https://abhishek-sahu532.github.io/weather-app-using-javascript/',
      githubLink: 'https://github.com/Abhishek-Sahu532/weather-app-using-javascript',
    },
    {
      title: "Zomato Clone",
      tech: 'HTML, CSS',
      description: "Design & Development",
      imgUrl: project6,
      deployedLink: 'https://abhishek-sahu532.github.io/zomato-clone/',
      githubLink: 'https://github.com/Abhishek-Sahu532/zomato-clone',
    },
  ];

  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p className='project-section-heading'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills" 
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                
                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
};
