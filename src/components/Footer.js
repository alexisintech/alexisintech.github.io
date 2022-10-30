import { Container, Row, Col, Nav } from "react-bootstrap";
import navIcon1 from "../assets/imgs/nav-icon1.svg";
import navIcon2 from "../assets/imgs/nav-icon2.svg";
import navIcon3 from "../assets/imgs/nav-icon3.svg";

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
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
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
