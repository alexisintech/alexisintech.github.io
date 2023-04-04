import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle, ArrowUpCircle } from "react-bootstrap-icons";
import avatar from "../assets/imgs/avatar.png";
import me from "../assets/imgs/profile-pic.jpg"
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [showMore, setShowMore] = useState(false);
  const [loopNum, setLoopNum] = useState(0); //start from first role in the array
  const [isDeleting, setIsDeleting] = useState(false); //false, we start with the word being typed out
  const [text, setText] = useState(""); //will be the character of the role being typed out
  const [characterPeriod, setCharacterPeriod] = useState(100); //how much time passes between each character being typed out
  const roles = [
    "Software Engineer",
    "Mental Health Advocate",
    "Community Developer",
  ];
  const period = 500; //how much time passes between each role

  useEffect(() => {
    //update the typing
    let typer = setInterval(() => {
      type();
    }, characterPeriod);

    return () => {
      clearInterval(typer);
    };
    // eslint-disable-next-line
  }, [text]);

  const type = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setCharacterPeriod(40);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setCharacterPeriod(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setCharacterPeriod(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={7}
            xl={7}
            className="order-2 order-md-1 px-4 text-align"
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>{`Hi! I'm Alexis,`} </h1>
                  <span
                    className="txt-role"
                    data-period="500"
                    data-role='[ "Software Engineer", "Mental Health Advocate", "Community Developer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                  {showMore ? (
                    <div>
                      <p>
                        Alexis Aguilar is more than just an incredibly
                        inquisitive full-stack web developer; she's your
                        shoulder to lean on. She prioritizes making an impact by
                        consistently practicing her values of kindness, empathy,
                        and diligence. With her eclectic background in various
                        scientific fields, she brings a unique perspective to
                        web development. She is currently working hard every
                        single day to change her life.
                      </p>
                      <a
                        href="https://alexisintech.wixsite.com/blog"
                        rel="noreferrer"
                        target="_blank"
                        className="square-button"
                        aria-label="alexisintech's blog"
                      >
                        Check out her blog!
                      </a>
                      <button
                        onClick={() => {
                          setShowMore(false);
                        }}
                      >
                        Show less <ArrowUpCircle />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p>
                        Alexis Aguilar is more than just an incredibly
                        inquisitive full-stack web developer; she's your
                        shoulder to lean on. She prioritizes making an impact by
                        consistently practicing her values of kindness, empathy,
                        and diligence.
                      </p>
                      <button
                        className="mx-auto mx-md-0"
                        onClick={() => {
                          setShowMore(true);
                        }}
                      >
                        Show more <ArrowDownCircle />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col
            xs={12}
            md={5}
            xl={5}
            className="order-1 order-md-2 mb-5 mb-md-0"
          >
            <div className="d-flex justify-content-center">
              <img className="rounded-circle" src={me} alt="Headshot of Alexis Aguilar" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
