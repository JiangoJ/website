import './style/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'react-bootstrap'
import SideCircleAnimate from './SideCircleAnimate'

import React, {} from "react"


class SideCircleHolder extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      theposition: 0,
      radius: 600,
      fontsize:"100px"

    };

    this.listenToScrollApp = this.listenToScrollApp.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScrollApp)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScrollApp)
  }
  
  listenToScrollApp = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
    
    const radius = (scrolled > 0.3) ? 300 : 600
    const fontsize = (scrolled > 0.3) ? 30 : 100
 
    
    this.setState({
      theposition: scrolled,
      radius: radius,
      fontsize: fontsize
    })

  }

  render(){
    return(
      <SideCircleAnimate pos={this.state.theposition} radius={this.state.radius} fontsize={this.state.fontsize}></SideCircleAnimate>
    )
  }
}

export default SideCircleHolder
