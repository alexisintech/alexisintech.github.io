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
        <img src={imgUrl} alt={description} loading="lazy" />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <div className="d-flex justify-content-center gap-5">
            {githubUrl && (
              <a
                href={githubUrl}
                rel="noreferrer"
                target="_blank"
                aria-label="github for the project's source code"
              >
                <Github className="icon-sizing" />
              </a>
            )}
            {deployedUrl && (
              <a
                href={deployedUrl}
                rel="noreferrer"
                target="_blank"
                aria-label="live project"
              >
                <BoxArrowUpRight className="icon-sizing" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
