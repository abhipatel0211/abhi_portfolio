import React from "react";
import { Col, Row } from "react-bootstrap";
import VSCode from "../../Icons/VSCode_final.png";
import Postman from "../../Icons/Postman_final.png";
import Slack from "../../Icons/Slack_final.png";
import vercel from "../../Icons/vercel_2.png";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={VSCode} style={{ height: "100px" }} alt="brand" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} style={{ height: "100px" }} alt="brand" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Slack} style={{ height: "100px" }} alt="brand" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vercel} style={{ height: "100px" }} alt="brand" />
      </Col>
    </Row>
  );
}

export default Toolstack;
