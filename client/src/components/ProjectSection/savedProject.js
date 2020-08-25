import React from 'react';
import Button from'react-bootstrap/Button';

function SavedProject() {

  const  styles = {
        padding: "20px",
        margin: "10px",
    }

    return (
        <div className="projectInfo" style={styles}>
            <h1>Project Name</h1>
            <p>Project parameters</p>
        </div>
    )
}



export default SavedProject