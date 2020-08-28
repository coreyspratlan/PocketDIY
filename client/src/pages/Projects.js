import React, { useEffect, useState } from "react";
import { Container } from "../components/Grid";
import API from "../utils/PROJECT_API"
import { ListItem } from "../components/List";
import square from '../images/drawn-square.png';
import circle from '../images/drawn-circle.png';
import triangle from '../images/drawn-triangle.png';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

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


  return (
    <Container className="text-center">
      <h1 className="text-center"><b>Projects</b></h1>

      {projects.slice(0).reverse().map(project => {
        return (
          <ListItem key={project.uuid}>
            <a href={"/projects/" + project.uuid}>
            </a>
            <h2 className="text-center">{project.name}
            </h2>

            <Figure className="text-center">

              <Figure.Image

                width={201}
                height={210}
                alt="171x180"
                src={(() => {
                  switch (project.shape) {
                    case "circle": return circle;
                    case "square": return square;
                    case "triangle": return triangle;
                    default: return "";
                  }
                })()}


              />

            </Figure>
            {
              project.width !== 0 &&
              <p>
                Width: {project.width}
              </p>
            }
            {
              project.height !== 0 &&
              <p>
                Height: {project.height}
              </p>
            }
            {
              project.depth !== 0 &&
              <p>
                Depth: {project.depth}
              </p>
            }
            {
              project.radius !== 0 &&
              <p>
                Radius: {project.radius}
              </p>
            }
            {
              project.area !== 0 &&
              <p>
                Area: {project.area}
              </p>
            }
            {
              project.perimeter !== 0 &&
              <p>
                Perimeter: {project.perimeter}
              </p>
            }
            <p>
              Unit: {project.unit}
            </p>
            <Button onClick={() => removeProject(project.uuid)}>
              𝘅
        </Button>
          </ListItem>
        );
      })}

    </Container>
  );

}

export default Projects;






