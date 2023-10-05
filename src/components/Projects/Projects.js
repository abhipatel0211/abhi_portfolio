import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import connection from "../../Assets/Projects/connection.png";
import pizza from "../../Assets/Projects/pizza.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import ChatWhiz from "../../Assets/Projects/ChatWhiz.png";
import Bookstore from "../../Assets/Projects/bookstore.png";
import quizapp from "../../Assets/Projects/quiz.png";

function Projects() {
  return (
    <Container name="Projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatWhiz}
              isBlog={false}
              title="ChatWhiz"
              description="I built a real-time chat app using the MERN stack (MongoDB, Express.js, React.js, Node.js) with WebSocket support. It has RESTful APIs for user authentication, messaging, and chat room management. MongoDB is used to store messages and user data."
              ghLink="https://github.com/abhipatel0211/ChatWhiz.git"
              demoLink="https://chatwhiz.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bookstore}
              isBlog={false}
              title="Book Store For User and Buyer"
              description="Discover and shop for books effortlessly with our Modern Bookstore Web App, powered by React.js, Material UI, and Axios. Explore a user-friendly interface, secure checkout, and a vibrant book-loving community."
              ghLink="https://github.com/abhipatel0211/tatvasoft_abhi.git"
              demoLink="https://tatvasoft-abhi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard with profile and connections"
              description="Our Connection Page is where your network comes to life. Easily view and manage your connections, with your closest connections displayed prominently. Stay connected with the people who matter most, and effortlessly expand your professional or personal network with our streamlined design."
              ghLink="https://github.com/abhipatel0211/Dashboard.git"
              demoLink="https://dashboard-abhi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connection}
              isBlog={false}
              title="dashboard Connection page"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/abhipatel0211/Dashboard.git"
              demoLink="https://dashboard-abhi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Food Blogging App"
              description="Foodie's Delight is your go-to app for food enthusiasts. Discover recipes, share your culinary creations, and connect with a vibrant food-loving community. Satisfy your cravings and join the culinary adventure today!"
              ghLink="https://github.com/abhipatel0211/food_blogging.git"
              demoLink="https://food-blogging-abhi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizapp}
              isBlog={false}
              title="Quiz Application"
              description="QuizMaster is the ultimate quiz app. Sign up to compete in quizzes on various topics, track your progress, and challenge friends. Start quizzing now!"
              ghLink="https://github.com/abhipatel0211/quiz-app.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
