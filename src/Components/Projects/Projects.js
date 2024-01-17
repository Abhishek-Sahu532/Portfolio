import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import project1 from "../../assets/img/kids-learning-center.png";
import project2 from "../../assets/img/binaryCalculator.png";
import project3 from "../../assets/img/portfolio.png";
import project4 from "../../assets/img/flashcard-generator.png";
import project5 from "../../assets/img/weater-app.png";
import project6 from "../../assets/img/zomato-clone.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import assure_you_thumbnail from "../../assets/img/assure_you_thumbnail.png";
import nikeLandingPage from "../../assets/img/nikeLandingPage.png";
import "animate.css";
import "./Projects.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsForTabOne = [
    {
      title: "Assure You",
      tech: "React.js, Redux, MUI, Express, MongoDB ",
      description: "Shop Secure, Shop Assure You",
      imgUrl: assure_you_thumbnail,
      deployedLink: "https://assure-you.onrender.com/",
      githubLink: "https://github.com/Abhishek-Sahu532/e-commerce-app",
    },
    {
      title: "KIDS LEARNING CENTER",
      tech: "HTML, CSS, BootStrap",
      description: "Design & Development",
      imgUrl: project1,
      deployedLink: "https://abhishek-sahu532.github.io/kids-learning-center/",
      githubLink:
        "https://github.com/Abhishek-Sahu532/kids-learning-center.git",
    },
    {
      title: "Binary Calculator",
      tech: "HTML, CSS, JS",
      description: "Design & Development",
      imgUrl: project2,
      deployedLink: "https://abhishek-sahu532.github.io/Binary-calculator/",
      githubLink: "https://github.com/Abhishek-Sahu532/Binary-calculator",
    },
    {
      title: "Portfolio",
      tech: "React Js, Express JS",
      description: "Design & Development",
      imgUrl: project3,
      deployedLink: "https://abhishek-sahu532.github.io/Binary-calculator/",
      githubLink: "https://github.com/Abhishek-Sahu532/Portfolio.git",
    },
    {
      title: "Flashcard Generator",
      tech: "React Js, Tailwind CSS",
      description: "Design & Development",
      imgUrl: project4,
      deployedLink: "https://flashcardgenerator.netlify.app/",
      githubLink:
        "https://github.com/Abhishek-Sahu532/flashcard_generator_react_project",
    },
    {
      title: "Weather App",
      tech: "HTML, CSS, JS, Weather API",
      description: "Design & Development",
      imgUrl: project5,
      deployedLink:
        "https://abhishek-sahu532.github.io/weather-app-using-javascript/",
      githubLink:
        "https://github.com/Abhishek-Sahu532/weather-app-using-javascript",
    },
  ];

  const projectsForTabTwo = [
    {
      title: "Nike Landing Page",
      tech: "HTML, Tailwind",
      description: "Design & Development",
      imgUrl: nikeLandingPage,
      deployedLink: "https://sage-phoenix-0230a0.netlify.app/",
      githubLink: "https://github.com/Abhishek-Sahu532/nike-landing-page",
    },
    {
      title: "Zomato Clone",
      tech: "HTML, CSS",
      description: "Design & Development",
      imgUrl: project6,
      deployedLink: "https://abhishek-sahu532.github.io/zomato-clone/",
      githubLink: "https://github.com/Abhishek-Sahu532/zomato-clone",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p className="project-section-heading">
              My projects makes use of vast variety of latest technology tools.
              My best experience is to create Full Stack projects and deploy
              them to web applications using cloud infrastructure and web
              servers.
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
                    {projectsForTabOne.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsForTabTwo.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
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
