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
                transform: `rotate(${-(props.pos*230) + 20 +(10 * i - 360 / 2)}deg)`,
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

// class SideCircle extends React.Component{

//   constructor(props) {
//     super(props);

    

//     this.state = {
//       circlefontsize: this.props.vals.fontsize,
//       radius: this.props.vals.radius,
//       theposition: this.props.vals.pos,
//     };
//   }

//   // componentDidMount() {
//   //   window.addEventListener('scroll', this.listenToScroll)
//   // }
  
//   // componentWillUnmount() {
//   //   window.removeEventListener('scroll', this.listenToScroll)
//   // }
  
//   // listenToScroll = () => {
//   //   const winScroll =
//   //     document.body.scrollTop || document.documentElement.scrollTop
  
//   //   const height =
//   //     document.documentElement.scrollHeight -
//   //     document.documentElement.clientHeight
  
//   //   const scrolled = winScroll / height
  
//   //   this.setState( prevState  => {

//   //     return{
//   //       theposition: scrolled,
//   //       circlefontsize: prevState.fontsize,
//   //       radius: prevState.radius,
//   //     }
     
//   //   })
//   // }

//   render(){
//     return(
      
//     )
//   }

// }

export default SideCircle
