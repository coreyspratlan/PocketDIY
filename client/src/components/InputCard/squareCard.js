import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../InputCard/card.css';
import API from "../../utils/PROJECT_API";
import { Redirect } from "react-router-dom";

class SquareCard extends Component {
    state = {
        name: "My Project",
        shape: "square",
        width: "",
        height: "",
        perimeter: "",
        area: "",
        unit: "",
        radius: 0,
        depth: 0,
        routePath: ""
    };

    changeValue = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }

    addProject = (e) => {
        e.preventDefault();
        if (this.state.name.trim().length === 0) {
            alert('Fill out a project name');
            return;
        } else {
            API.createProject(this.state)
            .then(()=> {
                this.setState({
                    name: "My Project",
                    shape: "square",
                    width: "",
                    height: "",
                    perimeter: "",
                    area: "",
                    unit: "",
                    radius: "",
                    depth: "",
                    routePath: "/projects"
                })
            })
                .catch(err => {
                    alert("An error has occured")
                })
            
        };
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { name, width, height, perimeter, area, unit } = this.state
        if (width.trim().length === 0 && height.trim().length === 0) {
            alert('Fill out width or height');
            this.setState({
                name: "",
                width: "",
                height: "",
                perimeter: "",
                area: ""
            });
            return;
        } else if (width.trim().length !== 0 && height.trim().length !== 0) {
            alert('Fill out width  OR  height');
            this.setState({
                name: "",
                width: "",
                height: "",
                perimeter: "",
                area: ""
            });
            return;
        } else if (unit === "") {
            alert('Please select a unit');
            this.setState({
                name: "",
                width: "",
                height: "",
                perimeter: "",
                area: ""
            });
            return;
        } else if (width.trim().length === 0) {
            this.setState({ width: height })
            this.setState({ perimeter: height * 4 })
            this.setState({ area: height * height })
            let newSquare = { name, width, height, perimeter, area, unit }
            this.setState({ Square: newSquare })
        } else {
            this.setState({ height: width })
            this.setState({ perimeter: width * 4 })
            this.setState({ area: width * width })
            let newSquare = { name, width, height, perimeter, area, unit }
            this.setState({ Square: newSquare })

        }
    };

    render() {
        if (this.state.routePath !== "") {
            return <Redirect to={this.state.routePath} />
        }
        return (
            <div className='inputareas'>
                <h5> Square </h5>
                <Form className="cardInputs">

                    <Row>
                        <Col>
                            <Form.Control placeholder="width" name="width" value={this.state.width} onChange={this.changeValue} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                as="select"
                                className="unitSelect"
                                id="inlineFormCustomSelect"
                                name="unit"
                                custom
                                onChange={this.changeValue}
                                value={this.state.unit}
                            >
                                <option value="" >Choose...</option>
                                <option value="in">Inches</option>
                                <option value="cm">Centimeters</option>
                            </Form.Control>
                        </Col>
                    </Row>

                    <Col xs="auto" className="my-1">
                        <Button type="submit" onClick={this.handleFormSubmit} >Submit</Button>
                    </Col>
                </Form>
                <div className="projectSection">
                    <Col>
                        <Form.Control placeholder="Project Name" name="name" value={this.state.name} onChange={this.changeValue} />
                    </Col>
                    <p>Shape: {this.state.shape}</p>
                    <p>Width: {this.state.width} {this.state.unit}</p>
                    <p>Height: {this.state.height} {this.state.unit}</p>
                    <p>Perimeter: {this.state.perimeter} {this.state.unit}</p>
                    <p>Area: {this.state.area} {this.state.unit}^2</p>
                    <Button onClick={this.addProject}>Save Project</Button>
                </div>
            </div>
        )
    }
}

export default SquareCard