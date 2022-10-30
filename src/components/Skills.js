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
          <Col xs={12}>
            <div className="skills-bx wow zoomIn">
              <h2 className="text-center">Tools and Technologies</h2>
              <div className="d-flex justify-content-center mt-5">
                <div className="icon-container">
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  <img src={js} alt="" />
                  <img src={node} alt="" />
                  <img src={express} alt="" />
                  <img src={mongo} alt="" />
                  <img src={react} alt="" />
                  <img src={bootstrap} alt="" />
                  <img src={mui} alt="" />
                  <img src={git} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
