import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import labcoat from "../assets/imgs/labcoat.png";
import seedling from "../assets/imgs/seedling.png";
import hands from "../assets/imgs/shaking-hands.png";

export const About = () => {
  const [previously, setPreviously] = useState(false);
  const [mantra, setMantra] = useState(false);
  const [community, setCommunity] = useState(false);

  const about = [
    {
      title: "Previously",
      imgUrl: labcoat,
      description:
        "In her final 2 years at Stetson University, Alexis conducted Herpetology + Invasive Species research while also serving her peers as both a Biology and Writing Teaching Assistant. After receiving a B.S. in both Biology and Chemistry, she was privileged to help her community as a veterinary technician in gold standard animal hospitals for over 2.5 years.",
    },
    {
      title: "Mantra",
      imgUrl: seedling,
      description:
        "After surviving an adverse childhood, Alexis spends every day creating a life to be proud of. Through reading, journaling, and spirituality, she dedicates herself to nurturing meaningful relationships, finding balance between stress versus positivity, and prioritizing consistent, active growth.",
    },
    {
      title: "Community",
      imgUrl: hands,
      description:
        "Peace, Love, Unity, Respect. Alexis is incredibly proud to be a Community Relations Administrator of Space Fam, a community of 400+ ravers in Miami, FL. Alexis manages the community chat and discord server, organizes events and info sessions, and advocates for rave safety through drug education and awareness. She loves connecting electronic dance lovers with their favourite DJ's in the music industry.",
    },
  ];
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="d-flex flex-column align-items-center text-center">
              <img
                className="about-image"
                src={labcoat}
                alt="labcoat emoji"
                onClick={() => {
                  setPreviously((prev) => !prev);
                }}
              />
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
          <Col xs={12} md={4}>
            <div className="d-flex flex-column align-items-center text-center">
              <img
                className="about-image"
                src={seedling}
                alt="seedling emoji"
                onClick={() => {
                  setMantra((prev) => !prev);
                }}
              />
              <h2>Mantra</h2>
              {mantra && (
                <p>
                  After surviving an adverse childhood, Alexis spends every day
                  creating a life to be proud of. Through reading, journaling,
                  and spirituality, she dedicates herself to nurturing
                  meaningful relationships, finding balance between stress
                  versus positivity, and prioritizing consistent, active growth.
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="d-flex flex-column align-items-center text-center">
              <img
                className="about-image"
                src={hands}
                alt="shaking hands emoji"
                onClick={() => {
                  setCommunity((prev) => !prev);
                }}
              />
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
        </Row>
      </Container>
    </section>
  );
};
