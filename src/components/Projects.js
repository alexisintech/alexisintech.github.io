import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mindfully from "../assets/imgs/mindfully1.jpg";
import seizeTheDay from "../assets/imgs/seize-the-day.jpg";
import cssGenerators from "../assets/imgs/cssgeneratorsapi.jpg";
import calculator from "../assets/imgs/calculator.jpg";
import codingResources from "../assets/imgs/codingresourcesAPI.jpg";
import fullstack from "../assets/imgs/fullstackapi.jpg";
import tictactoe from "../assets/imgs/tictactoe.jpg";
import reversah from "../assets/imgs/reversah.jpg";
import genzmone from "../assets/imgs/genzmone.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Mindfully",
      description: "Design & Development",
      imgUrl: mindfully,
      githubUrl: "https://github.com/alexisintech/mindfully",
      deployedUrl: "https://mindfully.up.railway.app/",
    },
    {
      title: "Seize The Day",
      description: "Design & Development",
      imgUrl: seizeTheDay,
      githubUrl: "https://github.com/alexisintech/seize-the-day",
      deployedUrl: "https://seize-the-day.netlify.app/",
    },
    {
      title: "CSS Generators API",
      description: "Design & Development",
      imgUrl: cssGenerators,
      githubUrl: "https://github.com/alexisintech/css-generators-api",
      deployedUrl: "https://cssgenerators.co/",
    },
    {
      title: "React Calculator",
      description: "Design & Development",
      imgUrl: calculator,
      githubUrl: "https://github.com/alexisintech/calculator",
      deployedUrl: "https://alexisintech-calculator.netlify.app/",
    },
  ];

  const openSource = [
    {
      title: "Coding Resources API",
      description: "Design & Development",
      imgUrl: codingResources,
      githubUrl: "https://github.com/alexisintech/coding-resources-api",
      deployedUrl: "https://coding-resources-api.up.railway.app/",
    },
    {
      title: "Full Stack Interview Questions API",
      description: "Design & Development",
      imgUrl: fullstack,
      githubUrl: "https://github.com/alexisintech/interview-question-api",
      deployedUrl: "https://full-stack-interview-prep.up.railway.app/",
    },
    {
      title: "Tic Tac Toe",
      description: "Design & Development",
      imgUrl: tictactoe,
      githubUrl: "https://github.com/alexisintech/tic-tac-toe",
      deployedUrl: "https://alexisintech-tictactoe.netlify.app/",
    },
  ];

  const clientWork = [
    {
      title: "Reversah",
      description: "Design & Development",
      imgUrl: reversah,
      githubUrl: "https://github.com/alexisintech/Reversah.ValorantBanner",
      deployedUrl: "https://reversah.com/",
    },
    {
      title: "Gen-Z Mon-E",
      description: "Design & Development",
      imgUrl: genzmone,
      deployedUrl: "https://genzmone.com/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Open Source</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Client Work</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <p className="mb-5">
                      Whether it's for learning new technologies or
                      strengthening my large range of skills, I am highly
                      passionate about expressing my creativity by developing
                      modern, responsive full-stack web applications.
                    </p>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p className="mb-5">
                      I've managed, contributed to, and maintained the following
                      open source projects while effectively utilizing
                      documentation, version control, and high-level
                      organization and communication.
                    </p>
                    <Row>
                      {openSource.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p className="mb-5">
                      I have designed and developed interactive, responsive
                      websites under considerably pressing deadlines in order to
                      successfully meet my clients' needs and artistic visions.
                    </p>
                    <Row>
                      {clientWork.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
