import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"

import picks from "../../Assets/Projects/picks.jpg"
import goals from "../../Assets/Projects/goals.png"
import arbs from "../../Assets/Projects/arbs.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={picks}
              isBlog={false}
              title="Picks"
              description="Fullstack (JAMStack) React Application built with HTML, CSS, Javascript. Utilized React with Redux, Router, Tailwind, and Auth0 connected to Strapi for database management. Paypal payment information implemented and Role Based Access Control handled via Auth0 on the backend."
              ghLink="https://github.com/jox51/enlightened_picks"
              demoLink="https://enlightenedpicks.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goals}
              isBlog={false}
              title="Smart Goals"
              description="Goal tracker app where a user can set and track goals. Built with React. Coded with MERN stack with full CRUD functionality. Authentication done via JWT through the server. User can register, login, create goals and then load saved goals from database. When a goal is completed, a user can than delete that particular goal."
              ghLink="https://github.com/jox51/goal-setter-app"
              demoLink="https://goal-getter-mern.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arbs}
              isBlog={false}
              title="Crypto Arbitrage"
              description="An app that authorized user can use to detect arbitrage opportunities between the Delta exchange and Deribit exchange. This app scans all options on both of these exchanges and looks for arbitrages by using Put-Call Parity. If an arbitrage is found, it will list it in the table provided."
              ghLink="https://github.com/jox51/arb-app2"
              demoLink="https://arb-app2-client.onrender.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
