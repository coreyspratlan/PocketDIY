import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../InputCard/card.css';


function SquareCard() {
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
                    <Button type="submit">Submit</Button>
                </Col>
            </Form>
        </div>
    )
}

export default SquareCard;
