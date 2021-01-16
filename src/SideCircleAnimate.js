import {Animate} from 'react-move'
import {easeElasticOut} from 'd3'
import './style/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'react-bootstrap'
import React, {Fragment} from "react"


function SideCircle(props){

  const arc = 360;
  const characters = "@Cornell @AppDev JUSTIN J. -".split('');
  const degree = arc / characters.length;

  return(
    <Fragment>
    <div style={{position:"fixed"}}>
      <h1>
          {characters.map((char, i) => (
            <span
              key={`heading-span-${i}`}
              style={{
                fontSize: `${props.fontsize}px`,  
                height: `${props.radius}px`,
                // transform: `rotate(${-(props.pos*230) + 20 +(degree * i - arc / 2)}deg)`,
                transform: `rotate(${-(props.pos*230) + 20 + degree * i - arc / 2}deg)`,
                transformOrigin: `0 ${props.radius}px 0`,
              }}>
              {char}
            </span>
          ))}
      </h1>    
    </div>
    
  </Fragment>
  )
}


var SideCircleAnimate = function SideCircleAnimate(props) {
  const { pos, fontsize, radius} = props;
  return (
    <Animate
      show={true}
      start={{ radius:600, fontsize:100 }}
      enter={{ radius: [radius], timing: [fontsize]  }}
      update={{ radius: [radius], fontsize:[fontsize], timing: {duration:2000, ease:easeElasticOut} }}
    >
      {(state) => 
      <SideCircle pos={pos} fontsize={state.fontsize} radius={state.radius}></SideCircle>}
    </Animate>
  );
}

export default SideCircleAnimate