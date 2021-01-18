import './style/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col,Row } from 'react-bootstrap'
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillMail, AiTwotoneMail } from "react-icons/ai";

import resume from './res/Justin_Jiang_Resume.pdf'

import React, {Fragment } from "react"

class About extends React.Component{
  render(){

    return(
      <Fragment>
        <Container fluid="true">
          <Row className="about-text">
              <Col lg="4">
              </Col>
              <Col xs="12" md="6" lg="8">
                <div className="about-text-title">
                  <p style={{backgroundColor:"white", color:"black", padding:"0px 5px"}}>Hi.</p>
                  <p style={{whiteSpace: "pre"}}> I'm Justin!</p>              
                </div>
                <div className="about-text-body">
                  <p>Studying CS and Economics @Cornell</p>
                  <p style={{display:"inline-flex"}}>Developing to create better experiences</p>
                  <a className="stripped-link" target="_blank" rel="noopener noreferrer" href="https://www.cornellappdev.com/"> @AppDev</a>
                </div>
                <div className="about-text-body" style={{display:"inline-flex"}}>
                  <p>Curious about my</p>
                  <br/>
                  <a className="stripped-link" href="#projects"> Projects</a>
                  <p> or</p>
                  <a className="stripped-link" target="_blank" rel="noopener noreferrer" href={resume}> Resume</a>
                  <p>?</p>
                </div>         
              </Col>
            </Row>
            <Row style={{marginTop:"5%"}}>
              <Col lg="4"></Col>
              <Col xs="12" md="6" lg="8">
                <a className="stripped-link" target="_blank" rel="noopener noreferrer" href="https://github.com/JiangoJ">
                 <DiGithubBadge className="icons" size="4em"></DiGithubBadge>
                </a>
                <a className="stripped-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-jiango/">
                 <AiFillLinkedin className="icons" size="4em"></AiFillLinkedin>
                </a>
                <a className="stripped-link" target="_blank" rel="noopener noreferrer" href="jjj65@cornell.edu">
                 <AiFillMail className="icons" size="4em"></AiFillMail>
                </a>
              </Col>
            </Row>    
        </Container>
      </Fragment>
         
    )
  } 

}

export default About
