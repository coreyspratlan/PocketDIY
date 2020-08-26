import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../InputCard/card.css';
import ProjectArea from "../ProjectSection/projectArea";

class SquareCard extends Component{

    handleFormSubmit = event => {
        const { Name, Width, Height, Perimeter, Area, Unit } = this.state
        event.preventDefault();
        if (Width.trim().length === 0 && Height.trim().length === 0) {
            alert('Fill out Width or Height');
            this.setState({
                Name: "",
                Width: "",
                Height: "",
                Perimeter: "",
                Area: ""
            });
            return;
        } else if (Width.trim().length !== 0 && Height.trim().length !== 0) {
            alert('Fill out Width  OR  Height');
            this.setState({
                Name: "",
                Width: "",
                Height: "",
                Perimeter: "",
                Area: ""
            });
            return;
        } else if (Name.trim().length !== 0) {
            alert('Fill out a project name');
            this.setState({
                Name: "",
                Width: "",
                Height: "",
                Perimeter: "",
                Area: ""
            });
            return;
        }else if (Unit === 0) {
            alert('Please select a unit');
            this.setState({
                Name: "",
                Width: "",
                Height: "",
                Perimeter: "",
                Area: ""
            });
            return;
        } else if (Unit === 1 && Width.trim().length === 0) {
            Height = Height.trim() * 2.54;
            Perimeter = Height * 4;
            Area = Height * Height
            let newSquare = { Name, Width, Height, Perimeter, Area, Unit }
            this.setState({ Square: newSquare })
            this.setState({
                Name: "",
                Width: "",
                Height: "",
                Perimeter: "",
                Area: "",
                Unit: ""
            });
        } else if (Unit === 1 && Height.trim().length === 0) {
            Width = Width.trim() * 2.54;
            Perimeter = Width * 4;
            Area = Width * Width
            let newSquare = { Name, Width, Height, Perimeter, Area, Unit }
            this.setState({ Square: newSquare })
            this.setState({
                Name: "",
                Width: "",
                Height: "",
                Perimeter: "",
                Area: "",
                Unit: ""
            });
        } 
        else if (Height.trim().length === 0) {
            Perimeter = Width * 4;
            Area = Width * Width
            let newSquare = { Name, Width, Height, Perimeter, Area, Unit }
            this.setState({ Square: newSquare })
            this.setState({
                Name: "",
                Width: "",
                Height: "",
                Perimeter: "",
                Area: "",
                Unit: ""
            });
        } else {
            Perimeter = Height * 4;
            Area = Height * Height
            let newSquare = { Name, Width, Height, Perimeter, Area, Unit }
            this.setState({ Square: newSquare })
            this.setState({
                Name: "",
                Width: "",
                Height: "",
                Perimeter: "",
                Area: "",
                Unit: ""
            });
        };
    };

    render () {
    return (
        <div className='inputAreas'>
            <h5> Square </h5>
            <Form className="cardInputs">

                <Row>
                    <Col>
                        <Form.Control placeholder="Width" />
                    </Col>
                    <Col>
                        <Form.Control
                            as="select"
                            className="unitSelect"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">Choose...</option>
                            <option value="1">Inches</option>
                            <option value="2">Centimeters</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control placeholder="Height" />
                    </Col>
                    <Col>
                        <Form.Control
                            as="select"
                            className="unitSelect"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">Choose...</option>
                            <option value="1">Inches</option>
                            <option value="2">Centimeters</option>
                        </Form.Control>
                    </Col>
                </Row>

                <Col xs="auto" className="my-1">
                    <Button type="submit" onClick={this.handleFormSubmit} >Submit</Button>
                </Col>
            </Form>
            <div className="projectSection">
                <ProjectArea />
            </div>
        </div>
    )
    }
}

export default SquareCard;
