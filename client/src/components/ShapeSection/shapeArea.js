import React from 'react'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure';
import square from '../../images/drawn-square.png';
import circle from '../../images/drawn-circle.png';
import {Link} from "react-router-dom";

function ShapeArea() {
    return (
        <div>
            <div className='squarediv'>
            <Figure>
                    <Figure.Image
                        width={201}
                        height={210}
                        alt="171x180"
                        src={square}
                    />
                    <Link to="/square">Square</Link>
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
                    <Link to="/circle">Circle</Link>
            </Figure>
            </div>
        </div>
    )
}

export default ShapeArea
