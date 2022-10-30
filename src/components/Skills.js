import { Container, Row, Col } from "react-bootstrap";
import bootstrap from "../assets/imgs/bootstrap.png";
import css from "../assets/imgs/css.png";
import html from "../assets/imgs/html.png";
import js from "../assets/imgs/JS.png";
import mongo from "../assets/imgs/mongo.png";
import express from "../assets/imgs/express.png";
import node from "../assets/imgs/node.png";
import react from "../assets/imgs/react.png";
import mui from "../assets/imgs/mui.svg";
import git from "../assets/imgs/git.png";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <div className="skills-bx wow zoomIn">
            <h2 className="text-center">Tools and Technologies</h2>
            <div className="icon-container mx-auto">
              <Col xs={12} className="d-flex justify-content-between mt-5">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={node} alt="" />
                <img src={express} alt="" />
              </Col>
              <Col
                xs={12}
                className="d-flex justify-content-between mt-5 mt-md-4"
              >
                <img src={mongo} alt="" />
                <img src={react} alt="" />
                <img src={bootstrap} alt="" />
                <img src={mui} alt="" />
                <img src={git} alt="" />
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
