import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import github from "../../assets/img/github.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    }; //removing the same event listener
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    // console.log(value);
  };
  return (

  


    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        {/* <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("home");
              }}
            >
              <Link
                to="/"
                className="mainRoutes"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Home{" "}
              </Link>
            </Nav.Link>
            <Nav.Link
              href="/skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
              }}
            >
              <Link
                to="/skills"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Skills{" "}
              </Link>
            </Nav.Link>
            <Nav.Link
              href="/projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("projects");
              }}
            >
              {" "}
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Projects{" "}
              </Link>
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("contact");
              }}
            >
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Contact{" "}
              </Link>
            </Nav.Link>
            <Nav.Link
              href="/certificates"
              className={
                activeLink === "certificates"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("certificates");
              }}
            >
              <Link
                to="/certificates"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Certificates{" "}
              </Link>
            </Nav.Link>
            <Nav.Link
              href="/certificates"
              className={
                activeLink === "certificates"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("certificates");
              }}
            >
              <Link
                to="/experience"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Experience{" "}
              </Link>
            </Nav.Link>
          </Nav>

          {/* ICONS PART */}
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abhishek-sahu532/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-sahu532/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
              <a
                href="https://www.instagram.com/sahu_abhishek____/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
