import React,{useEffect,useState,useContext, Component} from "react";
import {useStoreContext} from '../utils/GlobalStore';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Projects from "./Projects.js";
import Nav from "../components/Nav";
import API from "../../src/utils/PROJECT_API";
import Footer from "../components/Footer/Footer";
import SquareCard from "../components/InputCard/squareCard";
import CircleCard from "../components/InputCard/circleCard";
import ShapeArea from "../components/ShapeSection/shapeArea";
import drawing from '../images/181.png';
import Figure from 'react-bootstrap/Figure';



function Members() {

  const [state]=useStoreContext();
  const {email}=state;

  return (
    <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/members">
              <div className='memberContainer'>
                <div className="Title" >
                  <h2>Welcome {email}</h2>
                </div>
                <div className="shapeSection">
                  <ShapeArea />
                </div>
                <Figure>
                  <Figure.Image
                    width={531}
                    height={540}
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
          </Switch>
        </div>
        <Footer />
    </Router>
  )
}

export default Members;