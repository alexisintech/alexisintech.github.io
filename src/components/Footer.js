import { Container, Row, Nav } from "react-bootstrap";
import linkedin from "../assets/imgs/linkedin.svg";
import github from "../assets/imgs/github.svg";
import twitter from "../assets/imgs/twitter.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="brand">
              <span>Let's </span>
              <span>Connect!</span>
            </div>
            <div className="social-icon">
              <a href="#">
                <img src={linkedin} alt="" />
              </a>
              <a href="#">
                <img src={github} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </div>
            <Nav.Link
              href="https://alexisintech.github.io/socialLinks/"
              className="copyright"
            >
              Copyright 2023. All Rights Reserved
            </Nav.Link>
          </div>
        </Row>
      </Container>
    </footer>
  );
};
