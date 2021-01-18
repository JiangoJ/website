import './style/App.css';
import {} from 'react-bootstrap'
import React, {} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import SideCircleHolder from './SideCircleHolder'
import Projects from './Projects'
import About from './About'
import me from '/home/justin/Documents/react-stuff/my-website/src/res/mee.png'


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <div className ="wrapper">
          <SideCircleHolder></SideCircleHolder>
        </div>
        <div className="app-section app-section-text">
          <About></About>
        </div>
        <div className="img-section">
          <img className="align-right img-responsive" alt="Logo" src={me}></img>
        </div>
        <div className="app-section project-section">
          <Projects></Projects>
        </div>
      </div>
    )
  }
  

}

export default App;
