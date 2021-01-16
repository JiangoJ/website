import './style/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col,Row } from 'react-bootstrap'
import React, {Fragment } from "react"

import ProjectGrid from './ProjectGrid'


class Projects extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      openList:[false, false]
    };

    this.handleHoverProject = this.handleHoverProject.bind(this);

  }

  handleHoverProject(cardNum){

  }


  render(){

    return(
      <Fragment>
        <Container fluid>
          <Row id="projects" className="about-text-nomargin center-div">
              <Col>
                <div className="about-text-title">
                  <p style={{backgroundColor:"white", color:"black", padding:"0px 5px"}}>Projects</p>
                  <p style={{whiteSpace: "pre"}}> I enjoyed working on...</p>              
                </div>     
              </Col>
          </Row>
          <Row>
            <Col lg="12" className="center-div" style={{marginTop:"10%"}}>
              <ProjectGrid></ProjectGrid>
            </Col>
            
          </Row>
        </Container>

        
      </Fragment>
         
    )
  } 

}

export default Projects
