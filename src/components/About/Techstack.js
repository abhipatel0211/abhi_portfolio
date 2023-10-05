import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import C from "../../Icons/c.png";
import Cpp from "../../Icons/C++.png";
import html from "../../Icons/html.png";
import css from "../../Icons/css.png";
import js from "../../Icons/javascript.png";
import firebase from "../../Icons/firebase.png";
import react from "../../Icons/react.png";
import Next from "../../Icons/nextjs_final.png";
import Mongo from "../../Icons/mongo.png";
import Github from "../../Icons/github.png";
import Node from "../../Icons/node.png";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <img src={C} style={{ height: "100px" }} alt="C" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <img src={Cpp} style={{ height: "100px" }} alt="c++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <img src={html} style={{ height: "100px" }} alt="html" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJavascript1 /> */}
        <img src={css} style={{ height: "100px" }} alt="css" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={js} style={{ height: "100px" }} alt="javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={firebase} style={{ height: "100px" }} alt="firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={react} style={{ height: "100px" }} alt="react" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} style={{ height: "100px" }} alt="mongodb" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Github} style={{ height: "100px" }} alt="github" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} style={{ height: "100px" }} alt="Node" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Next} style={{ height: "100px" }} alt="Next_js" />
      </Col>
      {/*
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
