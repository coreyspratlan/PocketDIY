import React, { useEffect, useState } from "react";
import { useStoreContext } from '../utils/GlobalStore';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./Projects.js";
import Nav from "../components/Nav";
import API from "../../src/utils/PROJECT_API"

function Members() {

  const newProject = (event) => {
    const data = {
      shape: "circle",
      width: 5,
      height: 5,
      depth: 5,
      radius: 5,
      area: 5,
      parimeter: 5
    };
    API.createProject(data)
    .catch(err => {
        alert("An error has occured")
    })
}

  const [state] = useStoreContext();
  const { email } = state;
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/members">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <h2>Welcome {email}</h2>
                  <button onClick={() => newProject()}>Test Project Save</button>
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

export default Members;