import React from "react"
import Card from "react-bootstrap/Card"
import { FaGuitar } from "react-icons/fa"
import { GiAirplaneDeparture, GiWeightLiftingUp } from "react-icons/gi"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Orlando Dominici </span>
            from <span className="purple"> Miami, FL.</span>
            <br />I am a retired Naval veteran who enjoys web development
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiAirplaneDeparture /> Traveling to different countries
            </li>
            <li className="about-activity">
              <GiWeightLiftingUp /> Exercising
            </li>
            <li className="about-activity">
              <FaGuitar /> Playing Guitar
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
