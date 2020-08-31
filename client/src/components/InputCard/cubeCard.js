import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../InputCard/card.css';
import API from "../../utils/PROJECT_API";
import {Redirect} from "react-router-dom";

class SquareCard extends Component {
    state={
        name: "My Project",
        shape: "cube",
        width: "",
        height: "",
        depth: "",
        area: "",
        unit: "",
        volume: "",
        routePath: "",
        submit: ""
    };

    changeValue=(e) => {
        const value=e.target.value;
        const name=e.target.name;
        this.setState({[name]: value});
    }

    resetPage = (e) => {
        e.preventDefault();
        this.setState({
            name: "My Project",
            shape: "cube",
            width: "",
            height: "",
            depth: "",
            area: "",
            volume: "",
            unit: "",
            submit: ""
        })
    }

    addProject = (e) => {
        e.preventDefault();
        this.setState({
            name: "My Project",
            shape: "cube",
            width: "",
            height: "",
            depth: "",
            area: "",
            unit: "",
            radius: "",
            depth: "",
            volume: "",
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
                .then(() => {
                    this.setState({
                        name: "My Project",
                        shape: "cube",
                        width: "",
                        height: "",
                        depth: "",
                        area: "",
                        unit: "",
                        volume: "",
                        routePath: "/projects",
                        submit: ""
                    })
                })
                .catch(err => {
                    alert("An error has occured")
                })

        };
    }

    handleFormSubmit=event => {
        event.preventDefault();
        const {name,width,height,depth,volume,perimeter,area,unit}=this.state
        if(width.trim().length===0) {
            alert('Fill out width');
            this.setState({
                name: "",
                width: "",
                area: "",
                volume: "",
                submit: ""
            });
            return;
        } else if(unit==="") {
            alert('Please select a unit');
            this.setState({
                name: "",
                width: "",
                height: "",
                depth: "",
                area: "",
                volume: "",
                submit: ""
            });
            return;
        } else {
            this.setState({height: width})
            this.setState({depth: width})
            this.setState({volume: width*width*width})
            this.setState({area: width*width})
            let newSquare={name,width,height,depth,volume,area,unit}
            this.setState({Square: newSquare})
            this.setState({submit: "Submit"})

        }
    };

    render() {
        if(this.state.routePath!=="") {
            return <Redirect to={this.state.routePath} />
        }
        return (
            <div className='inputareas'>
                <h5> Square </h5>
                {this.state.submit === "" &&
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
                }
                {
                    this.state.submit==="Submit"&&

                    <div className="projectSection">
                        <Col>
                            <Form.Control placeholder="Project Name" className="userinputbox" name="name" value={this.state.name} onChange={this.changeValue} />
                        </Col>
                        <p>Shape: {this.state.shape}</p>
                        <p>Width: {this.state.width} {this.state.unit}</p>
                        <p>Height: {this.state.height} {this.state.unit}</p>
                        <p>Depth: {this.state.depth} {this.state.unit}</p>
                        <p>Volume: {this.state.volume} {this.state.unit}^3</p>
                        <p>Surface Area: {this.state.area * 6} {this.state.unit}^2</p>
                        {this.state.unit === "in" &&
                            <div>
                                <p>Paint required:</p>
                                <p>{(this.state.area * 6 * 0.00694) / 350} gallons</p>
                                <p>{(this.state.area * 6 * 0.00694) / 100} quarts</p>
                            </div>
                        }
                        {this.state.unit === "cm" &&
                            <div>
                                <p>Paint required:</p>
                                <p>{(this.state.area * 6 * 0.3937 * 0.00694) / 350} gallons</p>
                                <p>{(this.state.area * 6 * 0.3937 * 0.00694) / 100} quarts</p>
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

export default SquareCard