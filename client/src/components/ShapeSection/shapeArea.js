import React from 'react'
import Figure from 'react-bootstrap/Figure';
import square from '../../images/drawn-square.png';
import circle from '../../images/drawn-circle.png';
import triangle from '../../images/drawn-triangle.png';
import { Link } from "react-router-dom";

function ShapeArea() {
    return (
        <div className="shapeDiv">
            <div className='squarediv'>
                <Figure>
                    <Figure.Image
                        width={201}
                        height={210}
                        alt="171x180"
                        src={square}
                    />
                    <Link className="squarebutton" to="/square">Square</Link>
                </Figure>
            </div>

            <div className='circlediv'>
                <Figure>
                    <Figure.Image
                        width={201}
                        height={210}
                        alt="171x180"
                        src={circle}
                    />
                    <Link className="circlebutton" to="/circle">Circle</Link>
                </Figure>

                <div className='trianglediv'>
                    <Figure>
                        <Figure.Image
                            width={201}
                            height={210}
                            alt="171x180"
                            src={triangle}
                        />
                        <Link className="trianglebutton" to="/triangle">Isosceles Triangle</Link>
                    </Figure>
                </div>
                <div className='trianglediv'>
                    <Figure>
                        <Figure.Image
                            width={201}
                            height={210}
                            alt="171x180"
                            src={triangle}
                        />
                        <Link to="/triangleeq">Equilateral Triangle</Link>
                    </Figure>
                </div>
                <div className='trianglediv'>
                    <Figure>
                        <Figure.Image
                            width={201}
                            height={210}
                            alt="171x180"
                            src={triangle}
                        />
                        <Link to="/trianglesc">Scalene Triangle</Link>
                    </Figure>
                </div>
                <div className='trianglediv'>
                    <Figure>
                        <Figure.Image
                            width={201}
                            height={210}
                            alt="171x180"
                            src={triangle}
                        />
                        <Link to="/triangleri">Right Triangle</Link>
                    </Figure>
                </div>
            </div>
        </div>
    )
}

export default ShapeArea
