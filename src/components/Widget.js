import { useState } from "react";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Widget = ({ title, imgUrl, description }) => {
  const [show, setShow] = useState(false);

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
    <Col xs={12} md={6} lg={3} className="mb-md-5">
      <div className="d-flex flex-column align-items-center text-center">
        <CustomOverlayTrigger>
          <img
            className="about-image"
            src={imgUrl}
            alt={`${imgUrl} emoji`}
            onClick={() => {
              setShow((prev) => !prev);
            }}
          />
        </CustomOverlayTrigger>
        <h2>{title}</h2>
        {show && (
          <div>
            <p>{description}</p>
            {title === "Blog" && (
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
            )}
          </div>
        )}
      </div>
    </Col>
  );
};

export default Widget;
