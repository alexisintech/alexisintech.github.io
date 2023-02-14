import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  OverlayTrigger,
  Nav,
  Tooltip,
} from "react-bootstrap";
import labcoat from "../assets/imgs/labcoat.png";
import seedling from "../assets/imgs/seedling.png";
import hands from "../assets/imgs/shaking-hands.png";
import write from "../assets/imgs/blog.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const About = () => {
  const [previously, setPreviously] = useState(false);
  const [mantra, setMantra] = useState(false);
  const [community, setCommunity] = useState(false);
  const [blog, setBlog] = useState(false);

  const CustomOverlayTrigger = ({ children }) => {
    return (
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="top"
        overlay={<Tooltip id={`tooltip-click-me`}>Click me!</Tooltip>}
      >
        {children}
      </OverlayTrigger>
    );
  };

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3} className="mb-md-5">
            <div className="d-flex flex-column align-items-center text-center">
              <CustomOverlayTrigger>
                <img
                  className="about-image"
                  src={labcoat}
                  alt="labcoat emoji"
                  onClick={() => {
                    setPreviously((prev) => !prev);
                  }}
                />
              </CustomOverlayTrigger>
              <h2>Previously</h2>
              {previously && (
                <p>
                  In her final 2 years at Stetson University, Alexis conducted
                  Herpetology + Invasive Species research while also serving her
                  peers as both a Biology and Writing Teaching Assistant. After
                  receiving a B.S. in both Biology and Chemistry, she was
                  privileged to help her community as a veterinary technician in
                  gold standard animal hospitals for over 2.5 years.
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center text-center">
              <CustomOverlayTrigger>
                <img
                  className="about-image"
                  src={seedling}
                  alt="seedling emoji"
                  onClick={() => {
                    setMantra((prev) => !prev);
                  }}
                />
              </CustomOverlayTrigger>

              <h2>Mantra</h2>
              {mantra && (
                <p>
                  Alexis is incredibly passionate about her mantra: "constantly
                  learning, forever growing." After surviving an adverse
                  childhood, she spends every day creating a life to be proud
                  of. Through reading, journaling, and spirituality, she
                  dedicates herself to nurturing meaningful relationships,
                  finding balance between stress versus positivity, and
                  prioritizing consistent, active growth.
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center text-center">
              <CustomOverlayTrigger>
                <img
                  className="about-image"
                  src={hands}
                  alt="shaking hands emoji"
                  onClick={() => {
                    setCommunity((prev) => !prev);
                  }}
                />
              </CustomOverlayTrigger>

              <h2>Community</h2>
              {community && (
                <p>
                  Peace, Love, Unity, Respect. Alexis is incredibly proud to be
                  a Community Relations Administrator of Space Fam, a community
                  of 400+ ravers in Miami, FL. Alexis manages the community chat
                  and discord server, organizes events and info sessions, and
                  advocates for rave safety through drug education and
                  awareness. She loves connecting electronic dance lovers with
                  their favourite DJ's in the music industry.
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center text-center">
              <CustomOverlayTrigger>
                <img
                  className="about-image"
                  src={write}
                  alt="shaking hands emoji"
                  onClick={() => {
                    setBlog((prev) => !prev);
                  }}
                />
              </CustomOverlayTrigger>

              <h2>Blog</h2>
              {blog && (
                <div>
                  <p>
                    Taking 5-10 minutes to read a summary can be significantly
                    more efficient than watching the 30 minute video. Alexis's
                    daily blog posts include thoughtfully written
                    summaries/notes for resources on web development, job
                    hunting, and other technical topics. She feels fulfilled
                    when she can provide value to others, so she enjoys giving
                    back to the developer community in any way she can.
                  </p>
                  <a
                    href="https://alexisintech.wixsite.com/blog"
                    rel="noreferrer"
                    target="_blank"
                    className="blog-button"
                  >
                    <ArrowRightCircle
                      style={{ fontSize: "2rem", cursor: "pointer" }}
                    />
                  </a>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
