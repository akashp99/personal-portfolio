import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import logo from '../assets/img/logo-2.png';
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akash-pardeshi-755917206" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/akashp99" target="_blank"><img src={github} alt="Icon" /></a>
              <a href="https://www.instagram.com/akashpardeshiap/?igshid=ZGUzMzM3NWJiOQ%3D%3D" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
