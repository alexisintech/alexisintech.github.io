import { Nav } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { BoxArrowUpRight } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  deployedUrl,
}) => {
  return (
    <Col size={12} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="d-flex justify-content-center gap-5">
            {githubUrl && (
              <Nav.Link href={githubUrl}>
                <Github className="icon-sizing" />
              </Nav.Link>
            )}
            {deployedUrl && (
              <Nav.Link href={deployedUrl}>
                <BoxArrowUpRight className="icon-sizing" />
              </Nav.Link>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
