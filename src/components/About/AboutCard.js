import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sakthivel prasanna </span>
            from <span className="purple"> Ramanathapuram, India.</span>
            <br />
            I have one year and six months of Experience in web developing.
            <br />
            I have completed BE in stream of COMPUTER SCIENCE at SYED AMMAL ENGINEERING COLLEGE.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket and football
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> cycling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sakthivel prasanna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
