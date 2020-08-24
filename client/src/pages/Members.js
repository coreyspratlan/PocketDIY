import React from "react"
import { useStoreContext } from '../utils/GlobalStore';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./Projects.js";
import Nav from "../components/Nav";

function Members() {
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