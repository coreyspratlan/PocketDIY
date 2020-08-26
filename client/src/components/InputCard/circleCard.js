import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../InputCard/card.css';
import '../../css/main.css';
import ProjectArea from "../ProjectSection/projectArea";
import Figure from 'react-bootstrap/Figure';
import drawing from '../../images/181.png';

class CircleCard extends Component {

    handleFormSubmit = event => {
        const { Radius, Diameter, Perimeter, Area, Unit } = this.state
        event.preventDefault();
        if (Radius.trim().length === 0 && Diameter.trim().length === 0) {
            alert('Fill out radius or diameter');
            this.setState({
                Name: "",
                Radius: "",
                Diameter: ""
            });
            return;
        } else if (Radius.trim().length !== 0 && Diameter.trim().length !== 0) {
            alert('Fill out radius  OR  diameter');
            this.setState({
                Name: "",
                Radius: "",
                Diameter: ""
            });
            return;
        } else if (Unit === 0) {
            alert('Please select a unit');
            this.setState({
                Name: "",
                Radius: "",
                Diameter: ""
            });
            return;
        } else if (Unit === 1 && Radius.trim().length !== 0) {
            Radius = Radius.trim() * 2.54;
            Diameter = Radius * 2;
            Perimeter = Radius * 6.28318;
            Area = Radius * Radius * 3.14159;
            let newCircle = { Radius, Diameter, Perimeter, Area, Unit }
            this.setState({ Circle: newCircle })
            this.setState({
                Name: "",
                Radius: "",
                Diameter: "",
                Perimeter: "",
                Area: "",
                Unit: ""
            });
        } else if (Unit === 1 && Diameter.trim().length !== 0) {
            Diameter = Diameter.trim() * 2.54;
            Radius = Diameter.trim() / 2;
            Perimeter = Radius * 6.28318;
            Area = Radius * Radius * 3.14159;
            let newCircle = { Radius, Diameter, Perimeter, Area, Unit }
            this.setState({ Circle: newCircle })
            this.setState({
                Name: "",
                Radius: "",
                Diameter: "",
                Perimeter: "",
                Area: "",
                Unit: ""
            });
        } else if (Diameter.trim().length !== 0) {
            Radius = Diameter.trim() / 2;
            Perimeter = Radius * 6.28318;
            Area = Radius * Radius * 3.14159;
            let newCircle = { Radius, Diameter, Perimeter, Area, Unit }
            this.setState({ Circle: newCircle })
            this.setState({
                Name: "",
                Radius: "",
                Diameter: "",
                Perimeter: "",
                Area: "",
                Unit: ""
            });
        } else {
            Diameter = Radius * 2;
            Perimeter = Radius * 6.28318;
            Area = Radius * Radius * 3.14159;
            let newCircle = { Radius, Diameter, Perimeter, Area, Unit }
            this.setState({ Circle: newCircle })
            this.setState({
                Name: "",
                Radius: "",
                Diameter: "",
                Perimeter: "",
                Area: "",
                Unit: ""
            });
        };
    };

    render() {
        return (
            <div className='inputAreas'>
                <h5> Circle </h5>
                <Form className="cardInputs">

                    <Row>
                        <Col>
                            <Form.Control placeholder="Radius" />
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
                            <Form.Control placeholder="Diameter" />
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
                <Figure>
                    <Figure.Image
                        width={531}
                        height={540}
                        alt="171x180"
                        src={drawing}
                    />
                </Figure>
            </div>
        )
    }
}

export default CircleCard;