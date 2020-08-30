import React,{useEffect,useState} from "react";
import {Container} from "../components/Grid";
import API from "../utils/PROJECT_API"
import {ListItem} from "../components/List";
import square from '../images/drawn-square.png';
import circle from '../images/drawn-circle.png';
import triangle from '../images/drawn-triangle.png';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import '../css/projects.css';
import {Col,Row,Card,ListGroup,ListGroupItem} from "react-bootstrap";
import '../css/main.css';

function Projects() {

  const [projects,setProjects]=useState([])

  useEffect(() => {
    loadProjects()
  },[])

  function loadProjects() {
    API.getProjects()
      .then(res =>
        setProjects(res.data)
      )
      .catch(err => console.log(err));
  };

  function removeProject(uuid) {
    API.deleteProjects(uuid)
      .then(res =>
        loadProjects());
  };

  return (
    <Container fluid={false} style={{minHeight: "100vh"}}>
      <Row className="light">
        <h1 className="projects-label">Projects</h1>
      </Row>

      {projects.slice(0).reverse().map(project => {
        return (
          <Row style={{height: 220}} className="project-container" key={project.uuid}>
            <a href={"/projects/"+project.uuid}>
            </a>
            <Col md={3} className="project-shape">
              <Figure>
                <Figure.Image
                  width={201}
                  height={210}
                  alt="171x180"
                  src={(() => {
                    switch(project.shape) {
                      case "circle": return circle;
                      case "square": return square;
                      case "triangle": return triangle;
                      default: return "";
                    }
                  })()}
                />
              </Figure>
            </Col>
            <Col md={9} xs={12} className="project-content">
              <ListItem key={project.uuid}>
                <h3><span className="project-name-label">Project Name:</span> <span className="project-name">{project.name}</span>
                </h3>
                {
              project.width !== 0 &&
              <p>
                Width: {project.width} {project.unit}
              </p>
            }
            {
              project.height !== 0 &&
              <p>
                Height: {project.height} {project.unit}
              </p>
            }
            {
              project.depth !== 0 &&
              <p>
                Depth: {project.depth} {project.unit}
              </p>
            }
            {
              project.radius !== 0 &&
              <p>
                Radius: {project.radius} {project.unit}
              </p>
            }
            {
              project.perimeter !== 0 &&
              <p>
                Perimeter: {project.perimeter} {project.unit}
              </p>
            }
            {
              project.area !== 0 &&
              <p>
                Area: {project.area} {project.unit}^2
              </p>
            }
            {
              project.volume !== 0 &&
              <p>
                Volume: {project.volume} {project.unit}^3
              </p>
            }
            {project.unit === "in" &&
              <div>
                <p>Paint required:</p>
                <p>{(project.area * 0.00694) / 350} gallons</p>
                <p>{(project.area * 0.00694) / 100} quarts</p>
              </div>
            }
            {project.unit === "cm" &&
              <div>
                <p>Paint required:</p>
                <p>{(project.area * 0.3937 * 0.00694) / 350} gallons</p>
                <p>{(project.area * 0.3937 * 0.00694) / 100} quarts</p>
              </div>
            }
              </ListItem>
              <div className="close-button">
                <Button onClick={() => removeProject(project.uuid)}>
                  𝘅
                </Button>
              </div>
            </Col>
          </Row>
        );
      })}
        <Row>
      </Row>
    </Container>
  );
}

export default Projects;

