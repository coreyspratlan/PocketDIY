import React from 'react'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure';
import square from '../../images/drawn-square.png';
import circle from '../../images/drawn-circle.png';

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
                    <Button>Square</Button>
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
                    <Button>Circle</Button>
            </Figure>
            </div>
        </div>
    )
}

export default ShapeArea
