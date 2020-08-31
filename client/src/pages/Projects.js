import React, { useEffect, useState } from "react";
import API from "../utils/PROJECT_API"
import { ListItem } from "../components/List";
import square from '../images/drawn-square.png';
import cube from '../images/drawn-cube.png';
import circle from '../images/drawn-circle.png';
import triangle from '../images/drawn-triangle.png';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import '../css/projects.css';
import { Col, Row } from "react-bootstrap";
import '../css/main.css';

function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    loadProjects()
  }, [])

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

  //   function (x) {
  //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  return (
    <div className="container projects-container">
      <Row className="light">
        <h1 className="projects-label">Projects List</h1>
      </Row>

      {projects.slice(0).reverse().map(project => {
        return (
          <Row style={{ height: 320 }} className="project-container" key={project.uuid}>
            <a href={"/projects/" + project.uuid}>
            </a>
            <Col md={3} className="project-shape">
              <Figure>
                <Figure.Image
                  width={201}
                  height={210}
                  alt="171x180"
                  className="project-shape-img"
                  src={(() => {
                    switch (project.shape) {
                      case "circle": return circle;
                      case "cube": return cube;
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
                    <span className="project-data-label">Width:</span> <span className="project-data">{(project.width)}</span> <span className="project-metric">{project.unit}</span>
                  </p>
                }
                {
                  project.height !== 0 &&
                  <p>
                    <span className="project-data-label">Height:</span> <span className="project-data">{(project.height)}</span> <span className="project-metric">{project.unit}</span>
                  </p>
                }
                {
                  project.depth !== 0 &&
                  <p>
                    <span className="project-data-label">Depth:</span> <span className="project-data">{(project.depth)}</span> <span className="project-metric">{project.unit}</span>
                  </p>
                }
                {
                  project.radius !== 0 &&
                  <p>
                    <span className="project-data-label">Radius:</span> <span className="project-data">{(project.radius)}</span> <span className="project-metric">{project.unit}</span>
                  </p>
                }
                {
                  project.perimeter !== 0 &&
                  <p>
                    <span className="project-data-label">perimeter:</span> <span className="project-data">{(project.perimeter)}</span> <span className="project-metric">{project.unit}</span>
                  </p>
                }
                {project.shape !== "cube" &&
                  <div>
                    {
                      project.area !== 0 &&
                      <p>
                        <span className="project-data-label">area:</span> <span className="project-data">{(project.area)}</span> <span className="project-metric">{project.unit}^2</span>
                      </p>
                    }
                    {project.unit === "in" &&
                      <div>
                        <p className="project-required-label">Paint required:</p>
                        <p><span className="project-required-data">{parseFloat(((project.area * 0.00694) / 350)).toFixed(2)}</span> <span className="project-metric">gallons</span></p>
                        <p><span className="project-required-data">{parseFloat(((project.area * 0.00694) / 100)).toFixed(2)}</span> <span className="project-metric">quarts</span></p>
                      </div>
                    }
                    {project.unit === "cm" &&
                      <div>
                        <p className="project-required-label">Paint required:</p>
                        <p><span className="project-required-data">{parseFloat(((project.area * 0.3937 * 0.00694) / 350)).toFixed(2)}</span> <span className="project-metric">gallons</span></p>
                        <p><span className="project-required-data">{parseFloat(((project.area * 0.3937 * 0.00694) / 100)).toFixed(2)}</span> <span className="project-metric">quarts</span></p>
                      </div>
                    }
                  </div>
                }
                {project.shape === "cube" &&
                  <div>
                    {
                      project.area !== 0 &&
                      <p>
                        <span className="project-data-label">surface area:</span> <span className="project-data">{(project.area)}</span> <span className="project-metric">{project.unit}^2</span>
                      </p>
                    }
                    {project.unit === "in" &&
                      <div>
                        <p className="project-required-label">Paint required:</p>
                        <p><span className="project-required-data">{parseFloat(((project.area * 6 * 0.00694) / 350)).toFixed(2)}</span> <span className="project-metric">gallons</span></p>
                        <p><span className="project-required-data">{parseFloat(((project.area * 6 * 0.00694) / 100)).toFixed(2)}</span> <span className="project-metric">quarts</span></p>
                      </div>
                    }
                    {project.unit === "cm" &&
                      <div>
                        <p className="project-required-label">Paint required:</p>
                        <p><span className="project-required-data">{parseFloat(((project.area * 6 * 0.3937 * 0.00694) / 350)).toFixed(2)}</span> <span className="project-metric">gallons</span></p>
                        <p><span className="project-required-data">{parseFloat(((project.area * 6 * 0.3937 * 0.00694) / 100)).toFixed(2)}</span> <span className="project-metric">quarts</span></p>
                      </div>
                    }
                    {
                      project.volume !== 0 &&
                      <p>
                        <span className="project-data-label">volume:</span> <span className="project-data">{(project.volume)}</span> <span className="project-metric">{project.unit}^3</span>
                      </p>
                    }
                    {project.unit === "in" &&
                      <div>
                        <p><span className="project-required-data">{parseFloat(project.volume * 0.004329).toFixed(2)}</span> <span className="project-metric">gallons</span></p>
                      </div>
                    }
                    {project.unit === "cm" &&
                      <div>
                        <p><span className="project-required-data">{parseFloat(project.volume * 0.000264172).toFixed(2)}</span> <span className="project-metric">gallons</span></p>
                      </div>
                    }
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
    </div>
  );
}

export default Projects;

