import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../InputCard/card.css';
import API from "../../utils/PROJECT_API";
import { Redirect } from "react-router-dom"

class TriangleCard extends Component {
    state = {
        name: "My Project",
        shape: "triangle",
        width: "",
        height: "",
        perimeter: "",
        area: "",
        unit: "",
        routePath: "",
        submit: ""
    };

    changeValue = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }

    resetPage = (e) => {
        e.preventDefault();
        this.setState({
            name: "My Project",
            shape: "triangle",
            width: "",
            height: "",
            perimeter: "",
            area: "",
            unit: "",
            submit: ""
        })
    }

    addProject = (e) => {
        e.preventDefault();
        if (this.state.name.trim().length === 0) {
            alert('Fill out a project name');
            return;
        } else {
            API.createProject(this.state)
                .then(() => {
                    this.setState({
                        name: "My Project",
                        shape: "triangle",
                        width: "",
                        height: "",
                        perimeter: "",
                        area: "",
                        unit: "",
                        routePath: "/projects",
                        submit: ""
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
        if (width.trim().length === 0 || height.trim().length === 0) {
            alert('Fill out width and height');
            this.setState({
                name: "",
                width: "",
                height: "",
                perimeter: "",
                area: "",
                submit: ""
            });
            return;
        } else if (unit === "") {
            alert('Please select a unit');
            this.setState({
                name: "",
                width: "",
                height: "",
                perimeter: "",
                area: "",
                submit: ""
            });
            return;
        } else {
            this.setState({ perimeter: Math.sqrt((width * width) + (4 * height * height)) + Math.sqrt(width * width)});
            this.setState({ area: (height * width) / 2 });
            let newTriangle = { name, width, height, perimeter, area, unit };
            this.setState({ Triangle: newTriangle });
            this.setState({ submit: "Submit" });
        }
    };

    render() {
        if (this.state.routePath !== "") {
            return <Redirect to={this.state.routePath} />
        }
        return (
            <div className='inputareas'>
                <h5> Isosceles Triangle </h5>
                {this.state.submit === "" &&
                <Form className="cardInputs">

                    <Row>
                        <Col>
                            <Form.Control placeholder="width" className="userinputbox" name="width" value={this.state.width} onChange={this.changeValue} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="height" className="userinputbox" name="height" value={this.state.height} onChange={this.changeValue} />
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

                    <Col xs="auto" className="my-1">
                        <Button type="submit" onClick={this.handleFormSubmit} >Submit</Button>
                    </Col>
                </Form>
                }
                {
                    this.state.submit === "Submit" &&

                    <div className="projectSection">
                        <Col>
                            <Form.Control placeholder="Project Name" name="name" value={this.state.name} onChange={this.changeValue} />
                        </Col>
                        <p>Shape: {this.state.shape}</p>
                        <p>Width: {this.state.width} {this.state.unit}</p>
                        <p>Height: {this.state.height} {this.state.unit}</p>
                        <p>Perimeter: {this.state.perimeter} {this.state.unit}</p>
                        <p>Area: {this.state.area} {this.state.unit}^2</p>
                        {this.state.unit === "in" &&
                            <div>
                                <p>Paint required:</p>
                                <p>{(this.state.area * 0.00694) / 350} gallons</p>
                                <p>{(this.state.area * 0.00694) / 100} quarts</p>
                            </div>
                        }
                        {this.state.unit === "cm" &&
                            <div>
                                <p>Paint required:</p>
                                <p>{(this.state.area * 0.3937 * 0.00694) / 350} gallons</p>
                                <p>{(this.state.area* 0.3937 * 0.00694) / 100} quarts</p>
                            </div>
                        }
                        <Button onClick={this.addProject}>Save Project</Button>
                        <br></br>
                        <br></br>
                        <Button onClick={this.resetPage}>Reset Page</Button>
                    </div>
                }
            </div>
        )
    }
}

export default TriangleCard