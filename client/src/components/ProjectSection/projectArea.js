import React from 'react';
import Button from'react-bootstrap/Button';

function ProjectArea() {

  const  styles = {
        padding: "20px",
        margin: "10px",
    }

    return (
        <div className="projectInfo" style={styles}>
            <h1>Project Name</h1>
            <p>Project parameters</p>

            <Button>Save Project</Button>
        </div>
    )
}



export default ProjectArea
