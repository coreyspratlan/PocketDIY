import React,{Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../InputCard/card.css';
import '../../css/main.css';
import API from "../../utils/PROJECT_API";
import {Redirect} from "react-router-dom"


class CircleCard extends Component {
    state={
        name: "My Project",
        shape: "circle",
        perimeter: "",
        area: "",
        unit: "",
        radius: "",
        diameter: "",
        routePath: "",
        submit: ""
    };

    changeValue=(e) => {
        const value=e.target.value;
        const name=e.target.name;
        this.setState({[name]: value});
    }


    addProject = (e) => {
        e.preventDefault();
        this.setState({
            name: "My Project",
            shape: "circle",
            perimeter: "",
            area: "",
            unit: "",
            radius: "",
            diameter: "",
            submit: ""
        })
    }

    addProject=(e) => {
        e.preventDefault();
        if(this.state.name.trim().length===0) {
            alert('Fill out a project name');
            return;
        } else {
            API.createProject(this.state)
                .then(
                    this.setState({
                        name: "My Project",
                        shape: "circle",
                        perimeter: "",
                        area: "",
                        unit: "",
                        radius: "",
                        diameter: "",
                        routePath: "/projects",
                        submit: ""
                    })
                )
                .catch(err => {
                    alert("An error has occured")
                })

        };
    }

    handleFormSubmit=event => {
        const {radius,diameter,perimeter,area,unit}=this.state
        event.preventDefault();
        if(radius.trim().length===0&&diameter.trim().length===0) {
            alert('Fill out radius or diameter');
            this.setState({
                name: "",
                radius: "",
                diameter: "",
                submit: ""
            });
            return;

        } else if (unit === "") {
            alert('Please select a unit');
            this.setState({
                name: "",
                radius: "",
                diameter: "",
                submit: ""
            });
            return;
        } else if (diameter.trim().length !== 0) {
            this.setState({ radius: diameter / 2 });
            this.setState({ perimeter: (diameter / 2) * 6.28318 });
            this.setState({ area: (diameter / 2) * (diameter / 2) * 3.14159 });
            let newCircle = { radius, diameter, perimeter, area, unit };
            this.setState({ Circle: newCircle });
            this.setState({ submit: "Submit" })
        } else {
            this.setState({diameter: radius*2});
            this.setState({perimeter: radius*6.28318});
            this.setState({area: radius*radius*3.14159});
            let newCircle={radius,diameter,perimeter,area,unit}
            this.setState({Circle: newCircle});
            this.setState({submit: "Submit"})

        };
    };

    render() {
        if(this.state.routePath!=="") {
            return <Redirect to={this.state.routePath} />
        }
        return (
            <div className='inputareas'>
                <h5> Circle </h5>
                {this.state.submit === "" &&
                    <Form className="cardInputs">
                        <Row>
                            {this.state.diameter === "" &&
                                <Col>
                                    <Form.Control placeholder="radius" name="radius" value={this.state.radius} onChange={this.changeValue} />
                                </Col>
                            }
                            {this.state.radius === "" &&
                                <Col>
                                    <Form.Control placeholder="diameter" name="diameter" value={this.state.diameter} onChange={this.changeValue} />
                                </Col>
                            }
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
                            <Col xs="auto" className="my-1">
                                <Button type="submit" onClick={this.handleFormSubmit} >Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                }
                {
                    this.state.submit==="Submit"&&

                    <div className="projectSection">
                        <Col>
                            <Form.Control placeholder="Project Name" className="userinputbox" name="name" value={this.state.name} onChange={this.changeValue} />
                        </Col>
                        <p>Shape: {this.state.shape}</p>
                        <p>Radius: {this.state.radius} {this.state.unit}</p>
                        <p>Diameter: {this.state.diameter} {this.state.unit}</p>
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
                        <Button onClick={this.addProject}>Save Project</Button><br></br>
                        <Button onClick={this.resetPage}>Reset Page</Button>
                    </div>
                }
            </div>
        )
    }
}

export default CircleCard;