import React from "react";
import { useStoreContext } from '../utils/GlobalStore';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./Projects.js";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";
import SquareCard from "../components/InputCard/squareCard";
import CircleCard from "../components/InputCard/circleCard";
import TriangleCard from "../components/InputCard/triangleCard";
import EquilateralTriangleCard from "../components/InputCard/EquilateralTriangleCard";
import ScaleneTriangleCard from "../components/InputCard/ScaleneTriangleCard";
import RightTriangleCard from "../components/InputCard/RightTriangleCard";
import ShapeArea from "../components/ShapeSection/shapeArea";
import drawing from '../images/181.png';
import Figure from 'react-bootstrap/Figure';
import '../css/main.css';



function Members() {

  const [state] = useStoreContext();
  const { email } = state;

  return (
    <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/members">
              <div className='memberContainer'>
                <div className="Title" >
                  <h3 className="welcome">Welcome {email}</h3>
                  <h2 className="subheader">Choose a shape for your project</h2>
                </div>
                <div className="shapeSection">
                  <ShapeArea />
                </div>
                <Figure className="membersPicbox">
                  <Figure.Image
                    width={431}
                    height={440}
                    alt="171x180"
                    src={drawing}
                  />
                </Figure>
              </div>

          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/circle">
            <CircleCard />
          </Route>
          <Route exact path="/square">
            <SquareCard />
          </Route>
          <Route exact path="/triangle">
            <TriangleCard />
          </Route>
          <Route exact path="/triangleeq">
            <EquilateralTriangleCard />
          </Route>
          <Route exact path="/trianglesc">
            <ScaleneTriangleCard />
          </Route>
          <Route exact path="/triangleri">
            <RightTriangleCard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Members;