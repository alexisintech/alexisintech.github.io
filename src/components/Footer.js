import { Container, Row } from "react-bootstrap";
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
              <a
                href="https://www.linkedin.com/in/alexisintech/"
                rel="noreferrer"
                target="_blank"
                aria-label="linkedin"
              >
                <img src={linkedin} alt="linkedin logo" loading="lazy" />
              </a>
              <a
                href="https://github.com/alexisintech"
                rel="noreferrer"
                target="_blank"
                aria-label="github"
              >
                <img src={github} alt="github logo" loading="lazy" />
              </a>
              <a
                href="https://twitter.com/alexisintech"
                rel="noreferrer"
                target="_blank"
                aria-label="twitter"
              >
                <img src={twitter} alt="twitter logo" loading="lazy" />
              </a>
            </div>
            <a
              href="https://alexisintech.github.io/links/"
              className="copyright"
              rel="noreferrer"
              target="_blank"
              aria-label="alexisintech's social links"
            >
              Copyright 2023. All Rights Reserved
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};
