import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedin from "../assets/imgs/linkedin.svg";
import github from "../assets/imgs/github.svg";
import twitter from "../assets/imgs/twitter.svg";
import { BrowserRouter as Router } from "react-router-dom";

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

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            <span>alexis</span>
            <span>intech</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/alexisintech/"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="linkedin"
                >
                  <img src={linkedin} alt="linkedin logo" />
                </a>
                <a
                  href="https://github.com/alexisintech"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="github"
                >
                  <img src={github} alt="github logo" />
                </a>
                <a
                  href="https://twitter.com/alexisintech"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="twitter"
                >
                  <img src={twitter} alt="twitter logo" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
