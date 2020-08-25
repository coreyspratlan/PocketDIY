import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SavedProject from "../components/ProjectSection/savedProject";

class Projects extends Component {
  render() {
    return (
      <Container fluid>
        <h1>Projects</h1>

        <SavedProject />
      </Container>
    );
  }
}


export default Projects;
