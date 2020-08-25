import React from 'react'
import Card from 'react-bootstrap/Card';


function Footer() {

    const styles= {
        borderColor: "black",
        backgroundColor: "lightgray"
    }


    return (
        <div style={styles}>
            <Card>
                <Card.Footer>This is a Footer</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer
