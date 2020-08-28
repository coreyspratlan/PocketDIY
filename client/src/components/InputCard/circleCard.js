import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../InputCard/card.css';
import '../../css/main.css';
import API from "../../utils/PROJECT_API";
import { Redirect } from "react-router-dom"


class CircleCard extends Component {
    state = {
        name: "My Project",
        shape: "circle",
        width: 0,
        height: 0,
        perimeter: "",
        area: "",
        unit: "",
        radius: "",
        depth: 0,
        diameter: "",
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
            .then(
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
                    diameter: "",
                    routePath: "/projects"
                })
            )
                .catch(err => {
                    alert("An error has occured")
                })
            
        };
    }

    handleFormSubmit = event => {
        const { radius, diameter, perimeter, area, unit } = this.state
        event.preventDefault();
        if (radius.trim().length === 0 && diameter.trim().length === 0) {
            alert('Fill out radius or diameter');
            this.setState({
                name: "",
                radius: "",
                diameter: ""
            });
            return;
        } else if (radius.trim().length !== 0 && diameter.trim().length !== 0) {
            alert('Fill out radius  OR  diameter');
            this.setState({
                name: "",
                radius: "",
                diameter: ""
            });
            return;
        } else if (unit === "") {
            alert('Please select a unit');
            this.setState({
                name: "",
                radius: "",
                diameter: ""
            });
            return;
        } else if (diameter.trim().length !== 0) {
            this.setState({ radius: diameter / 2 });
            this.setState({ perimeter: radius * 6.28318 });
            this.setState({ area: radius * radius * 3.14159 });
            let newCircle = { radius, diameter, perimeter, area, unit };
            this.setState({ Circle: newCircle });
        } else {
            this.setState({ diameter: radius * 2 });
            this.setState({ perimeter: radius * 6.28318 });
            this.setState({ area: radius * radius * 3.14159 });
            let newCircle = { radius, diameter, perimeter, area, unit }
            this.setState({ Circle: newCircle });
        };
    };

    render() {
        if (this.state.routePath !== "") {
            return <Redirect to={this.state.routePath} />
        }
        return (
            <div classname='inputareas'>
                <h5> Circle </h5>
                <Form classname="cardInputs">

                    <Row>
                        <Col>
                            <Form.Control placeholder="radius" name="radius" value={this.state.radius} onChange={this.changeValue} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="diameter" name="diameter" value={this.state.diameter} onChange={this.changeValue} />
                        </Col>
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

                    <Col xs="auto" classname="my-1">
                        <Button type="submit" onClick={this.handleFormSubmit} >Submit</Button>
                    </Col>
                </Form>
                <div classname="projectSection">
                    <Col>
                        <Form.Control placeholder="Project Name" name="name" value={this.state.name} onChange={this.changeValue} />
                    </Col>
                    <p>Shape: {this.state.shape}</p>
                    <p>Radius: {this.state.radius} {this.state.unit}</p>
                    <p>Diameter: {this.state.diameter} {this.state.unit}</p>
                    <p>Perimeter: {this.state.perimeter} {this.state.unit}</p>
                    <p>Area: {this.state.area} {this.state.unit}^2</p>
                    <Button onClick={this.addProject}>Save Project</Button>
                </div>
            </div>
        )
    }
}

export default CircleCard;