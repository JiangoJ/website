import React, { Fragment, useState } from "react";
import projectlist from './res/project-card-info'
import { animated, useTrail, interpolate, useSprings, useSpring} from "react-spring";
import { Container, Row, Col } from "react-bootstrap";

function ProjectGrid(){

  const [open, setOpen] = useState(false)
  const [clicked, setClick] = useState(false)
  const [selectedCard, setCard] = useState(9)
 
  const trail = useTrail(9, {
    config: { mass: 8, tension: 600, friction: 125},
    height: open ? 210 : 0,
    openCard: open ? 1 : 0,
    f: open ? 0 : 1, 
    r: open ? -3 : 3, 
    x: clicked ? -300 : 0,
    from: { 
      openCard: 0,
      height: 0,
      f:0,
      r:-3,  
      x:0
    },
  })

  const textAnimate = useSpring({
    config: { friction: 55},
    opacity: clicked? 1 : 0, 
    marginTop: clicked? 0 : -100,
    
    from: {
      opacity: -1,
      marginTop:-100
    }
  })

  const cards = useSprings(5, [0, 1, 2, 3, 4].map(i => ({ opacity: 0.2 + i / 5, z: open ? (i / 5) * 50 : 0 })))

  const hoverCard = (cardIndex) => {
    
    if(!clicked){
      setOpen(true)
      setCard(cardIndex)
    }
  };

  const unHoverCard = () =>{
    if(!clicked){
      setOpen(false)
      setCard(9)
    }
  }

  const cardClick = (cardIndex) => {
    if(clicked){
      setOpen(false)
      setCard(9)
    }
    else{
      setOpen(true)
      setCard(cardIndex)
    }
    
    setClick(!clicked)
  }

  return(
    <Fragment >
      <div className="card-grid center-div" style={{position:"absolute"}}>
        {trail.map(({height,f,r, opacity, x, ...rest }, i) => (
          
          <div class="card-container">
          {cards.map(({ z, opacity }, index) => (
          
            <animated.div
            onClick={() => cardClick(i)}
            onMouseEnter={() => hoverCard(i)} 
            onMouseLeave={() => unHoverCard()}
              style={{
                opacity,
                background:`${projectlist[selectedCard][i].color}`,
                transform: interpolate(
                  [x, z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
                  (x, z, f, r) => `translate3d(${x}px,0,${z*0.4}px) rotateX(${f * r  }deg)`,

                )
              }}>
              {index === 4 && <animated.img style={{ width:"300px", height:"300px", transform: f.interpolate([0, 1], ['scale(0.55)', 'scale(0.8)']) }} src={projectlist[selectedCard][i].image} />}
            </animated.div>
          ))}
          </div>
          ))}
        </div>
        <div>
        </div>
        <Container>
            <Row>
              <Col lg="6">
              </Col>
              <Col lg="6">

                {
                  clicked && <animated.div className="project-text"style={textAnimate}>
                  <p className="project-title">{projectlist[selectedCard][9].title}</p>
                  <p className="project-desc">{projectlist[selectedCard][9].description}</p>
                  </animated.div>

                }
                
              </Col>
            </Row>
          </Container>
       
        
          
    </Fragment>

  )


}
export default ProjectGrid